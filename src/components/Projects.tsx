// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

// const Projects = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [activeFilter, setActiveFilter] = useState("all");

//   const projects = [
//     {
//       title: "HR Employee Attrition Analysis",
//       category: "Data Analysis",
//       description:
//         "Analyzed employee attrition patterns using Python, SQL, and Power BI to identify key factors driving turnover and provide actionable insights for retention strategies.",
//       tech: ["Python", "SQL", "Power BI"],
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "Telecom Business Performance Dashboard",
//       category: "Data Analysis",
//       description:
//         "Built comprehensive dashboard tracking KPIs for telecom operations, enabling real-time monitoring of business performance and data-driven decision making.",
//       tech: ["Python", "SQL", "Excel", "Power BI"],
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       title: "Customer Churn Analysis",
//       category: "Data Analysis",
//       description:
//         "Developed predictive models to identify customers at risk of churning, providing insights for targeted retention campaigns.",
//       tech: ["Python", "Pandas", "Scikit-learn"],
//       gradient: "from-orange-500 to-red-500",
//     },
//     {
//       title: "COVID-19 Dashboard",
//       category: "Data Analysis",
//       description:
//         "Created interactive dashboard visualizing COVID-19 trends, cases, and vaccination rates across different regions.",
//       tech: ["Python", "SQL", "Excel", "Power BI"],
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       title: "Real Estate Analysis",
//       category: "Data Analysis",
//       description:
//         "Analyzed real estate market trends, pricing patterns, and property features to guide investment decisions.",
//       tech: ["Python", "Power BI"],
//       gradient: "from-yellow-500 to-orange-500",
//     },
//     {
//       title: "IDH House Call Prediction",
//       category: "Data Science",
//       description:
//         "Built machine learning model to predict house call requirements for healthcare services, optimizing resource allocation and scheduling.",
//       tech: ["Python", "ML", "Scikit-learn"],
//       gradient: "from-cyan-500 to-blue-500",
//     },
//     {
//       title: "Campaign Patient Flag Prediction",
//       category: "Data Science",
//       description:
//         "Developed ML model to identify patients most likely to respond to health campaigns, improving campaign effectiveness.",
//       tech: ["Python", "ML"],
//       gradient: "from-pink-500 to-purple-500",
//     },
//     {
//       title: "IDH Daily Visits Analysis",
//       category: "Data Analysis",
//       description:
//         "Analyzed daily visit patterns and trends for healthcare facilities to optimize staffing and resource allocation.",
//       tech: ["Excel", "Power BI", "Python"],
//       gradient: "from-indigo-500 to-blue-500",
//     },
//   ];

//   const filteredProjects =
//     activeFilter === "all"
//       ? projects
//       : projects.filter((p) => p.category === activeFilter);

//   return (
//     <section id="projects" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-3 mb-12">
//             <Button
//               variant={activeFilter === "all" ? "default" : "outline"}
//               onClick={() => setActiveFilter("all")}
//               className="hover-glow"
//             >
//               All Projects
//             </Button>
//             <Button
//               variant={activeFilter === "Data Analysis" ? "default" : "outline"}
//               onClick={() => setActiveFilter("Data Analysis")}
//               className="hover-glow"
//             >
//               Data Analysis
//             </Button>
//             <Button
//               variant={activeFilter === "Data Science" ? "default" : "outline"}
//               onClick={() => setActiveFilter("Data Science")}
//               className="hover-glow"
//             >
//               Data Science
//             </Button>
//           </div>

//           {/* Projects Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 layout
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 className="glass rounded-2xl p-6 hover-glow transition-all hover:scale-105 group"
//               >
//                 <div
//                   className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-4`}
//                 />
//                 <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
//                   {project.title}
//                 </h3>
//                 <Badge className="mb-3" variant="secondary">
//                   {project.category}
//                 </Badge>
//                 <p className="text-foreground/80 text-sm leading-relaxed mb-4">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="text-xs px-3 py-1 glass rounded-full text-muted-foreground"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "HR Employee Attrition Analysis",
      category: "Data Analysis",
      description:
        "Analyzed employee attrition patterns using Python, SQL, and Power BI to identify key factors driving turnover and provide actionable insights for retention strategies.",
      tech: ["Python", "SQL", "Power BI"],
      gradient: "from-blue-500 to-cyan-500",
      repo: "https://github.com/khalidabdelrazek/HR-Attrition-Analysis",
    },
    {
      title: "Telecom Business Performance Dashboard",
      category: "Data Analysis",
      description:
        "Built comprehensive dashboard tracking KPIs for telecom operations, enabling real-time monitoring of business performance and data-driven decision making.",
      tech: ["Python", "SQL", "Excel", "Power BI"],
      gradient: "from-purple-500 to-pink-500",
      repo: "https://github.com/khalidabdelrazek/Telecom-Churn-Analysis",
    },
    {
      title: "Customer Churn Analysis",
      category: "Data Analysis",
      description:
        "Developed predictive models to identify customers at risk of churning, providing insights for targeted retention campaigns.",
      tech: ["Python", "Pandas", "Scikit-learn"],
      gradient: "from-orange-500 to-red-500",
      repo: "https://github.com/khalidabdelrazek/Customer-churn-analysis-with-python",
    },
    {
      title: "COVID-19 Dashboard",
      category: "Data Analysis",
      description:
        "Created interactive dashboard visualizing COVID-19 trends, cases, and vaccination rates across different regions.",
      tech: ["Python", "SQL", "Excel", "Power BI"],
      gradient: "from-green-500 to-emerald-500",
      repo: "https://github.com/khalidabdelrazek/Covid-19-Analysis",
    },
    {
      title: "Real Estate Analysis",
      category: "Data Analysis",
      description:
        "Analyzed real estate market trends, pricing patterns, and property features to guide investment decisions.",
      tech: ["Python", "Power BI"],
      gradient: "from-yellow-500 to-orange-500",
      repo: "https://github.com/khalidabdelrazek/Real-Estate-Analysis-Using-Power-Bi",
    },
    {
      title: "IDH House Call Prediction",
      category: "Data Science",
      description:
        "Built machine learning model to predict house call requirements for healthcare services, optimizing resource allocation and scheduling.",
      tech: ["Python", "ML", "Scikit-learn"],
      gradient: "from-cyan-500 to-blue-500",
      repo: "https://github.com/khalidabdelrazek/KhalidAbdelrazek", // placeholder repo, adjust if needed
    },
    {
      title: "Campaign Patient Flag Prediction",
      category: "Data Science",
      description:
        "Developed ML model to identify patients most likely to respond to health campaigns, improving campaign effectiveness.",
      tech: ["Python", "ML"],
      gradient: "from-pink-500 to-purple-500",
      repo: "https://github.com/khalidabdelrazek/KhalidAbdelrazek", // placeholder repo, adjust if needed
    },
    {
      title: "IDH Daily Visits Analysis",
      category: "Data Analysis",
      description:
        "Analyzed daily visit patterns and trends for healthcare facilities to optimize staffing and resource allocation.",
      tech: ["Excel", "Power BI", "Python"],
      gradient: "from-indigo-500 to-blue-500",
      repo: "https://github.com/khalidabdelrazek/KhalidAbdelrazek", // placeholder repo, adjust if needed
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
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
                className="glass rounded-2xl p-6 hover-glow transition-all hover:scale-105 group"
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
                {project.repo && (
                  <Button
                    onClick={() => window.open(project.repo, "_blank", "noopener")}
                    variant="default"
                    className="mt-2 hover-glow"
                  >
                    View on GitHub
                  </Button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
