import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import profileImage from "@/assets/profile.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { end: 1, suffix: "+", decimals: 0, label: "Year building pipelines and dashboards" },
  { end: 50, suffix: "+", decimals: 0, label: "Finance and growth KPIs in one model" },
  { end: 36, suffix: "M+", decimals: 0, label: "Trip records in the TLC pipeline" },
  { end: 3.3, suffix: "", decimals: 1, label: "GPA, Electronics & Communications" },
];

const links = [
  { href: "https://github.com/khalidabdelrazek", label: "GitHub" },
  { href: "https://www.linkedin.com/in/khalid-abdelrazk-7719b32b3/", label: "LinkedIn" },
  { href: "mailto:khalidabdelrazk4@gmail.com", label: "Email" },
];

const useCount = (end: number, run: boolean, decimals: number, instant: boolean) => {
  const [value, setValue] = useState(instant ? end : 0);

  useEffect(() => {
    if (!run) return;
    if (instant) {
      setValue(end);
      return;
    }
    const start = performance.now();
    const duration = 1200;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, instant, run]);

  return decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
};

const Stat = ({
  end,
  suffix,
  decimals,
  label,
  run,
  index,
}: (typeof stats)[number] & { run: boolean; index: number }) => {
  const reduced = useReducedMotion();
  const shown = useCount(end, run, decimals, Boolean(reduced));
  return (
    <motion.div
      className="border-b border-border py-5 pr-4 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
      initial={reduced ? false : { opacity: 0, y: 14 }}
      animate={run ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.55, delay: reduced ? 0 : 0.08 * index, ease }}
    >
      <dt className="font-display text-3xl leading-none sm:text-4xl">
        {shown}
        {suffix}
      </dt>
      <dd className="mt-2 max-w-[12rem] text-xs leading-5 text-muted-foreground">{label}</dd>
    </motion.div>
  );
};

const Hero = () => {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDListElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-40px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -56]);

  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { y: "115%" },
          animate: { y: "0%" },
          transition: { duration: 1, delay, ease },
        };

  return (
    <section id="hero" ref={sectionRef} className="scroll-mt-24 border-b border-border">
      <div className="frame pb-12 pt-8 lg:pb-16 lg:pt-12">
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          <span>Analytics engineer at Flash</span>
          <span className="flex items-center gap-2">
            <span className="pulse-dot size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Cairo, Egypt
          </span>
        </motion.div>

        <div className="mt-10 grid items-end gap-8 xl:mt-16 xl:grid-cols-[minmax(0,1fr)_16.5rem] xl:gap-14">
          <div>
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-primary"
            >
              Data analyst · Data engineer
            </motion.p>
            <h1 className="text-[clamp(2.9rem,7.2vw,6.6rem)] leading-[0.84] tracking-[-0.045em]">
              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span className="block" {...rise(0.12)}>
                  Khalid
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span className="block italic text-primary" {...rise(0.26)}>
                  Abdelrazk
                </motion.span>
              </span>
            </h1>
            <motion.p
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
            >
              Mohammed Ibrahim
            </motion.p>
          </div>

          <motion.figure style={{ y: portraitY }} className="max-w-[16rem] xl:max-w-none xl:justify-self-end">
            <div className="relative">
              <motion.div
                aria-hidden="true"
                className="absolute -left-2.5 -top-2.5 h-full w-full border border-primary"
                initial={reduced ? false : { opacity: 0, x: 14, y: 14 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, delay: 0.55, ease }}
              />
              <div className="overflow-hidden">
                <motion.img
                  src={profileImage}
                  alt="Portrait of Khalid Abdelrazk"
                  className="relative aspect-[4/5] w-full object-cover object-[center_20%]"
                  initial={reduced ? false : { clipPath: "inset(100% 0 0 0)", scale: 1.08 }}
                  animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
                  transition={{ duration: 1.15, delay: 0.35, ease }}
                  whileHover={reduced ? undefined : { scale: 1.035 }}
                />
              </div>
            </div>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Portrait · Cairo
            </figcaption>
          </motion.figure>
        </div>

        <div className="mt-12 grid gap-8 pt-8 lg:grid-cols-[minmax(0,38rem)_auto] lg:items-end">
          <motion.div
            aria-hidden="true"
            className="col-span-full h-px origin-left bg-border"
            initial={reduced ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.55, ease }}
          />
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease }}
            className="text-base leading-7 text-foreground/90 sm:text-lg sm:leading-8"
          >
            Data Analyst and Data Engineer with 1+ years of experience building data pipelines, analytics models, and BI dashboards that turn raw data into business decisions. Skilled in Python, SQL, dbt, Power BI, and cloud data platforms.
          </motion.p>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.88, ease }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <a
              href="https://drive.google.com/file/d/1R4OBFBmX3yRYVu-ZxegHulADLe0amrLn/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center bg-foreground px-5 text-sm text-background transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Download CV
            </a>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="link-draw text-sm text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        <dl ref={statsRef} className="mt-12 grid grid-cols-2 border-t border-border sm:grid-cols-4">
          {stats.map((stat, index) => (
            <Stat key={stat.label} {...stat} index={index} run={Boolean(statsInView) || Boolean(reduced)} />
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
