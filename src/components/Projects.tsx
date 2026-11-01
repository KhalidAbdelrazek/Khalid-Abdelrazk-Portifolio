import { useState } from "react";
import projectPreviewFallback from "@/assets/project-preview-fallback.jpg";
import projectMomkn from "@/assets/project-momkn.jpg";
import projectDbtMigration from "@/assets/project-dbt-migration.jpg";
import projectAiDataLayer from "@/assets/project-ai-data-layer.jpg";
import projectCovidDashboard from "@/assets/project-covid-dashboard.jpg";
import projectRealEstate from "@/assets/project-real-estate.jpg";
import projectBikeBuyers from "@/assets/project-bike-buyers.jpg";
import { ArrowUpRight, ChevronRight, ExternalLink, Lock } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DemoModal } from "./DemoModal";
import { demoMap } from "./demoData";

interface ProjectItem {
  title: string;
  category: "Data Engineering" | "Data Analysis" | "Data Science";
  description: string;
  tech: string[];
  gradient: string;
  repo: string;
  proof?: string;
}

const projects: ProjectItem[] = [
  // GROUP 1: DATA ENGINEERING
  {
    title: "KPI & P&L Reporting Automation",
    proof: "50+ finance and growth KPIs",
    category: "Data Engineering",
    description:
      "Consolidated 50+ fragmented finance and growth KPIs (MAU, TPV, revenue, CAC, churn) previously pulled via manual ad hoc queries into a single governed Metabase model. Built a Python and Dagster-orchestrated pipeline to sync the model into Google Sheets and auto-refresh downstream KPI & P&L reporting decks, eliminating manual updates and establishing one source of truth for finance and leadership.",
    tech: ["Python", "Dagster", "Metabase", "Google Sheets API", "KPI Reporting", "Data Orchestration"],
    gradient: "from-cyan-500 to-blue-600",
    repo: "", // private
  },
  {
    title: "Momkn Commission Rate Snapshot (SCD2)",
    category: "Data Engineering",
    description:
      "Built a dbt snapshot model implementing Slowly Changing Dimension (Type 2) logic to track historical changes in partner commission rates shared via API, enabling auditable rate history.",
    tech: ["dbt", "SQL", "SCD2", "Data Modeling", "Snapshots"],
    gradient: "from-violet-500 to-indigo-600",
    repo: "",
  },
  {
    title: "Incremental dbt Migration for Transaction Facts",
    category: "Data Engineering",
    description:
      "Migrated a high-volume core transaction facts table from full daily refresh to incremental dbt materializations, reducing pipeline runtime and warehouse compute cost while preserving downstream data integrity across all referencing models.",
    tech: ["dbt", "SQL", "Incremental Models", "Data Warehousing", "Performance Optimization"],
    gradient: "from-amber-500 to-orange-600",
    repo: "",
  },
  {
    title: "AI-Ready Data Layer for Natural-Language Analytics",
    category: "Data Engineering",
    description:
      "Materialized a curated set of tables into a dedicated analytics schema powering an internal AI/natural-language query tool, enabling non-technical stakeholders to self-serve business data insights (e.g. transaction counts, failure rates) without writing SQL.",
    tech: ["Data Modeling", "Schema Design", "dbt", "Analytics Enablement"],
    gradient: "from-purple-500 to-pink-500",
    repo: "",
  },
  {
    title: "E-Commerce ETL Pipeline",
    category: "Data Engineering",
    description:
      "Designed and built a full end-to-end automated ETL pipeline to extract, clean, transform, and load E-Commerce transactional data into a Star Schema data warehouse in SQL Server. Implemented data cleaning, dimensional modeling, and analytics-ready architecture enabling business intelligence reporting and advanced data analysis.",
    tech: [
      "Python",
      "Pandas",
      "SQL Server",
      "SQLAlchemy",
      "ETL",
      "Data Cleaning",
      "Star Schema",
      "Data Warehouse",
      "Dimensional Modeling",
      "Jupyter",
      "Analytics Engineering",
    ],
    gradient: "from-emerald-500 to-cyan-500",
    repo: "https://github.com/KhalidAbdelrazek/E-Commerce-Data-Pipeline",
  },
  {
    title: "TLC Trips ETL Pipeline 36M+ Records",
    proof: "36M+ trip records processed",
    category: "Data Engineering",
    description:
      "Built an end-to-end scalable ETL pipeline using PySpark to process 36M+ NYC taxi trip records and load them into a Star Schema data warehouse in SQL Server. Developed Power BI dashboards to analyze revenue trends, trip behavior, and operational KPIs.",
    tech: [
      "PySpark",
      "Apache Spark",
      "SQL Server",
      "Star Schema",
      "ETL",
      "JDBC",
      "Power BI",
      "Data Warehouse",
      "Big Data",
    ],
    gradient: "from-indigo-600 to-blue-500",
    repo: "https://github.com/KhalidAbdelrazek/ETL-TLC-Trips",
  },

  // GROUP 2: DATA ANALYSIS / BI
  {
    title: "E-Commerce Business Intelligence",
    category: "Data Analysis",
    description:
      "Designed and developed a multi-page executive Power BI dashboard analyzing E-Commerce performance including profitability trends, logistics efficiency, product pricing gaps, and RFM-based customer segmentation. Delivered actionable insights on VIP customer revenue impact, retention behavior, and regional order dominance to support data-driven decision making.",
    tech: [
      "Power BI",
      "DAX",
      "Data Modeling",
      "Star Schema",
      "KPI Tracking",
      "Data Visualization",
      "RFM Analysis",
      "Time Intelligence",
      "Dashboard Design",
      "Business Analytics",
    ],
    gradient: "from-green-500 to-cyan-600",
    repo: "https://github.com/KhalidAbdelrazek/E-Commerce-Data-Pipeline",
  },
  {
    title: "Telecom Business Performance",
    category: "Data Analysis",
    description:
      "Built comprehensive dashboard tracking KPIs for telecom operations, enabling real-time monitoring of business performance and data-driven decision making.",
    tech: ["Python", "SQL", "Excel", "Power BI", "Data Cleaning", "EDA", "Data Visualization", "Dashboarding", "ETL", "Data Modeling"],
    gradient: "from-purple-500 to-pink-500",
    repo: "https://github.com/khalidabdelrazek/Telecom-Churn-Analysis",
  },
  {
    title: "IDH Delay Analysis",
    category: "Data Analysis",
    description:
      "Analyzed delays in healthcare processes at IDH to identify bottlenecks and optimize patient flow, improving efficiency and service quality.",
    tech: ["Python", "Excel", "Power BI", "SQL", "Data Cleaning", "EDA", "Data Visualization", "Dashboarding", "KPI Tracking", "Data Storytelling"],
    gradient: "from-red-400 to-orange-500",
    repo: "", // private
  },
  {
    title: "IDH Daily Visits Analysis",
    category: "Data Analysis",
    description:
      "Analyzed large-scale daily visit data for healthcare facilities to uncover demand fluctuations, bottlenecks, and service utilization trends. Developed analytical dashboards and KPI tracking models to optimize workforce planning, reduce patient wait times, and improve operational efficiency. Delivered actionable insights through data storytelling and visual analytics to support strategic planning and performance monitoring.",
    tech: ["Excel", "Power BI", "Python", "SQL", "Data Cleaning", "EDA", "Data Visualization", "Dashboarding", "KPI Tracking", "Data Storytelling"],
    gradient: "from-indigo-500 to-blue-500",
    repo: "", // private
  },
  {
    title: "Customer Churn Analysis",
    category: "Data Analysis",
    description:
      "Developed predictive models to identify customers at risk of churning, providing insights for targeted retention campaigns.",
    tech: ["Python", "Pandas", "Scikit-learn", "Data Cleaning", "EDA", "Data Visualization", "Feature Engineering"],
    gradient: "from-orange-500 to-red-500",
    repo: "https://github.com/khalidabdelrazek/Customer-churn-analysis-with-python",
  },
  {
    title: "HR Employee Attrition Analysis",
    category: "Data Analysis",
    description:
      "Analyzed employee attrition patterns using Python, SQL, and Power BI to identify key factors driving turnover and provide actionable insights for retention strategies.",
    tech: ["Python", "SQL", "Power BI", "Data Cleaning", "EDA", "Data Visualization", "Dashboarding", "ETL", "Data Modeling"],
    gradient: "from-blue-500 to-cyan-500",
    repo: "https://github.com/khalidabdelrazek/HR-Attrition-Analysis",
  },
  {
    title: "Sales Analytics Dashboard",
    proof: "60,000+ transactions",
    category: "Data Analysis",
    description:
      "A fully interactive Sales Analytics Dashboard built in Excel to analyze 60,000+ transactions and extract actionable business insights.",
    tech: [
      "Excel",
      "Power Query",
      "Pivot Tables",
      "Power Pivot",
      "Data Modeling",
      "Dashboarding",
      "KPI Tracking",
      "Data Visualization",
      "Pareto Analysis",
    ],
    gradient: "from-indigo-500 to-purple-500",
    repo: "https://github.com/KhalidAbdelrazek/Sales-Analysis-using-Excel",
  },
  {
    title: "COVID-19 Dashboard",
    category: "Data Analysis",
    description:
      "Created interactive dashboard visualizing COVID-19 trends, cases, and vaccination rates across different regions.",
    tech: ["Python", "SQL", "Excel", "Power BI", "Data Cleaning", "EDA", "Data Visualization", "Dashboarding"],
    gradient: "from-green-500 to-emerald-500",
    repo: "https://github.com/khalidabdelrazek/Covid-19-Analysis",
  },
  {
    title: "Real Estate Analysis",
    category: "Data Analysis",
    description:
      "Analyzed real estate market trends, pricing patterns, and property features to guide investment decisions.",
    tech: ["Python", "Power BI", "Data Cleaning", "EDA", "Data Visualization"],
    gradient: "from-yellow-500 to-orange-500",
    repo: "https://github.com/khalidabdelrazek/Real-Estate-Analysis-Using-Power-Bi",
  },
  {
    title: "Bike Buyer Analysis using Excel",
    category: "Data Analysis",
    description:
      "Analyzed customer purchase patterns in Excel to identify potential bike buyers and marketing strategies.",
    tech: ["Excel", "Data Cleaning", "EDA", "Data Visualization", "Pivot Tables", "Charts", "Dashboarding"],
    gradient: "from-green-400 to-emerald-500",
    repo: "https://github.com/khalidabdelrazek/Bike-Buyer-Analysis-using-Excel",
  },

  // GROUP 3: DATA SCIENCE
  {
    title: "IDH House Call Prediction",
    category: "Data Science",
    description:
      "Built machine learning model to predict house call requirements for healthcare services, optimizing resource allocation and scheduling.",
    tech: ["Python", "ML", "Scikit-learn", "Feature Engineering", "Data Cleaning", "EDA"],
    gradient: "from-cyan-500 to-blue-500",
    repo: "", // private
  },
  {
    title: "Campaign Patient Flag Prediction",
    category: "Data Science",
    description:
      "Developed ML model to identify patients most likely to respond to health campaigns, improving campaign effectiveness.",
    tech: ["Python", "ML", "Scikit-learn", "Feature Engineering", "Data Cleaning", "EDA"],
    gradient: "from-pink-500 to-purple-500",
    repo: "", // private
  },
];

const filterTabs = [
  { id: "all", label: "All work" },
  { id: "Data Engineering", label: "Data engineering" },
  { id: "Data Analysis", label: "Data analysis" },
  { id: "Data Science", label: "Data science" },
];

const featuredTitles = [
  "KPI & P&L Reporting Automation",
  "TLC Trips ETL Pipeline 36M+ Records",
  "E-Commerce Business Intelligence",
];

const defaultFallbackPhoto = {
  src: projectPreviewFallback,
  credit: "Windows",
  href: "https://unsplash.com/photos/qtpt4WGlz3Y",
};

const projectFallbackPhotos: Record<string, typeof defaultFallbackPhoto> = {
  "Momkn Commission Rate Snapshot (SCD2)": {
    src: projectMomkn,
    credit: "Apex Virtual Education",
    href: "https://unsplash.com/photos/woman-working-on-laptop-with-charts-and-graphs-KNQUEQwTCY4",
  },
  "Incremental dbt Migration for Transaction Facts": {
    src: projectDbtMigration,
    credit: "Mohammad Rahmani",
    href: "https://unsplash.com/photos/laptop-screen-displaying-colorful-code-8qEB0fTe9Vw",
  },
  "AI-Ready Data Layer for Natural-Language Analytics": {
    src: projectAiDataLayer,
    credit: "nicoll camacho",
    href: "https://unsplash.com/photos/laptop-displaying-charts-next-to-notebook-and-mug-adFE-OdO7RA",
  },
  "COVID-19 Dashboard": {
    src: projectCovidDashboard,
    credit: "Vitaly Gariev",
    href: "https://unsplash.com/photos/doctor-on-phone-working-on-laptop-in-office-egCFrNJ6Djw",
  },
  "Real Estate Analysis": {
    src: projectRealEstate,
    credit: "Alex Tyson",
    href: "https://unsplash.com/photos/a-large-open-living-room-with-sliding-glass-doors-MY0gtZCVkm4",
  },
  "Bike Buyer Analysis using Excel": {
    src: projectBikeBuyers,
    credit: "Diogo Tavares",
    href: "https://unsplash.com/photos/person-standing-beside-of-city-bicycle-PFZTiiJnjag",
  },
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProjectTitle, setSelectedProjectTitle] = useState<string | null>(null);
  const [confidentialOpen, setConfidentialOpen] = useState(false);
  const [demoProject, setDemoProject] = useState<string | null>(null);

  const visibleProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.category === activeFilter);
  const featuredProjects = activeFilter === "all"
    ? featuredTitles.map((title) => projects.find((project) => project.title === title)!).filter(Boolean)
    : [];
  const remainingProjects = activeFilter === "all"
    ? visibleProjects.filter((project) => !featuredTitles.includes(project.title))
    : visibleProjects;
  const selectedProject = remainingProjects.find((project) => project.title === selectedProjectTitle) ?? remainingProjects[0];
  const selectedPreview = selectedProject ? demoMap[selectedProject.title]?.items[0] : undefined;
  const fallbackPhoto = selectedProject ? projectFallbackPhotos[selectedProject.title] ?? defaultFallbackPhoto : defaultFallbackPhoto;

  const openRepo = (repo: string) => {
    if (repo) {
      window.open(repo, "_blank", "noopener,noreferrer");
      return;
    }
    setConfidentialOpen(true);
  };

  const ProjectCard = ({ project, featured = false }: { project: ProjectItem; featured?: boolean }) => {
    const hasDemo = Boolean(demoMap[project.title]);
    return (
      <article className={`group flex h-full flex-col rounded-xl border border-border bg-card p-5 sm:p-6 transition-colors hover:border-foreground/30 ${featured ? "md:p-7" : ""}`}>
        <div className="mb-5 flex items-start justify-between gap-3">
          <span className="text-xs font-medium text-muted-foreground">{project.category}</span>
          {project.proof && (
            <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-foreground/80">
              {project.proof}
            </span>
          )}
        </div>
        <h3 className={`max-w-2xl font-semibold leading-snug tracking-tight text-foreground ${featured ? "text-xl sm:text-2xl" : "text-lg"}`}>
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground text-pretty">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Tools and methods">
          {project.tech.slice(0, featured ? 5 : 4).map((technology) => (
            <span key={technology} className="rounded-md bg-secondary px-2 py-1 text-[11px] text-secondary-foreground">
              {technology}
            </span>
          ))}
          {project.tech.length > (featured ? 5 : 4) && (
            <span className="px-1 py-1 text-[11px] text-muted-foreground">+{project.tech.length - (featured ? 5 : 4)}</span>
          )}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-4">
          {hasDemo && (
            <button
              type="button"
              onClick={() => setDemoProject(project.title)}
              className="inline-flex min-h-9 items-center gap-2 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              Open project preview <ArrowUpRight className="size-4" aria-hidden="true" />
            </button>
          )}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-9 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Source code <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          ) : (
            <button
              type="button"
              onClick={() => openRepo("")}
              className="inline-flex min-h-9 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label={`Learn about access to ${project.title}`}
            >
              <Lock className="size-3.5" aria-hidden="true" /> Client project
            </button>
          )}
        </div>
      </article>
    );
  };

  return (
    <>
      <section id="projects" className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <header className="mb-10 grid gap-5 border-b border-border pb-8 md:mb-12 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Selected work · {projects.length} projects</p>
                <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                  Work built around <span className="text-muted-foreground">real questions.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground text-pretty md:text-right">
                Data pipelines, dashboards, and analysis projects—what they do, how they were built, and where to explore further.
              </p>
            </header>

            <nav className="mb-8 flex gap-2 overflow-x-auto pb-1" aria-label="Filter projects">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                const count = tab.id === "all" ? projects.length : projects.filter((project) => project.category === tab.id).length;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveFilter(tab.id)}
                    aria-pressed={isActive}
                    className={`inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${isActive ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:text-foreground"}`}
                  >
                    {tab.label}<span className={isActive ? "opacity-70" : "opacity-60"}>{count}</span>
                  </button>
                );
              })}
            </nav>

            {featuredProjects.length > 0 && (
              <div className="mb-12">
                <div className="mb-4 flex items-center gap-3">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">A closer look</h3>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  {featuredProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} featured />
                  ))}
                </div>
              </div>
            )}

            <div className="mb-5 flex items-center gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {activeFilter === "all" ? `More projects · ${remainingProjects.length}` : `${activeFilter} · ${remainingProjects.length}`}
              </h3>
              <div className="h-px flex-1 bg-border" />
              <span className="hidden text-xs text-muted-foreground sm:inline">Choose a project to explore</span>
            </div>
            {selectedProject ? (
              <div className="grid items-start gap-5 lg:grid-cols-[minmax(17rem,0.85fr)_minmax(0,1.4fr)]">
                <nav aria-label="More projects" className="order-2 divide-y divide-border overflow-hidden rounded-xl border border-border lg:order-1">
                  {remainingProjects.map((project, index) => {
                    const isSelected = selectedProject.title === project.title;
                    return (
                      <button
                        key={project.title}
                        type="button"
                        onClick={() => setSelectedProjectTitle(project.title)}
                        aria-pressed={isSelected}
                        className={`group flex min-h-[4.5rem] w-full items-center gap-3 px-4 py-3 text-left transition-colors focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring ${isSelected ? "bg-secondary text-foreground" : "bg-card hover:bg-secondary/60"}`}
                      >
                        <span className="w-7 shrink-0 font-mono text-xs tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium leading-snug">{project.title}</span>
                          <span className="mt-1 block text-xs text-muted-foreground">{project.category}</span>
                        </span>
                        <ChevronRight className={`size-4 shrink-0 transition-transform ${isSelected ? "translate-x-0 text-foreground" : "-translate-x-1 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} aria-hidden="true" />
                      </button>
                    );
                  })}
                </nav>

                <article className="order-1 overflow-hidden rounded-xl border border-border bg-card lg:order-2">
                  <div className="relative aspect-video bg-secondary">
                    {selectedPreview ? (
                      <iframe
                        key={selectedProject.title}
                        src={selectedPreview.src}
                        title={`${selectedProject.title} preview${selectedPreview.label ? ` — ${selectedPreview.label}` : ""}`}
                        loading="lazy"
                        allow="fullscreen"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="size-full border-0"
                      />
                    ) : (
                      <div className="relative flex size-full flex-col justify-between overflow-hidden p-5 text-white sm:p-7">
                        <img
                          src={fallbackPhoto.src}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 size-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
                        <span className="relative text-xs font-medium uppercase tracking-[0.12em] text-white/85">Project overview</span>
                        <div className="relative max-w-sm">
                          <p className="text-sm font-medium text-white">A public preview isn’t available for this project.</p>
                          <p className="mt-2 text-xs text-white/80">Ask me about the approach and results.</p>
                          <a
                            href={fallbackPhoto.href}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-block text-[11px] text-white/70 underline underline-offset-2 hover:text-white"
                          >
                            Photo by {fallbackPhoto.credit} on Unsplash
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-5 sm:p-7">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-medium text-muted-foreground">{selectedProject.category}</span>
                      {selectedProject.proof && <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/80">{selectedProject.proof}</span>}
                    </div>
                    <h4 className="text-xl font-semibold leading-snug sm:text-2xl">{selectedProject.title}</h4>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground text-pretty">{selectedProject.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2" aria-label="Tools and methods">
                      {selectedProject.tech.slice(0, 6).map((technology) => (
                        <span key={technology} className="rounded-md bg-secondary px-2.5 py-1 text-[11px] text-secondary-foreground">{technology}</span>
                      ))}
                      {selectedProject.tech.length > 6 && <span className="px-1 py-1 text-[11px] text-muted-foreground">+{selectedProject.tech.length - 6}</span>}
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-4">
                      {demoMap[selectedProject.title] && (
                        <button
                          type="button"
                          onClick={() => setDemoProject(selectedProject.title)}
                          className="inline-flex min-h-9 items-center gap-2 text-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
                        >
                          Open full preview <ArrowUpRight className="size-4" aria-hidden="true" />
                        </button>
                      )}
                      {selectedProject.repo ? (
                        <a href={selectedProject.repo} target="_blank" rel="noreferrer" className="inline-flex min-h-9 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                          Source code <ExternalLink className="size-3.5" aria-hidden="true" />
                        </a>
                      ) : (
                        <button type="button" onClick={() => openRepo("")} className="inline-flex min-h-9 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                          <Lock className="size-3.5" aria-hidden="true" /> Client project
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ) : (
              <p className="rounded-xl border border-border p-6 text-sm text-muted-foreground">No projects in this category yet.</p>
            )}
          </div>
        </div>
      </section>

      <Dialog open={confidentialOpen} onOpenChange={setConfidentialOpen}>
        <DialogContent>
          <DialogHeader>
            <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground"><Lock className="size-4" aria-hidden="true" /></div>
            <DialogTitle>Client confidential</DialogTitle>
            <DialogDescription className="leading-6">This work was completed for a client, so its source repository and underlying data are restricted.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild><button type="button" className="min-h-10 rounded-md bg-foreground px-4 text-sm font-medium text-background">Close</button></DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <DemoModal
        isOpen={Boolean(demoProject)}
        onClose={() => setDemoProject(null)}
        projectTitle={demoProject || ""}
        demoEntry={demoProject ? demoMap[demoProject] : { items: [] }}
      />
    </>
  );
};

export default Projects;
