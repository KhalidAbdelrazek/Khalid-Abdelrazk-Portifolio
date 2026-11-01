import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Award, CalendarDays } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  period: string;
}

const certifications: Certification[] = [
  {
    title: "Azure Databricks & Spark for Data Engineers",
    issuer: "Udemy",
    period: "Aug 2026",
  },
  {
    title: "Fundamentals of Azure Databricks",
    issuer: "Coursera",
    period: "Jul 2026",
  },
  {
    title: "Microsoft Data Engineer Associate",
    issuer: "DEPI",
    period: "Nov 2025 – Jun 2026",
  },
  {
    title: "Data Analysis",
    issuer: "Vocat Academy & NTI",
    period: "Jun 2025 – Dec 2025",
  },
  {
    title: "Machine Learning",
    issuer: "Self-paced",
    period: "Aug 2025 – Sep 2025",
  },
];

const Certifications = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-8 grid gap-4 border-b border-border pb-5 sm:mb-10 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Courses &amp; credentials</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Certifications</h2>
            </div>
            <p className="text-sm text-muted-foreground">{String(certifications.length).padStart(2, "0")} completed programs</p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <article key={cert.title} className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/30 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground/80">
                    <Award className="size-4" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{cert.issuer}</span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays className="size-3.5" aria-hidden="true" /> {cert.period}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">{cert.title}</h3>
                    <p className="mt-3 font-mono text-[11px] tabular-nums text-muted-foreground/70">{String(index + 1).padStart(2, "0")}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
