import { AccentHeading, DarkWaves, Reveal } from "@/components/design/bits";

const results = [
  {
    figure: "50+",
    label: "KPIs, one model",
    copy: "MAU, TPV, revenue, CAC, and churn moved out of ad hoc queries and into a governed Metabase model.",
  },
  {
    figure: "36M+",
    label: "Trip records",
    copy: "An end-to-end PySpark pipeline landed NYC TLC trips in a star schema, with Power BI on top.",
  },
  {
    figure: "40%",
    label: "Shorter reporting cycle",
    copy: "Airflow replaced a manual reporting loop during the DEPI data engineering track.",
  },
];

const Results = () => {
  return (
    <section id="results" className="scroll-mt-28 px-3 py-8 sm:px-6">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[32px] bg-[#12151c] px-4 py-14 text-white sm:px-10 sm:py-16">
        <DarkWaves />
        <div className="pointer-events-none absolute right-10 top-8 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <AccentHeading before="Work that speaks to" accent="My Results" light className="text-center" />
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/70">
            No borrowed quotes. These are outcomes from the pipelines, models, and dashboards on this site.
          </p>
        </Reveal>
        <div className="relative mt-10 grid gap-4 lg:grid-cols-3">
          {results.map((result, index) => (
            <Reveal key={result.label} delay={index * 0.08}>
              <article className="h-full rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className="text-4xl font-semibold tracking-tight text-primary">{result.figure}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{result.label}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{result.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
