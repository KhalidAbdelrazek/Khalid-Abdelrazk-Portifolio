import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Database,
  BarChart3,
  Code2,
  Brain,
  FileSpreadsheet,
  PieChart,
  Cpu,
} from "lucide-react";

const skills = [
  // Programming & Core Tools
  { name: "Python", level: 90, icon: Code2, color: "from-blue-500 to-cyan-500" },
  { name: "R Programming", level: 75, icon: Code2, color: "from-indigo-500 to-violet-500" },
  { name: "SQL", level: 85, icon: Database, color: "from-orange-500 to-red-500" },
  { name: "PostgreSQL", level: 80, icon: Database, color: "from-indigo-500 to-purple-500" },
  { name: "MongoDB", level: 80, icon: Database, color: "from-green-500 to-teal-500" },

  // Data Analysis & BI
  { name: "Power BI", level: 90, icon: BarChart3, color: "from-yellow-500 to-orange-500" },
  { name: "Excel", level: 90, icon: FileSpreadsheet, color: "from-green-500 to-emerald-500" },
  { name: "Tableau", level: 80, icon: PieChart, color: "from-blue-400 to-indigo-500" },
  { name: "Data Visualization", level: 90, icon: PieChart, color: "from-cyan-500 to-blue-500" },
  { name: "Business Analytics", level: 90, icon: BarChart3, color: "from-teal-400 to-cyan-500" },

  // AI & ML
  { name: "Machine Learning", level: 80, icon: Brain, color: "from-purple-500 to-pink-500" },
  { name: "ETL & Pipelines", level: 80, icon: Database, color: "from-pink-500 to-red-400" },
  { name: "Data Cleaning", level: 90, icon: FileSpreadsheet, color: "from-yellow-400 to-orange-400" },

  // Databases & Containers
  { name: "Database Administration", level: 85, icon: Database, color: "from-red-500 to-orange-500" },
  { name: "Docker (Containers)", level: 75, icon: Cpu, color: "from-blue-400 to-teal-500" },

  // Analytics & Statistics
  { name: "Statistics", level: 80, icon: BarChart3, color: "from-green-400 to-lime-500" },
];

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-center">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="section-divider mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 30, scale: 0.95 }
                }
                transition={{ delay: index * 0.07, duration: 0.5 }}
                className="glass rounded-2xl p-6 hover-glow hover:scale-[1.03] transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <motion.div
                    className={`p-1.5 rounded-lg bg-gradient-to-br ${skill.color} shadow-sm`}
                    whileHover={{ rotate: [0, -6, 6, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <skill.icon className="h-3.5 w-3.5 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-xs md:text-sm truncate">{skill.name}</h3>
                  <span className="ml-auto text-[10px] font-bold text-muted-foreground">{skill.level}%</span>
                </div>

                <div className="h-1 bg-muted/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ delay: index * 0.04 + 0.2, duration: 0.8, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
