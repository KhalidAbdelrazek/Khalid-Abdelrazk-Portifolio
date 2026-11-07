import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DemoViewer } from "./DemoViewer";
import { DemoEntry } from "./demoData";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  demoEntry: DemoEntry;
}

export function DemoModal({ isOpen, onClose, projectTitle, demoEntry }: DemoModalProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Calm background music track
      const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=calm-ambient-118561.mp3");
      audio.loop = true;
      audio.volume = 0.2; // Soft volume
      audioRef.current = audio;
      audio.play().catch((err) => console.log("Audio autoplay prevented by browser:", err));
    } else {
      document.body.style.overflow = "auto";
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    }
    return () => {
      document.body.style.overflow = "auto";
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:px-6 sm:py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-foreground/50"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="relative flex h-full w-full max-w-6xl flex-col overflow-hidden border border-border bg-background md:h-[90vh]"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h3 className="truncate pr-8 text-lg md:text-xl">
                {projectTitle} <span className="font-sans text-sm not-italic text-primary">Live demo</span>
              </h3>
              <button
                onClick={onClose}
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
              >
                Close
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-hidden bg-secondary p-2 sm:p-6">
              <DemoViewer items={demoEntry.items} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
