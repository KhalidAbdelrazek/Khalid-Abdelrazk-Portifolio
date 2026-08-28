import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Lock,
  Play,
  Sparkles,
} from "lucide-react";
import { DemoModal } from "./DemoModal";
import { demoMap } from "./demoData";

interface ProjectItem {
  title: string;
  category: "Data Engineering" | "Data Analysis" | "Data Science";
  description: string;
  tech: string[];
  gradient: string;
  repo: string;
}

const projects: ProjectItem[] = [
  // GROUP 1: DATA ENGINEERING
  {
    title: "KPI & P&L Reporting Automation",
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
  { id: "all", label: "All Projects" },
  { id: "Data Engineering", label: "Data Engineering" },
  { id: "Data Analysis", label: "Data Analysis" },
  { id: "Data Science", label: "Data Science" },
];

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedDemoProject, setSelectedDemoProject] = useState<string | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const toggleRow = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const handleOpenRepo = (e: React.MouseEvent, repo: string) => {
    e.stopPropagation();
    if (repo) {
      window.open(repo, "_blank", "noopener,noreferrer");
    } else {
      setModalMessage(
        "This project is proprietary / client confidential. Source repository access is restricted."
      );
      setModalOpen(true);
    }
  };

  const handleOpenDemo = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    setSelectedDemoProject(title);
    setDemoModalOpen(true);
  };

  return (
    <>
      <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
        {/* Subtle background ambient lights */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[140px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 35 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
                Explore production ETL pipelines, executive BI dashboards, and applied machine learning models.
              </p>
            </div>

            {/* Minimal Category Tabs with Animated Underline */}
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2  border-b border-border/50 max-w-3xl mx-auto pb-2">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                const count =
                  tab.id === "all"
                    ? projects.length
                    : projects.filter((p) => p.category === tab.id).length;

                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveFilter(tab.id);
                      setExpandedIndex(null);
                    }}
                    className={`relative px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition-colors duration-150 flex items-center gap-1.5 ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className="text-[11px] opacity-60 font-mono">({count})</span>
                    {isActive && (
                      <motion.div
                        layoutId="projectTabUnderline"
                        className="absolute bottom-[-9px] left-0 right-0 h-[2px] bg-gradient-primary rounded-full"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Dense Horizontal List Layout */}
            <div className="max-w-6xl mx-auto border-t border-b border-border/80 divide-y divide-border/60">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFilter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="divide-y divide-border/60"
                >
                  {filteredProjects.map((project, index) => {
                    const isExpanded = expandedIndex === index;
                    const hasDemo = Boolean(demoMap[project.title]);
                    const indexFormatted = String(index + 1).padStart(2, "0");

                    return (
                      <div
                        key={project.title}
                        onClick={() => toggleRow(index)}
                        className={`group transition-colors duration-150 cursor-pointer ${
                          isExpanded
                            ? "bg-secondary/40 dark:bg-secondary/20"
                            : "hover:bg-primary/[0.04] dark:hover:bg-primary/[0.06]"
                        }`}
                      >
                        {/* Main Horizontal Row */}
                        <div className="py-4 sm:py-4.5 px-3 sm:px-5 flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-4">
                          {/* Left Segment: Index + Title */}
                          <div className="flex items-baseline md:items-center gap-3 min-w-0 flex-1">
                            <span className="font-mono text-xs text-muted-foreground/60 shrink-0 select-none">
                              {indexFormatted}
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors leading-snug">
                                  {project.title}
                                </h3>
                                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-secondary/80 text-secondary-foreground border border-border/60 shrink-0">
                                  {project.category}
                                </span>
                              </div>

                              {/* Collapsed view short description on desktop */}
                              {!isExpanded && (
                                <p className="text-xs text-muted-foreground truncate max-w-xl mt-0.5 hidden md:block">
                                  {project.description}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Middle Segment: Inline Tech Stack (Middle-Dot Separated) */}
                          <div className="hidden lg:block shrink-0 max-w-xs text-right">
                            <p className="text-[11px] text-muted-foreground/80 font-mono truncate">
                              {project.tech.slice(0, 4).join(" · ")}
                              {project.tech.length > 4 && " · +"}
                            </p>
                          </div>

                          {/* Right Segment: Actions & Affordance */}
                          <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-1 md:pt-0 border-t border-border/20 md:border-0">
                            {/* Mobile inline tech stack preview */}
                            <p className="text-[11px] text-muted-foreground/80 font-mono truncate lg:hidden">
                              {project.tech.slice(0, 3).join(" · ")}
                            </p>

                            <div className="flex items-center gap-2 ml-auto">
                              {hasDemo && (
                                <button
                                  onClick={(e) => handleOpenDemo(e, project.title)}
                                  className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground bg-secondary/80 hover:bg-secondary px-2 py-0.5 rounded border border-border/60 transition-colors"
                                  title="View Interactive Live Demo"
                                >
                                  <Play className="w-2.5 h-2.5 fill-current" />
                                  <span>Demo</span>
                                </button>
                              )}

                              {project.repo ? (
                                <button
                                  onClick={(e) => handleOpenRepo(e, project.repo)}
                                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline px-1.5 py-1 transition-colors"
                                  title="Open Source Code"
                                >
                                  <span>Code</span>
                                  <ArrowUpRight className="w-3 h-3" />
                                </button>
                              ) : (
                                <span
                                  onClick={(e) => handleOpenRepo(e, "")}
                                  className="inline-flex items-center gap-1 text-[10px] text-muted-foreground px-1 py-1 cursor-pointer hover:text-foreground"
                                  title="Confidential Project"
                                >
                                  <Lock className="w-3 h-3" />
                                </span>
                              )}

                              <div className="text-muted-foreground/60 group-hover:text-primary transition-colors p-1">
                                {isExpanded ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* In-Place Expanded Details */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden border-t border-border/40 bg-card/60 dark:bg-card/40 px-4 sm:px-6 py-4 space-y-3"
                            >
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                                  Overview &amp; Implementation
                                </p>
                                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                                  {project.description}
                                </p>
                              </div>

                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                                  Technologies &amp; Architecture
                                </p>
                                <p className="text-xs font-mono text-foreground/80 leading-relaxed">
                                  {project.tech.join(" · ")}
                                </p>
                              </div>

                              <div className="flex flex-wrap items-center gap-3 pt-2">
                                {project.repo ? (
                                  <button
                                    onClick={(e) => handleOpenRepo(e, project.repo)}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
                                  >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    View GitHub Repository
                                  </button>
                                ) : (
                                  <button
                                    onClick={(e) => handleOpenRepo(e, "")}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border transition-colors"
                                  >
                                    <Lock className="w-3.5 h-3.5" />
                                    Confidential / Enterprise Project
                                  </button>
                                )}

                                {hasDemo && (
                                  <button
                                    onClick={(e) => handleOpenDemo(e, project.title)}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-muted border border-border transition-colors shadow-sm"
                                  >
                                    <Play className="w-3 h-3 fill-current" />
                                    Launch Live Demo
                                  </button>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONFIDENTIAL PROJECT MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4"
          onClick={() => setModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card text-card-foreground p-6 sm:p-7 rounded-2xl shadow-2xl max-w-md w-full text-center border border-border"
          >
            <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-3 text-primary">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold mb-2">Client Confidential</h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
              {modalMessage}
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className="w-full py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:bg-primary/90 transition-colors"
            >
              Understood
            </button>
          </motion.div>
        </div>
      )}

      {/* LIVE DEMO MODAL */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        projectTitle={selectedDemoProject || ""}
        demoEntry={selectedDemoProject ? demoMap[selectedDemoProject] : { items: [] }}
      />
    </>
  );
};

export default Projects;