import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

export const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
};

type AccentHeadingProps = {
  before?: string;
  accent: string;
  after?: string;
  className?: string;
  light?: boolean;
  as?: "h1" | "h2";
};

export const AccentHeading = ({ before, accent, after, className = "", light = false, as = "h2" }: AccentHeadingProps) => {
  const Tag = as;
  return (
    <Tag className={`text-[clamp(2rem,4.4vw,3.35rem)] font-semibold leading-[1.05] tracking-[-0.04em] ${light ? "text-white" : "text-foreground"} ${className}`}>
      {before ? <span>{before} </span> : null}
      <span className="text-primary">{accent}</span>
      {after ? <span>{after}</span> : null}
    </Tag>
  );
};

export const ArrowButton = ({ label, onClick, href }: { label: string; onClick?: () => void; href?: string }) => {
  const className =
    "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110";
  if (href) {
    return (
      <a href={href} className={className}>
        {label}
        <ArrowIcon />
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={className}>
      {label}
      <ArrowIcon />
    </button>
  );
};

export const ArrowIcon = ({ className = "size-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DarkWaves = () => (
  <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="wave-fade" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#C2410C" stopOpacity="0.18" />
        <stop offset="1" stopColor="#C2410C" stopOpacity="0" />
      </linearGradient>
    </defs>
    {Array.from({ length: 14 }).map((_, index) => (
      <path
        key={index}
        d={`M-40 ${40 + index * 56} C 220 ${10 + index * 56}, 420 ${110 + index * 48}, 720 ${50 + index * 52} S 1180 ${120 + index * 40}, 1500 ${30 + index * 50}`}
        fill="none"
        stroke="url(#wave-fade)"
        strokeWidth="1.2"
        opacity={0.55 - index * 0.02}
      />
    ))}
  </svg>
);
