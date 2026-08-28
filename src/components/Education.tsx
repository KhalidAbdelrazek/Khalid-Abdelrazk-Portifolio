import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="education" className="py-14 md:py-20 relative overflow-hidden">
      {/* Intentional single ambient spotlight — not two corner blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[260px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-center">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="section-divider mb-10 sm:mb-14" />

          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            transition={{ delay: 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            // card-accent-bar replaces the generic gradient corner blobs with a purposeful 2px left accent spine
            className="glass card-accent-bar rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 hover-glow transition-all group relative overflow-hidden"
          >
            {/* Subtle top-right dot pattern as intentional texture — not a gradient blob */}
            <div
              className="absolute top-4 right-4 w-24 h-24 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, hsl(195,100%,60%) 1px, transparent 1px)`,
                backgroundSize: "10px 10px",
              }}
            />

            <div className="flex flex-col md:flex-row gap-8 relative z-10">
              {/* Icon & Credential Block */}
              <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
                {/* Flat duotone icon container — replaces gradient-filled rounded square */}
                <motion.div
                  className="icon-accent w-16 h-16 sm:w-20 sm:h-20"
                  whileHover={prefersReducedMotion ? {} : { rotate: [-2, 2, -1, 0], scale: 1.04 }}
                  transition={{ duration: 0.45 }}
                >
                  <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-primary" strokeWidth={1.5} />
                </motion.div>

                {/* GPA Badge — left-border tag instead of a pill */}
                <div className="tag-bordered">
                  <Award className="h-3 w-3 mr-1.5 flex-shrink-0 opacity-80" />
                  GPA: 3.3 / 4.0
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-1">
                    Bachelor of{" "}
                    <span className="text-gradient">Electronics &amp; Communications Engineering</span>
                  </h3>
                  <p className="text-base sm:text-lg text-foreground/80 font-semibold mt-1">
                    Faculty of Engineering
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    BNS University, Egypt
                  </p>
                </div>

                {/* Details — clean icon+label rows, no icon-square boxes */}
                <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="h-4 w-4 text-primary flex-shrink-0" strokeWidth={1.75} />
                    <div>
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">Graduated</p>
                      <p className="font-bold text-sm">2026</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <BookOpen className="h-4 w-4 text-accent flex-shrink-0" strokeWidth={1.75} />
                    <div>
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">Field</p>
                      <p className="font-bold text-sm leading-tight">Electronics &amp; Communications</p>
                    </div>
                  </div>
                </div>

                {/* Tags — left-border bordered tags instead of rounded pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Signal Processing",
                    "Embedded Systems",
                    "Data Networks",
                    "Digital Communications",
                    "Wireless Communications",
                    "Network Security",
                    "RF Engineering",
                  ].map((tag) => (
                    <span key={tag} className="tag-bordered">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
