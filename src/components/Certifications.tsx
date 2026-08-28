import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Award, Calendar, CheckCircle2 } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  period: string;
}

const certifications: Certification[] = [
  {
    title: "Azure Databricks & Spark for Data Engineers: Hands-on Project",
    issuer: "Udemy",
    period: "Aug 2026",
  },
  {
    title: "Fundamentals of Azure Databricks",
    issuer: "Packt / Coursera",
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
    <section id="certifications" className="py-14 md:py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-center">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <div className="section-divider mb-10 sm:mb-14" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30, scale: prefersReducedMotion ? 1 : 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: prefersReducedMotion ? 0 : 30, scale: prefersReducedMotion ? 1 : 0.95 }
                }
                transition={{ delay: prefersReducedMotion ? 0 : index * 0.1, duration: 0.5 }}
                className="glass card-accent-bar rounded-2xl p-5 sm:p-6 hover-glow hover:-translate-y-1.5 transition-all duration-300 group cursor-default relative overflow-hidden border border-border hover:border-primary/50 flex flex-col justify-between"
              >
                {/* Consistent Brand Gradient Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Icon */}
                  <div className="icon-accent w-11 h-11 mb-4">
                    <Award className="h-5 w-5 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-sm sm:text-base leading-snug mb-2 group-hover:text-primary transition-colors text-foreground">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold mb-2 text-primary dark:text-foreground/90">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-3 border-t border-border/40 mt-2">
                  <Calendar className="h-3 w-3 flex-shrink-0" />
                  <span>{cert.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
