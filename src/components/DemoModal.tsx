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
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 py-6 sm:py-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-6xl h-full md:h-[90vh] glass-heavy rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/30 backdrop-blur-md">
              <h3 className="text-lg md:text-xl font-bold text-white pr-8 truncate">
                {projectTitle} <span className="text-primary font-normal">Live Demo</span>
              </h3>
              <button
                onClick={onClose}
                className="p-2 -mr-2 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Viewer Area */}
            <div className="flex-1 min-h-0 bg-black/50 p-2 sm:p-6 overflow-hidden">
              <DemoViewer items={demoEntry.items} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
