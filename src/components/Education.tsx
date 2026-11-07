import SectionHeading from "@/components/SectionHeading";

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
  return (
    <section id="education" className="scroll-mt-24 border-b border-border py-16 md:py-24">
      <div className="frame">
        <SectionHeading
          index="02 — Study"
          title="Education"
          lede="Electronics and communications, with the quantitative ground that data work sits on."
        />

        <article>
          <div className="flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Bachelor’s degree</p>
              <h3 className="mt-3 max-w-3xl text-3xl leading-tight sm:text-4xl">
                Electronics &amp; Communications Engineering
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">Faculty of Engineering · BNS University, Egypt</p>
            </div>
            <div className="md:text-right">
              <p className="font-display text-4xl">2026</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Completed</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">GPA 3.3 / 4.0</p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-0">
            {studyAreas.map((area, index) => (
              <li key={area} className="text-sm text-foreground/85">
                {area}
                {index < studyAreas.length - 1 ? <span className="mx-3 text-primary">/</span> : null}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Education;
