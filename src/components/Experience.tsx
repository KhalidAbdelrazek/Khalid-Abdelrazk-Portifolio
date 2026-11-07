import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Analytics Engineer / Data Engineer",
    company: "Flash",
    location: "Cairo, Egypt",
    period: "May 2026 – Present",
    description: [
      "Consolidated 50+ fragmented finance and growth KPIs (MAU, TPV, revenue, CAC, churn) into a single governed Metabase model, replacing manual ad hoc queries from finance and business teams with one source of truth.",
      "Built a Python and Dagster-orchestrated pipeline to sync the KPI model into Google Sheets and auto-refresh downstream KPI & P&L reporting decks, eliminating manual updates for leadership.",
      "Designed and maintained scalable dbt models following the Medallion Architecture (Bronze/Silver/Gold) on Amazon Redshift, transforming raw operational data into trusted, analytics-ready datasets.",
      "Implemented Slowly Changing Dimensions (SCD Type 2) and dbt snapshots to automate historical state tracking for partner commission rates shared via API, ensuring accurate point-in-time reporting.",
      "Migrated a core transaction facts table from full daily refresh to incremental dbt models, cutting pipeline runtime while preserving data quality.",
      "Materialized curated tables into a dedicated analytics schema powering an internal AI/natural-language query tool, enabling non-technical stakeholders to self-serve business data insights.",
    ],
    skills: ["Analytics Engineering", "dbt", "Amazon Redshift", "Metabase", "Python", "Dagster", "Apache Airflow", "SCD", "KPI Reporting"],
  },
  {
    title: "Senior Project Lead",
    company: "Smart Medical Sample Transport System (Graduation Project)",
    location: "Cairo, Egypt",
    period: "Jun 2025 – Jun 2026",
    description: [
      "Delivered the final graduation project with full marks, both individually and as a team.",
      "Led a cross-functional team of 8 engineers to design and implement an automated medical logistics robot for hospitals.",
      "Developed a mobile application in Flutter for controlling the robot and managing hospital appointments.",
      "Integrated backend services (Django) for user authentication, appointment management, and medical data storage.",
      "Collaborated with ROS developers to ensure precise robot navigation and task execution.",
      "Created data-driven dashboards to monitor robot performance, hospital workflow efficiency, and sample delivery status.",
    ],
    skills: ["Team Leadership", "Flutter", "Django", "ROS", "IoT", "Mobile App Development", "Data Analytics"],
  },
  {
    title: "Data Engineer Trainee",
    company: "DEPI",
    location: "Cairo, Egypt",
    period: "Nov 2025 – Jun 2026",
    description: [
      "Training in data engineering concepts, data pipelines, databases, and analytics tools with hands-on projects.",
      "Designed and deployed scalable data models in Azure using dbt for modular SQL transformations, establishing a single source of truth for downstream BI tools.",
      "Orchestrated data ingestion workflows with Apache Airflow, automating manual reporting cycles and reducing lead times by 40%.",
      "Utilized Git for version control across data modeling repositories, maintaining code quality and deployment standards via Docker.",
    ],
    skills: [
      "Data Engineering",
      "SQL",
      "Python",
      "ETL/ELT",
      "Data Warehousing",
      "dbt",
      "Apache Airflow",
      "Apache Spark",
      "Apache Kafka",
      "Azure Databricks",
      "Docker",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "IDH (Integrated Diagnostics Holdings)",
    location: "Cairo, Egypt",
    period: "Aug 2025 – Sept 2025",
    description: [
      "Worked on healthcare datasets by applying preprocessing, cleaning, and exploratory analysis.",
      "Built predictive models and customer segmentation analyses.",
      "Supported dashboard development to visualize trends and KPIs.",
    ],
    skills: ["Python", "Machine Learning", "Data Analysis", "Power BI", "SQL"],
  },
  {
    title: "Data Analysis Trainee",
    company: "NTI (National Telecommunication Institute)",
    location: "Cairo, Egypt",
    period: "Jun 2025 – Jul 2025",
    description: [
      "Conducted exploratory data analysis (EDA) on real-world datasets.",
      "Created performance dashboards using Python, Power BI, and SQL.",
      "Delivered insights on key performance metrics to support data-driven decision-making.",
    ],
    skills: ["Python", "SQL", "Power BI", "EDA", "Reporting"],
  },
  {
    title: "CRM Intern (Siebel)",
    company: "2B Company",
    location: "Cairo, Egypt",
    period: "Sept 2024 – Oct 2024",
    description: [
      "Assisted in managing customer data and customizing workflows within Siebel CRM.",
      "Supported troubleshooting, testing, and documentation.",
      "Helped the IT team improve CRM efficiency and user experience.",
    ],
    skills: ["CRM", "Siebel", "Data Management", "IT Support"],
  },
  {
    title: "Part-Time Flutter Developer",
    company: "OneAinity",
    location: "Cairo, Egypt",
    period: "Jun 2025 – Nov 2025",
    description: [
      "Developed and maintained cross-platform mobile applications using Flutter and Dart.",
      "Implemented responsive UIs, state management (BLoC), and REST API integrations.",
      "Collaborated with the team to test, debug, and deploy features in production.",
    ],
    skills: ["Flutter", "Dart", "BLoC", "REST API", "UI Development"],
  },
];

const Experience = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="scroll-mt-24 border-b border-border py-16 md:py-24">
      <div className="frame">
        <SectionHeading
          index="05 — Record"
          title="Experience"
          lede="Roles in analytics engineering, healthcare data, and the systems around them."
        />

        <div className="border-t border-border">
          {experiences.map((exp, index) => {
            const isOpen = open === index;
            return (
              <article key={`${exp.company}-${exp.title}`} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full flex-col gap-3 py-6 text-left sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-2xl leading-tight sm:text-[1.7rem]">{exp.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{exp.company}</span>
                  </span>
                  <span className="flex items-baseline gap-4 sm:block sm:text-right">
                    <span className="block font-mono text-[11px] text-muted-foreground">{exp.period}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">{exp.location}</span>
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:w-14 sm:text-right">
                    {isOpen ? "Close" : "Read"}
                  </span>
                </button>

                {isOpen && (
                  <div className="grid gap-6 pb-8 sm:grid-cols-[7rem_minmax(0,1fr)]">
                    <div className="hidden sm:block" />
                    <div className="border-l border-primary pl-5">
                      <ul className="space-y-3">
                        {exp.description.map((item) => (
                          <li key={item} className="text-sm leading-6 text-foreground/90">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools used">
                        {exp.skills.map((skill) => (
                          <li key={skill} className="border border-border px-2 py-1 text-[11px] text-muted-foreground">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
