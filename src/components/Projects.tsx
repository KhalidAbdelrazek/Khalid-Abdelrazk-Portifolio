import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock } from "lucide-react";
import projectDbtMigration from "@/assets/project-dbt-migration.jpg";
import projectAiDataLayer from "@/assets/project-ai-data-layer.jpg";
import { AccentHeading, ArrowIcon, ease } from "@/components/design/bits";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DemoModal } from "./DemoModal";
import { demoMap } from "./demoData";

interface ProjectItem {
  title: string;
  category: "Data Engineering" | "Data Analysis" | "Data Science";
  description: string;
  tech: string[];
  repo: string;
  proof?: string;
  image?: string;
}

const projects: ProjectItem[] = [
  {
    title: "P2M Sprint Leaderboard",
    proof: "Monthly sales competition",
    category: "Data Engineering",
    description:
      "Built the monthly P2M sales competition board that replaced the old Metabase view. It shows the leading team and seller, month-to-date against a straight run-rate finish, and how far that finish sits from target. TPV, revenue, and gross profit share the same view.",
    tech: ["SQL", "Amazon Redshift", "Metabase", "Metric Modeling", "KPI Reporting"],
    repo: "",
  },
  {
    title: "KPI & P&L Reporting Automation",
    proof: "50+ finance and growth KPIs",
    category: "Data Engineering",
    description:
      "Consolidated 50+ fragmented finance and growth KPIs into a single governed Metabase model, then synced that model into Google Sheets so KPI and P&L decks refresh without a manual pull.",
    tech: ["Python", "Dagster", "Metabase", "Google Sheets API", "KPI Reporting"],
    repo: "",
    image: projectAiDataLayer,
  },
  {
    title: "Momkn Commission Rate Snapshot (SCD2)",
    category: "Data Engineering",
    description:
      "Built a dbt snapshot model implementing Slowly Changing Dimension (Type 2) logic to track historical changes in partner commission rates shared via API.",
    tech: ["dbt", "SQL", "SCD2", "Data Modeling", "Snapshots"],
    repo: "",
  },
  {
    title: "Incremental dbt Migration for Transaction Facts",
    category: "Data Engineering",
    description:
      "Migrated a high-volume core transaction facts table from full daily refresh to incremental dbt materializations, cutting runtime while keeping downstream models intact.",
    tech: ["dbt", "SQL", "Incremental Models", "Data Warehousing"],
    repo: "",
    image: projectDbtMigration,
  },
  {
    title: "AI-Ready Data Layer for Natural-Language Analytics",
    category: "Data Engineering",
    description:
      "Materialized curated tables into a dedicated analytics schema so an internal natural-language tool can answer business questions without someone writing SQL.",
    tech: ["Data Modeling", "Schema Design", "dbt", "Analytics Enablement"],
    repo: "",
    image: projectAiDataLayer,
  },
  {
    title: "E-Commerce ETL Pipeline",
    category: "Data Engineering",
    description:
      "Designed an end-to-end ETL pipeline that cleans e-commerce transactions and loads them into a star schema in SQL Server.",
    tech: ["Python", "Pandas", "SQL Server", "ETL", "Star Schema"],
    repo: "https://github.com/KhalidAbdelrazek/E-Commerce-Data-Pipeline",
  },
  {
    title: "TLC Trips ETL Pipeline 36M+ Records",
    proof: "36M+ trip records processed",
    category: "Data Engineering",
    description:
      "Built a PySpark pipeline for 36M+ NYC taxi trips, loaded a star schema in SQL Server, and built Power BI views for revenue, trip behavior, and operations.",
    tech: ["PySpark", "SQL Server", "Star Schema", "Power BI", "ETL"],
    repo: "https://github.com/KhalidAbdelrazek/ETL-TLC-Trips",
  },
  {
    title: "E-Commerce Business Intelligence",
    category: "Data Analysis",
    description:
      "A multi-page Power BI view of profitability, logistics, pricing gaps, and RFM customer segments.",
    tech: ["Power BI", "DAX", "Star Schema", "RFM Analysis"],
    repo: "https://github.com/KhalidAbdelrazek/E-Commerce-Data-Pipeline",
  },
  {
    title: "Telecom Business Performance",
    category: "Data Analysis",
    description: "Dashboard tracking telecom KPIs so operations can see performance without waiting on a one-off extract.",
    tech: ["Python", "SQL", "Power BI", "Data Modeling"],
    repo: "https://github.com/khalidabdelrazek/Telecom-Churn-Analysis",
  },
  {
    title: "IDH Delay Analysis",
    category: "Data Analysis",
    description: "Analyzed delays in healthcare processes at IDH to find bottlenecks in patient flow.",
    tech: ["Python", "Power BI", "SQL", "KPI Tracking"],
    repo: "",
  },
  {
    title: "IDH Daily Visits Analysis",
    category: "Data Analysis",
    description: "Analyzed daily visit data to show demand swings, staffing pressure, and where wait time was coming from.",
    tech: ["Excel", "Power BI", "Python", "SQL"],
    repo: "",
  },
  {
    title: "Customer Churn Analysis",
    category: "Data Analysis",
    description: "Predictive analysis to find customers likely to leave, so retention work can start before they do.",
    tech: ["Python", "Pandas", "Scikit-learn", "Feature Engineering"],
    repo: "https://github.com/khalidabdelrazek/Customer-churn-analysis-with-python",
  },
  {
    title: "HR Employee Attrition Analysis",
    category: "Data Analysis",
    description: "Attrition analysis in Python, SQL, and Power BI to show which factors were driving turnover.",
    tech: ["Python", "SQL", "Power BI", "EDA"],
    repo: "https://github.com/khalidabdelrazek/HR-Attrition-Analysis",
  },
  {
    title: "Sales Analytics Dashboard",
    proof: "60,000+ transactions",
    category: "Data Analysis",
    description: "An interactive Excel dashboard over 60,000+ transactions, built to surface what was actually moving sales.",
    tech: ["Excel", "Power Query", "Power Pivot", "Pareto Analysis"],
    repo: "https://github.com/KhalidAbdelrazek/Sales-Analysis-using-Excel",
  },
  {
    title: "COVID-19 Dashboard",
    category: "Data Analysis",
    description: "Interactive view of COVID-19 cases and vaccination rates across regions.",
    tech: ["Python", "SQL", "Power BI", "Data Visualization"],
    repo: "https://github.com/khalidabdelrazek/Covid-19-Analysis",
  },
  {
    title: "Real Estate Analysis",
    category: "Data Analysis",
    description: "Market, pricing, and property-feature analysis to support investment questions.",
    tech: ["Python", "Power BI", "EDA"],
    repo: "https://github.com/khalidabdelrazek/Real-Estate-Analysis-Using-Power-Bi",
  },
  {
    title: "Bike Buyer Analysis using Excel",
    category: "Data Analysis",
    description: "Purchase-pattern analysis in Excel to identify likely bike buyers.",
    tech: ["Excel", "Pivot Tables", "Dashboarding"],
    repo: "https://github.com/khalidabdelrazek/Bike-Buyer-Analysis-using-Excel",
  },
  {
    title: "IDH House Call Prediction",
    category: "Data Science",
    description: "A model to predict house-call demand so scheduling and staffing could be planned ahead.",
    tech: ["Python", "Scikit-learn", "Feature Engineering"],
    repo: "",
  },
  {
    title: "Campaign Patient Flag Prediction",
    category: "Data Science",
    description: "A model to flag patients most likely to respond to a health campaign.",
    tech: ["Python", "Scikit-learn", "Feature Engineering"],
    repo: "",
  },
];

const filterTabs = [
  { id: "all", label: "All work" },
  { id: "Data Engineering", label: "Data engineering" },
  { id: "Data Analysis", label: "Data analysis" },
  { id: "Data Science", label: "Data science" },
];

const DataPanel = ({ title }: { title: string }) => (
  <div className="flex h-full flex-col justify-between bg-[#1D2430] p-5 text-white">
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Analytics</p>
    <svg viewBox="0 0 280 100" className="h-24 w-full" aria-hidden="true">
      <path d="M0 78 H280" stroke="white" strokeOpacity="0.15" />
      <path d="M0 52 H280" stroke="white" strokeOpacity="0.08" />
      <path d="M8 72 C 40 70, 55 40, 90 46 S 140 20, 180 34 S 230 18, 272 28" fill="none" stroke="#C2410C" strokeWidth="3" />
      {[36, 58, 44, 76, 50, 68].map((height, bar) => (
        <rect key={bar} x={18 + bar * 42} y={90 - height} width="16" height={height} rx="3" fill={bar === 3 ? "#C2410C" : "white"} fillOpacity={bar === 3 ? 1 : 0.18} />
      ))}
    </svg>
    <p className="max-w-[16rem] text-lg font-semibold leading-tight">{title}</p>
  </div>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [index, setIndex] = useState(0);
  const [seeAll, setSeeAll] = useState(false);
  const [confidentialOpen, setConfidentialOpen] = useState(false);
  const [demoProject, setDemoProject] = useState<string | null>(null);

  const visibleProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    setIndex(0);
  }, [activeFilter]);

  const count = visibleProjects.length;
  const current = count ? visibleProjects[index % count] : undefined;
  const second = count > 1 ? visibleProjects[(index + 1) % count] : undefined;
  const uniqueSlides = current ? (second && second.title !== current.title ? [current, second] : [current]) : [];

  const openRepo = (repo: string) => {
    if (repo) {
      window.open(repo, "_blank", "noopener,noreferrer");
      return;
    }
    setConfidentialOpen(true);
  };

  const step = (direction: number) => {
    if (!count) return;
    setIndex((value) => (value + direction + count) % count);
  };

  return (
    <section id="projects" className="scroll-mt-28 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <AccentHeading before="Lets have a look at my" accent="Portfolio" className="max-w-[12ch] sm:max-w-none" />
          <button
            type="button"
            onClick={() => setSeeAll((open) => !open)}
            className="rounded-full bg-primary px-6 py-3 text-base font-semibold text-white"
          >
            {seeAll ? "Show less" : "See all"}
          </button>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <AnimatePresence mode="wait">
            {uniqueSlides.map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease }}
                className="overflow-hidden rounded-[28px] bg-[#eef1f4]"
              >
                <div className="relative h-72">
                  {project.image ? (
                    <img src={project.image} alt="" className="size-full object-cover" />
                  ) : (
                    <DataPanel title={project.title} />
                  )}
                  {project.image && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1D2430] via-[#1D2430]/40 to-transparent p-5">
                      <p className="text-2xl font-semibold text-white">{project.title}</p>
                    </div>
                  )}
                  <button
                    type="button"
                    aria-label={`Open ${project.title}`}
                    onClick={() => (demoMap[project.title] ? setDemoProject(project.title) : openRepo(project.repo))}
                    className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white text-primary shadow-sm"
                  >
                    <ArrowIcon />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button type="button" onClick={() => step(-1)} className="rounded-full border border-border px-4 py-1.5 text-sm font-medium" aria-label="Previous projects">
            Prev
          </button>
          <p className="min-w-16 text-center text-sm font-semibold text-muted-foreground">
            {String((count ? index % count : 0) + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </p>
          <button type="button" onClick={() => step(1)} className="rounded-full border border-border px-4 py-1.5 text-sm font-medium" aria-label="Next projects">
            Next
          </button>
        </div>

        <nav className="mt-8 flex flex-wrap justify-center gap-3" aria-label="Filter projects">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                aria-pressed={isActive}
                className={`rounded-full px-5 py-2.5 text-sm font-medium ${isActive ? "bg-[#1D2430] text-white" : "bg-[#F2F4F7] text-[#344054]"}`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {current && (
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{current.title}</h3>
              <button
                type="button"
                aria-label={demoMap[current.title] ? "Open preview" : "Open source"}
                onClick={() => (demoMap[current.title] ? setDemoProject(current.title) : openRepo(current.repo))}
                className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-white"
              >
                <ArrowIcon />
              </button>
            </div>
            {current.proof && <p className="mt-2 text-sm font-semibold text-primary">{current.proof}</p>}
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#667085]">{current.description}</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2" aria-label="Tools">
              {current.tech.map((tool) => (
                <li key={tool} className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                  {tool}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-center gap-4 text-sm">
              {demoMap[current.title] && (
                <button type="button" onClick={() => setDemoProject(current.title)} className="font-semibold text-primary">
                  Open preview
                </button>
              )}
              <button type="button" onClick={() => openRepo(current.repo)} className="text-muted-foreground">
                {current.repo ? "Source" : "Client project"}
              </button>
            </div>
          </div>
        )}

        {seeAll && (
          <ul className="mt-12 divide-y divide-border border-t border-border">
            {visibleProjects.map((project) => (
              <li key={project.title} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                <button type="button" onClick={() => setIndex(visibleProjects.indexOf(project))} className="text-left text-lg font-semibold">
                  {project.title}
                </button>
                <span className="text-sm text-muted-foreground">{project.category}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Dialog open={confidentialOpen} onOpenChange={setConfidentialOpen}>
        <DialogContent>
          <DialogHeader>
            <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground">
              <Lock className="size-4" aria-hidden="true" />
            </div>
            <DialogTitle>Client confidential</DialogTitle>
            <DialogDescription className="leading-6">
              This work was completed for a client, so its source repository and underlying data are restricted.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <button type="button" className="min-h-10 rounded-full bg-foreground px-4 text-sm font-medium text-background">
                Close
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <DemoModal
        isOpen={Boolean(demoProject)}
        onClose={() => setDemoProject(null)}
        projectTitle={demoProject || ""}
        demoEntry={demoProject ? demoMap[demoProject] : { items: [] }}
      />
    </section>
  );
};

export default Projects;
