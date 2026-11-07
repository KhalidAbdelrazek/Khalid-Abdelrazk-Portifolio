import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const groups = [
  {
    label: "Languages",
    items: ["Python", "SQL", "R", "Microsoft Excel"],
  },
  {
    label: "Transformation",
    items: ["dbt (data build tool)", "ETL & Pipelines", "Data Modeling", "Medallion Architecture", "Data Cleaning"],
  },
  {
    label: "Platforms",
    items: ["Apache Airflow", "Apache Spark / PySpark", "Azure Databricks", "Microsoft Azure", "Docker", "Git", "GitHub"],
  },
  {
    label: "Stores",
    items: ["Amazon Redshift", "PostgreSQL", "SQL Server", "DuckDB", "MongoDB", "Database Administration"],
  },
  {
    label: "Analysis",
    items: [
      "Power BI",
      "Tableau",
      "Metabase",
      "Business Analytics",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization",
      "Machine Learning",
      "Statistics",
    ],
  },
];

const Skills = () => {
  const [active, setActive] = useState(groups[0].items[0]);
  const activeGroup = groups.find((group) => group.items.includes(active))?.label ?? "";

  return (
    <section id="skills" className="scroll-mt-24 border-b border-border py-16 md:py-24">
      <div className="frame">
        <SectionHeading
          index="04 — Toolkit"
          title="Skills"
          lede="The stack I use to model, move, and explain data. Point at a name."
        />

        <div className="mb-10 flex flex-col justify-between gap-3 border-b border-border pb-6 sm:flex-row sm:items-end">
          <p
            className={`max-w-3xl font-display italic leading-[0.95] text-primary ${
              active.length > 24 ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"
            }`}
          >
            {active}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{activeGroup}</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="border-b border-border pb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {group.label}
              </p>
              <ul className="mt-3">
                {group.items.map((item) => {
                  const isActive = item === active;
                  return (
                    <li key={item}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(item)}
                        onFocus={() => setActive(item)}
                        onClick={() => setActive(item)}
                        className={`w-full py-1.5 text-left text-sm transition-colors ${
                          isActive ? "text-primary" : "text-foreground/85 hover:text-foreground"
                        }`}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
