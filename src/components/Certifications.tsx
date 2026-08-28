import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Calendar } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  period: string;
  color: string;
  accent: string;
}

const certifications: Certification[] = [
  {
    title: "Azure Databricks & Spark for Data Engineers: Hands-on Project",
    issuer: "Udemy",
    period: "Aug 2026",
    color: "from-blue-500 to-indigo-600",
    accent: "text-blue-400",
  },
  {
    title: "Fundamentals of Azure Databricks",
    issuer: "Packt / Coursera",
    period: "Jul 2026",
    color: "from-indigo-500 to-purple-600",
    accent: "text-indigo-400",
  },
  {
    title: "Microsoft Data Engineer Associate",
    issuer: "DEPI",
    period: "Nov 2025 – Jun 2026",
    color: "from-cyan-500 to-blue-500",
    accent: "text-cyan-400",
  },
  {
    title: "Data Analysis",
    issuer: "Vocat Academy & NTI",
    period: "Jun 2025 – Dec 2025",
    color: "from-green-500 to-teal-500",
    accent: "text-green-400",
  },
  {
    title: "Machine Learning",
    issuer: "Self-paced",
    period: "Aug 2025 – Sep 2025",
    color: "from-purple-500 to-pink-500",
    accent: "text-purple-400",
  },
];

const Certifications = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 30, scale: 0.95 }
                }
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-5 sm:p-6 hover-glow hover:-translate-y-1 transition-all duration-300 group cursor-default relative overflow-hidden"
              >
                {/* Gradient top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} rounded-t-2xl`}
                />

                {/* Icon */}
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-sm sm:text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className={`text-xs sm:text-sm font-semibold mb-2 ${cert.accent}`}>
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
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
