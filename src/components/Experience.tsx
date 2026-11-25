import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AccentHeading, ease } from "@/components/design/bits";

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
      "Built the monthly P2M sales competition board: leading team and seller, month-to-date against a run-rate finish, and the same view for TPV, revenue, and gross profit.",
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
    company: "Smart Medical Sample Transport",
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
    skills: ["Data Engineering", "SQL", "Python", "ETL/ELT", "Data Warehousing", "dbt", "Apache Airflow", "Apache Spark", "Apache Kafka", "Azure Databricks", "Docker"],
  },
  {
    title: "Data Analyst Intern",
    company: "IDH",
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
  {
    title: "Data Analysis Trainee",
    company: "NTI",
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
];

const Experience = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="scroll-mt-28 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <AccentHeading before="My" accent="Work Experience" className="text-center" />

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute bottom-6 left-[7px] top-6 w-px border-l border-dashed border-foreground/25 md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
          <ol className="space-y-10">
            {experiences.map((item, index) => {
              const isOpen = open === index;
              return (
                <li key={`${item.company}-${item.title}`}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="grid w-full grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4 gap-y-2 text-left md:grid-cols-[minmax(0,1fr)_4.5rem_minmax(0,1fr)] md:items-start"
                  >
                    <span className="relative z-10 mt-2 grid size-4 place-items-center md:col-start-2 md:row-start-1 md:justify-self-center">
                      <span
                        className={`size-4 rounded-full border-2 border-dashed ${
                          isOpen ? "border-primary bg-primary" : "border-primary bg-background"
                        }`}
                      />
                    </span>
                    <span className="col-start-2 md:col-start-1 md:row-start-1 md:pr-8 md:text-right">
                      <span className="block text-xl font-semibold text-foreground sm:text-2xl">{item.company}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {item.period} · {item.location}
                      </span>
                    </span>
                    <span className="col-start-2 md:col-start-3 md:row-start-1 md:pl-8">
                      <span className="block text-xl font-semibold text-foreground sm:text-2xl">{item.title}</span>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.span
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease }}
                            className="block overflow-hidden"
                          >
                            <span className="mt-3 block max-w-md space-y-2 text-sm leading-6 text-[#667085]">
                              {item.description.map((line) => (
                                <span key={line} className="block">
                                  {line}
                                </span>
                              ))}
                            </span>
                            <span className="mt-3 flex flex-wrap gap-2">
                              {item.skills.map((skill) => (
                                <span key={skill} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                                  {skill}
                                </span>
                              ))}
                            </span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
