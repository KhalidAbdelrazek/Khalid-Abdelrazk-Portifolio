import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DemoModal } from "./DemoModal";
import { demoMap } from "./demoData";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Demo modal states
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedDemoProject, setSelectedDemoProject] = useState<string | null>(null);

  // New states for expand/collapse
  const [expandedDesc, setExpandedDesc] = useState<{ [key: number]: boolean }>({});
  const [expandedTech, setExpandedTech] = useState<{ [key: number]: boolean }>({});

  const WORD_LIMIT = 18;
  const TECH_LIMIT = 5;

  const getShortText = (text: string) => {
    const words = text.split(" ");
    return words.slice(0, WORD_LIMIT).join(" ");
  };

  const projects = [
    // DATA SCIENCE PROJECTS
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
        "Big Data"
      ],
      gradient: "from-indigo-600 to-blue-500",
      repo: "https://github.com/KhalidAbdelrazek/ETL-TLC-Trips",
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
        "Analytics Engineering"
      ],
      gradient: "from-emerald-500 to-cyan-500",
      repo: "https://github.com/KhalidAbdelrazek/E-Commerce-Data-Pipeline",
    },
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
    "Business Analytics"
  ],
  gradient: "from-green-500 to-cyan-600",
  repo: "https://github.com/KhalidAbdelrazek/E-Commerce-Data-Pipeline",
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
      title: "IDH Delay Analysis",
      category: "Data Analysis",
      description:
        "Analyzed delays in healthcare processes at IDH to identify bottlenecks and optimize patient flow, improving efficiency and service quality.",
      tech: ["Python", "Excel", "Power BI", "SQL", "Data Cleaning", "EDA", "Data Visualization", "Dashboarding", "KPI Tracking", "Data Storytelling"],
      gradient: "from-red-400 to-orange-500",
      repo: "", // private
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
        "Pareto Analysis"
      ],
      gradient: "from-indigo-500 to-purple-500",
      repo: "https://github.com/KhalidAbdelrazek/Sales-Analysis-using-Excel",
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
      title: "Customer Churn Analysis",
      category: "Data Analysis",
      description:
        "Developed predictive models to identify customers at risk of churning, providing insights for targeted retention campaigns.",
      tech: ["Python", "Pandas", "Scikit-learn", "Data Cleaning", "EDA", "Data Visualization", "Feature Engineering"],
      gradient: "from-orange-500 to-red-500",
      repo: "https://github.com/khalidabdelrazek/Customer-churn-analysis-with-python",
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
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleViewProject = (repo: string) => {
    if (repo) {
      window.open(repo, "_blank", "noopener");
    } else {
      setModalMessage(
        "This project is private or requires credentials. Access is restricted."
      );
      setModalOpen(true);
    }
  };

  return (
    <>
      {/* PROJECTS SECTION */}
      <section id="projects" className="py-14 md:py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center">
              Featured <span className="text-gradient">Projects</span>
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
              <Button
                size="sm"
                variant={activeFilter === "all" ? "default" : "outline"}
                onClick={() => setActiveFilter("all")}
                className="text-xs sm:text-sm"
              >
                All Projects
              </Button>
              <Button
                size="sm"
                variant={activeFilter === "Data Analysis" ? "default" : "outline"}
                onClick={() => setActiveFilter("Data Analysis")}
                className="text-xs sm:text-sm"
              >
                Data Analysis
              </Button>
              <Button
                size="sm"
                variant={activeFilter === "Data Engineering" ? "default" : "outline"}
                onClick={() => setActiveFilter("Data Engineering")}
                className="text-xs sm:text-sm"
              >
                Data Engineering
              </Button>
              <Button
                size="sm"
                variant={activeFilter === "Data Science" ? "default" : "outline"}
                onClick={() => setActiveFilter("Data Science")}
                className="text-xs sm:text-sm"
              >
                Data Science
              </Button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-glow transition-all hover:scale-105 group flex flex-col"
                >
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-4`}
                  />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <Badge className="mb-3" variant="secondary">
                    {project.category}
                  </Badge>

                  {/* DESCRIPTION */}
                  <div className="text-foreground/80 text-sm leading-relaxed mb-4">
                    {expandedDesc[index] ? project.description : getShortText(project.description)}
                    {project.description.split(" ").length > WORD_LIMIT && (
                      <button
                        className="text-primary ml-2 font-semibold hover:underline"
                        onClick={() =>
                          setExpandedDesc((prev) => ({ ...prev, [index]: !prev[index] }))
                        }
                      >
                        {expandedDesc[index] ? "View Less" : "View More"}
                      </button>
                    )}
                  </div>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {(expandedTech[index] ? project.tech : project.tech.slice(0, TECH_LIMIT)).map(
                      (tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 glass rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      )
                    )}
                    {project.tech.length > TECH_LIMIT && (
                      <button
                        className="text-xs text-primary font-semibold"
                        onClick={() =>
                          setExpandedTech((prev) => ({ ...prev, [index]: !prev[index] }))
                        }
                      >
                        {expandedTech[index]
                          ? "Show Less"
                          : `+${project.tech.length - TECH_LIMIT} more`}
                      </button>
                    )}
                  </div>

                  {/* VIEW PROJECT BUTTON */}
                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => handleViewProject(project.repo)}
                      variant="default"
                      className="hover-glow w-full flex-1 border border-primary/50"
                    >
                      View Project
                    </Button>
                    {demoMap[project.title] && (
                      <Button
                        onClick={() => {
                          setSelectedDemoProject(project.title);
                          setDemoModalOpen(true);
                        }}
                        variant="outline"
                        className="hover-glow w-full flex-1 bg-white/5 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 transition-all font-semibold shadow-[0_0_15px_rgba(16,185,129,0.15)] group/demo"
                      >
                        <span className="flex items-center gap-2">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-emerald-400 group-hover/demo:text-emerald-300">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          Live Demo
                        </span>
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL FOR PRIVATE PROJECTS */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg max-w-sm text-center border border-white/10"
          >
            <p className="mb-4 text-gray-900 dark:text-gray-100">{modalMessage}</p>
            <Button
              onClick={() => setModalOpen(false)}
              variant="default"
              className="hover-glow w-full"
            >
              Close
            </Button>
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