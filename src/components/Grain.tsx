const Grain = () => (
  <svg
    className="pointer-events-none fixed inset-0 z-40 h-full w-full opacity-[0.16] mix-blend-multiply dark:opacity-[0.22] dark:mix-blend-overlay"
    aria-hidden="true"
  >
    <filter id="paper-grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#paper-grain)" />
  </svg>
);

export default Grain;
