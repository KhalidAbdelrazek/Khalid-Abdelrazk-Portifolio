import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AccentHeading, ease } from "@/components/design/bits";

const groups = [
  { label: "Languages", items: ["Python", "SQL", "R", "Excel"] },
  { label: "Transformation", items: ["dbt", "ETL & Pipelines", "Data Modeling", "Medallion Architecture", "Data Cleaning"] },
  { label: "Platforms", items: ["Airflow", "Spark", "Azure Databricks", "Docker", "Git"] },
  { label: "Stores", items: ["Amazon Redshift", "PostgreSQL", "SQL Server", "DuckDB", "MongoDB"] },
  { label: "Analysis", items: ["Power BI", "Tableau", "Metabase", "Machine Learning", "Statistics"] },
];

const ticker = ["Python", "SQL", "dbt", "Redshift", "Power BI", "Airflow", "Spark", "Metabase", "Dagster", "Excel"];

const Skills = () => {
  const [active, setActive] = useState(groups[0].items[0]);
  const activeGroup = groups.find((group) => group.items.includes(active))?.label ?? "";

  return (
    <section id="skills" className="scroll-mt-28 bg-background py-8">
      <div className="overflow-hidden bg-[#171717] py-4 text-white">
        <div className="marquee-track flex w-max gap-8">
          {[0, 1].map((copy) => (
            <p key={copy} className="flex gap-8 text-2xl font-semibold tracking-tight" aria-hidden={copy === 1}>
              {ticker.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center gap-8">
                  <span className={item === "dbt" || item === "Redshift" || item === "Metabase" ? "text-primary" : ""}>{item}</span>
                  <span className="text-primary">✦</span>
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <AccentHeading before="The" accent="toolkit" />
          <div className="min-h-[3rem] sm:text-right">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease }}
                className="text-2xl font-semibold text-primary"
              >
                {active}
              </motion.p>
            </AnimatePresence>
            <p className="text-sm text-muted-foreground">{activeGroup}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {groups.flatMap((group) =>
            group.items.map((item) => {
              const isActive = item === active;
              return (
                <button
                  key={item}
                  type="button"
                  onMouseEnter={() => setActive(item)}
                  onFocus={() => setActive(item)}
                  onClick={() => setActive(item)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "bg-primary text-white" : "bg-[#F2F4F7] text-[#344054] hover:bg-[#E7D9CE]"
                  }`}
                >
                  {item}
                </button>
              );
            }),
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
