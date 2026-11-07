import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type SectionHeadingProps = {
  index: string;
  title: string;
  lede?: string;
};

const SectionHeading = ({ index, title, lede }: SectionHeadingProps) => {
  const reduced = useReducedMotion();

  return (
    <header className="mb-10 grid items-end gap-5 border-b border-border pb-5 md:mb-14 md:grid-cols-[minmax(0,1fr)_17rem]">
      <div>
        <motion.p
          className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-primary"
          initial={reduced ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease }}
        >
          {index}
        </motion.p>
        <h2 className="overflow-hidden text-4xl leading-[0.95] sm:text-5xl md:text-[3.5rem]">
          <motion.span
            className="block"
            initial={reduced ? false : { y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease }}
          >
            {title}
          </motion.span>
        </h2>
      </div>
      {lede ? (
        <motion.p
          className="max-w-sm text-sm leading-6 text-muted-foreground md:justify-self-end md:pb-1 md:text-right"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
        >
          {lede}
        </motion.p>
      ) : null}
    </header>
  );
};

export default SectionHeading;
