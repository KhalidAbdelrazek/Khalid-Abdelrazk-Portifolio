interface Certification {
  title: string;
  issuer: string;
  period: string;
}

const certifications: Certification[] = [
  { title: "Azure Databricks & Spark for Data Engineers", issuer: "Udemy", period: "Aug 2026" },
  { title: "Fundamentals of Azure Databricks", issuer: "Coursera", period: "Jul 2026" },
  { title: "Microsoft Data Engineer Associate", issuer: "DEPI", period: "Nov 2025 – Jun 2026" },
  { title: "Data Analysis", issuer: "Vocat Academy & NTI", period: "Jun 2025 – Dec 2025" },
  { title: "Machine Learning", issuer: "Self-paced", period: "Aug 2025 – Sep 2025" },
];

const Certifications = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {certifications.map((cert) => (
        <article key={cert.title} className="rounded-[24px] bg-white p-5 shadow-[0_10px_30px_rgba(29,36,48,0.04)]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{cert.issuer}</p>
          <h3 className="mt-2 text-lg font-semibold leading-snug">{cert.title}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{cert.period}</p>
        </article>
      ))}
    </div>
  );
};

export default Certifications;
