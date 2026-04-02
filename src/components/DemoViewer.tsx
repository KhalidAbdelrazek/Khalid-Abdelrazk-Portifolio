import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DemoItem } from "./demoData";

// ─── Icons ────────────────────────────────────────────────────────────────────

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
const FullscreenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8V5a2 2 0 012-2h3m10 0h3a2 2 0 012 2v3M3 16v3a2 2 0 002 2h3m10 0h3a2 2 0 002-2v-3" />
  </svg>
);

// ─── Types ────────────────────────────────────────────────────────────────────

interface DemoViewerProps {
  items: DemoItem[];
}

// ─── Iframe Viewer ────────────────────────────────────────────────────────────

function IframeViewer({ item, containerRef }: { item: DemoItem; containerRef: React.RefObject<HTMLDivElement> }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // In order to fullscreen the iframe and not just the browser window, 
  // we attempt to fullscreen the container element.
  const handleFullscreen = () => {
    if (!containerRef.current) return;
    const elem = containerRef.current;
    
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        console.warn(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="relative w-full h-full bg-black rounded-xl overflow-hidden group">
      {/* Loading State */}
      {loading && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-sm">Loading preview...</p>
        </div>
      )}

      {/* Error Fallback */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70 gap-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-12 h-12 opacity-50">
            <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-sm">Preview not available, please check the repository.</p>
        </div>
      )}

      {/* IFRAME */}
      <iframe
        src={item.src}
        className={`w-full h-full border-0 transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
        allow="autoplay; fullscreen"
        allowFullScreen
        onLoad={() => setLoading(false)}
        onError={() => { setLoading(false); setError(true); }}
        title={item.label || "Google Drive Preview"}
      />

      {/* Fullscreen Button Overlay */}
      {!loading && !error && (
        <button
          onClick={handleFullscreen}
          className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
          aria-label="Fullscreen"
        >
          <FullscreenIcon />
        </button>
      )}
    </div>
  );
}

// ─── Main DemoViewer ──────────────────────────────────────────────────────────

export function DemoViewer({ items }: DemoViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];
  const hasMultiple = items.length > 1;
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset to first item when items change
  useEffect(() => { setActiveIndex(0); }, [items]);

  return (
    <div className="flex flex-col h-full gap-3" ref={containerRef}>
      {/* TAB BAR (only for multiple items) */}
      {hasMultiple && (
        <div className="flex items-center gap-2 flex-shrink-0 px-1 pt-1">
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
      <div className="flex-1 min-h-0 relative bg-black rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {active && <IframeViewer item={active} containerRef={containerRef} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
