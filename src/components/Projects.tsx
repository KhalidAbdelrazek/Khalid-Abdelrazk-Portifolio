import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
      title: "IDH Daily Visits Analysis",
      category: "Data Analysis",
      description:
        "Analyzed daily visit patterns and trends for healthcare facilities to optimize staffing and resource allocation.",
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

  const handleViewProject = (repo) => {
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
      {/* FIXED "View Projects" BUTTON */}
      {/* <Button
        size="lg"
        className="fixed bottom-6 right-6 z-50 hover-glow"
        onClick={() => {
          const section = document.getElementById("projects");
          section?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        View Projects
      </Button> */}

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Featured <span className="text-gradient">Projects</span>
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                onClick={() => setActiveFilter("all")}
                className="hover-glow"
              >
                All Projects
              </Button>
              <Button
                variant={activeFilter === "Data Analysis" ? "default" : "outline"}
                onClick={() => setActiveFilter("Data Analysis")}
                className="hover-glow"
              >
                Data Analysis
              </Button>
              <Button
                variant={activeFilter === "Data Science" ? "default" : "outline"}
                onClick={() => setActiveFilter("Data Science")}
                className="hover-glow"
              >
                Data Science
              </Button>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 hover-glow transition-all hover:scale-105 group flex flex-col"
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
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 glass rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project button */}
                  <div className="mt-auto">
                    <Button
                      onClick={() => handleViewProject(project.repo)}
                      variant="default"
                      className="hover-glow w-full"
                    >
                      View Project
                    </Button>
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
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg max-w-sm text-center"
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
    </>
  );
};

export default Projects;
