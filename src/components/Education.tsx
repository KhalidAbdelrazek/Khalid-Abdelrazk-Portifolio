import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { GraduationCap, CalendarDays, Award, BookOpen } from "lucide-react";

const studyAreas = [
  "Signal Processing",
  "Embedded Systems",
  "Data Networks",
  "Digital Communications",
  "Wireless Communications",
  "Network Security",
  "RF Engineering",
];

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-8 border-b border-border pb-5 sm:mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Academic background</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Education</h2>
          </div>

          <article className="grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground/80">
                    <GraduationCap className="size-6" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Bachelor’s degree</p>
                    <h3 className="mt-2 max-w-2xl text-xl font-semibold leading-snug sm:text-2xl">Electronics &amp; Communications Engineering</h3>
                    <p className="mt-2 text-sm font-medium text-foreground/80">Faculty of Engineering</p>
                    <p className="mt-1 text-sm text-muted-foreground">BNS University, Egypt</p>
                  </div>
                </div>
                <div className="rounded-lg border border-border px-3 py-2 text-sm font-semibold tabular-nums">GPA 3.3 / 4.0</div>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <BookOpen className="size-4" aria-hidden="true" /> Areas of study
                </div>
                <ul className="flex flex-wrap gap-2">
                  {studyAreas.map((area) => (
                    <li key={area} className="rounded-md bg-secondary px-3 py-1.5 text-xs text-secondary-foreground">{area}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="flex flex-row items-center justify-between gap-4 border-t border-border bg-secondary/40 p-6 lg:flex-col lg:items-start lg:justify-between lg:border-l lg:border-t-0 lg:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Completed</p>
                <div className="mt-2 flex items-center gap-2">
                  <CalendarDays className="size-4 text-muted-foreground" aria-hidden="true" />
                  <p className="text-2xl font-semibold tabular-nums">2026</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Award className="size-4" aria-hidden="true" />
                Electronics &amp; Communications
              </div>
            </aside>
          </article>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
