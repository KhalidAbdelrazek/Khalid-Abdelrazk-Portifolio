import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

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
  return (
    <section id="certifications" className="scroll-mt-24 border-b border-border py-16 md:py-24">
      <div className="frame">
        <SectionHeading
          index="03 — Credentials"
          title="Certifications"
          lede={`${String(certifications.length).padStart(2, "0")} programs, from Databricks to a data engineering associate track.`}
        />

        <div className="hidden grid-cols-[3rem_1.4fr_1fr_auto] gap-4 border-b border-border pb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:grid">
          <span>No.</span>
          <span>Program</span>
          <span>Issuer</span>
          <span>When</span>
        </div>

        <ul>
          {certifications.map((cert, index) => (
            <motion.li
              key={cert.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-1 border-b border-border py-5 sm:grid-cols-[3rem_1.4fr_1fr_auto] sm:items-baseline sm:gap-4"
            >
              <span className="font-mono text-[11px] text-primary">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-lg leading-snug sm:text-xl">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="font-mono text-xs text-muted-foreground sm:text-right">{cert.period}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
