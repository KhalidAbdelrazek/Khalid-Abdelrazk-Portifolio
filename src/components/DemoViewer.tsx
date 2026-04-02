import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DemoItem, VideoItem } from "./demoData";

// ─── Icons (inline SVG to avoid extra deps) ───────────────────────────────────

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M8 5v14l11-7z" />
  </svg>
);
const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);
const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Types ────────────────────────────────────────────────────────────────────

interface DemoViewerProps {
  items: DemoItem[];
}

// ─── Video Player ─────────────────────────────────────────────────────────────

function VideoPlayer({ item }: { item: VideoItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [buffered, setBuffered] = useState(0);
  const [error, setError] = useState(false);

  const SPEEDS = [0.5, 1, 1.5, 2, 3, 4];

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  // Auto-show controls briefly, then hide
  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowControls(false), 2800);
  }, []);

  useEffect(() => {
    resetHideTimer();
    return () => { if (hideTimer.current) clearTimeout(hideTimer.current); };
  }, [resetHideTimer]);

  // Sync video state on mount / src change
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    setError(false);
    setPlaying(true);
    setProgress(0);
    setCurrentTime(0);
    v.playbackRate = speed;
    v.play().catch(() => setPlaying(false));
  }, [item.src]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const v = videoRef.current;
    if (v) v.playbackRate = speed;
  }, [speed]);

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setCurrentTime(v.currentTime);
    setProgress((v.currentTime / v.duration) * 100);
    if (v.buffered.length > 0) {
      setBuffered((v.buffered.end(v.buffered.length - 1) / v.duration) * 100);
    }
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
    resetHideTimer();
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = progressRef.current;
    const v = videoRef.current;
    if (!bar || !v || !v.duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    v.currentTime = ratio * v.duration;
    resetHideTimer();
  };

  return (
    <div
      className="relative w-full h-full bg-black rounded-xl overflow-hidden group/video"
      onMouseMove={resetHideTimer}
      onTouchStart={resetHideTimer}
      onClick={togglePlay}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(videoRef.current?.duration ?? 0)}
        onError={() => setError(true)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="w-full h-full object-contain select-none"
        style={{ userSelect: "none", WebkitUserSelect: "none" }}
      />

      {/* ERROR FALLBACK */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70 gap-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-12 h-12 opacity-50">
            <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-sm">Video could not be loaded.</p>
        </div>
      )}

      {/* CONTROLS OVERLAY */}
      <AnimatePresence>
        {showControls && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 bottom-0 px-3 pt-8 pb-3 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)" }}
          >
            {/* PROGRESS BAR */}
            <div
              ref={progressRef}
              className="relative h-1.5 rounded-full bg-white/20 mb-3 cursor-pointer pointer-events-auto group/bar"
              onClick={handleProgressClick}
            >
              {/* Buffered */}
              <div
                className="absolute top-0 left-0 h-full rounded-full bg-white/30"
                style={{ width: `${buffered}%` }}
              />
              {/* Played */}
              <div
                className="absolute top-0 left-0 h-full rounded-full bg-primary transition-none"
                style={{ width: `${progress}%` }}
              />
              {/* Thumb */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow opacity-0 group-hover/bar:opacity-100 transition-opacity"
                style={{ left: `calc(${progress}% - 6px)` }}
              />
            </div>

            {/* BOTTOM ROW */}
            <div className="flex items-center justify-between gap-2 pointer-events-auto">
              {/* Play/Pause */}
              <button
                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                className="text-white hover:text-primary transition-colors"
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? <PauseIcon /> : <PlayIcon />}
              </button>

              {/* Time */}
              <span className="text-white/70 text-xs font-mono tabular-nums">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              <div className="flex-1" />

              {/* Speed selector */}
              <div className="flex items-center gap-1">
                {SPEEDS.map((s) => (
                  <button
                    key={s}
                    onClick={(e) => { e.stopPropagation(); setSpeed(s); resetHideTimer(); }}
                    className={`text-[10px] font-semibold px-1.5 py-0.5 rounded transition-colors ${
                      speed === s
                        ? "bg-primary text-white"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {s}×
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BIG PLAY/PAUSE CENTER HIT (invisible) */}
      {!showControls && !error && (
        <div className="absolute inset-0 cursor-pointer" />
      )}
    </div>
  );
}

// ─── PDF Viewer ───────────────────────────────────────────────────────────────

function PdfViewer({ src, label }: { src: string; label?: string }) {
  const [error, setError] = useState(false);
  return (
    <div className="w-full h-full flex flex-col rounded-xl overflow-hidden">
      {label && (
        <div className="text-xs font-semibold text-white/70 px-3 py-2 bg-black/40 flex-shrink-0">
          {label}
        </div>
      )}
      {error ? (
        <div className="flex-1 flex flex-col items-center justify-center text-white/70 gap-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-12 h-12 opacity-50">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          <p className="text-sm">PDF could not be loaded.</p>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            Open in new tab
          </a>
        </div>
      ) : (
        <iframe
          src={src}
          title={label ?? "PDF Preview"}
          className="flex-1 w-full border-0"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}

// ─── Main DemoViewer ──────────────────────────────────────────────────────────

export function DemoViewer({ items }: DemoViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];
  const hasMultiple = items.length > 1;

  // Reset to first item when items change
  useEffect(() => { setActiveIndex(0); }, [items]);

  return (
    <div className="flex flex-col h-full gap-3">
      {/* TAB BAR (only for multiple items) */}
      {hasMultiple && (
        <div className="flex items-center gap-2 flex-shrink-0 px-1">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeIndex === i
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
              }`}
            >
              {item.label ?? `Part ${i + 1}`}
            </button>
          ))}

          {/* Prev / Next arrows */}
          <div className="ml-auto flex items-center gap-1">
            <button
              onClick={() => setActiveIndex((p) => Math.max(0, p - 1))}
              disabled={activeIndex === 0}
              className="p-1.5 rounded-lg bg-white/10 text-white/70 hover:bg-white/20 hover:text-white disabled:opacity-30 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>
            <span className="text-white/50 text-xs font-mono">
              {activeIndex + 1}/{items.length}
            </span>
            <button
              onClick={() => setActiveIndex((p) => Math.min(items.length - 1, p + 1))}
              disabled={activeIndex === items.length - 1}
              className="p-1.5 rounded-lg bg-white/10 text-white/70 hover:bg-white/20 hover:text-white disabled:opacity-30 transition-all"
              aria-label="Next"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}

      {/* CONTENT AREA */}
      <div className="flex-1 min-h-0 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {active.type === "video" ? (
              <VideoPlayer item={active} />
            ) : (
              <PdfViewer src={active.src} label={active.label} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
