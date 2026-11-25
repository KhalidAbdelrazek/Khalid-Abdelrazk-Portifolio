import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import pipelineShot from "@/assets/project-dbt-migration.jpg";
import analyticsShot from "@/assets/project-ai-data-layer.jpg";
import { AccentHeading, ArrowIcon, DarkWaves, Reveal, ease, scrollTo } from "@/components/design/bits";

const services = [
  {
    title: "Data Engineering",
    copy: "Pipelines that extract, clean, and land data in a warehouse people can query the next morning.",
    image: pipelineShot,
    alt: "Laptop screen with code used for a data pipeline",
  },
  {
    title: "Analytics Engineering",
    copy: "dbt models, medallion layers, and governed metrics so every team reads the same definition.",
    image: analyticsShot,
    alt: "Laptop showing charts next to a notebook",
  },
  {
    title: "Analysis & BI",
    copy: "Power BI and Python views that make revenue, operations, and retention obvious.",
    image: analyticsShot,
    alt: "Laptop screen filled with charts and graphs",
  },
  {
    title: "Data Modeling",
    copy: "Star schemas, slowly changing dimensions, and incremental facts that stay cheap to refresh.",
    image: pipelineShot,
    alt: "Code on a laptop, standing in for a modeled warehouse",
  },
  {
    title: "Machine Learning",
    copy: "Forecasting and classification models, evaluated before they ever reach a decision.",
    image: analyticsShot,
    alt: "Charts on a laptop used for model review",
  },
  {
    title: "Data Quality",
    copy: "Repeatable cleaning for missing values, duplicates, and the formats that break a report.",
    image: pipelineShot,
    alt: "Code on a laptop, used for repeatable data cleaning",
  },
];

const Services = () => {
  const reduced = useReducedMotion();
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(services.length / 3);
  const visible = services.slice(page * 3, page * 3 + 3);

  return (
    <section id="services" className="scroll-mt-28 px-3 py-8 sm:px-6">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[32px] bg-[#12151c] px-4 py-12 text-white sm:px-8 sm:py-16">
        <DarkWaves />
        <div className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-[#E8B089]/25 blur-3xl" />

        <div className="relative grid items-end gap-6 md:grid-cols-[1fr_minmax(0,22rem)]">
          <AccentHeading before="My" accent="Services" light />
          <p className="max-w-sm text-base leading-7 text-white/75 md:justify-self-end md:text-right">
            From a raw extract to a number a team will actually use. Python, SQL, dbt, and the warehouse underneath.
          </p>
        </div>

        <div className="relative mt-10 grid gap-4 md:grid-cols-3">
          <AnimatePresence mode="wait">
            {visible.map((service, index) => (
              <motion.article
                key={service.title}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.4, delay: reduced ? 0 : index * 0.06, ease }}
                className="group flex flex-col rounded-[28px] border border-white/15 bg-white/5 p-4 backdrop-blur-md"
              >
                <h3 className="px-2 pt-2 text-2xl font-semibold text-white">{service.title}</h3>
                <p className="px-2 pb-4 pt-2 text-sm leading-6 text-white/70">{service.copy}</p>
                <div className="relative mt-auto overflow-hidden rounded-[22px] bg-[#f4f1ec]">
                  <img src={service.image} alt={service.alt} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  <button
                    type="button"
                    onClick={() => scrollTo("projects")}
                    aria-label={`See ${service.title} work`}
                    className="absolute bottom-3 right-3 grid size-12 place-items-center rounded-full bg-[#1D2430] text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:bg-primary"
                  >
                    <ArrowIcon />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="relative mt-8 flex justify-center gap-2" aria-label="Service pages">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Services page ${index + 1}`}
              aria-pressed={page === index}
              onClick={() => setPage(index)}
              className={`h-2.5 rounded-full transition-all ${page === index ? "w-8 bg-primary" : "w-2.5 bg-white/35"}`}
            />
          ))}
        </div>
        <Reveal className="relative mt-2 text-center text-xs text-white/50">Use the dots to see the rest of the practice.</Reveal>
      </div>
    </section>
  );
};

export default Services;
