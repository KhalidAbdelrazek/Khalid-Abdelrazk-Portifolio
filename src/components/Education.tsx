import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            My <span className="text-gradient title-underline">Education</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="glass rounded-3xl p-8 md:p-10 hover-glow transition-all hover:scale-[1.01] group relative overflow-hidden"
          >
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-3xl" />

            <div className="flex flex-col md:flex-row gap-8 relative z-10">
              {/* Icon & Degree Badge */}
              <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
                <motion.div
                  className="p-5 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg group-hover:shadow-primary/30 transition-shadow"
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="h-10 w-10 text-white" />
                </motion.div>

                {/* GPA Badge */}
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">GPA: 3.2 / 4.0</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-1">
                    Bachelor of{" "}
                    <span className="text-gradient">Telecommunications Engineering</span>
                  </h3>
                  <p className="text-lg text-foreground/80 font-medium">
                    Faculty of Engineering
                  </p>
                  <p className="text-base text-muted-foreground">
                    Beni Suef University, Egypt
                  </p>
                </div>

                {/* Details Grid */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-border/40">
                  <div className="flex items-center gap-3">
                    <div className="p-2 glass rounded-lg flex-shrink-0">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Expected Graduation</p>
                      <p className="font-semibold text-sm">2026</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 glass rounded-lg flex-shrink-0">
                      <BookOpen className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Field</p>
                      <p className="font-semibold text-sm">Telecommunications Engineering</p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Signal Processing",
                    "Embedded Systems",
                    "Data Networks",
                    // "IoT",
                    "Digital Communications",
                    "Wireless Communications",
                    // "Telecom Protocols",
                    "Network Security",
                    "RF Engineering",
                    // "5G & Beyond",
                    // "Modulation Techniques",
                    // "Telecom Systems Design",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium glass rounded-full border border-primary/20 text-foreground/70 hover:border-primary/50 hover:text-primary transition-colors"
                    >
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
