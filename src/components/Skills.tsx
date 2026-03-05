import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Database,
  BarChart3,
  Code2,
  Brain,
  FileSpreadsheet,
  PieChart,
} from "lucide-react";

const skills = [
  { name: "Python", level: 90, icon: Code2, color: "from-blue-500 to-cyan-500" },
  { name: "SQL", level: 85, icon: Database, color: "from-orange-500 to-red-500" },
  { name: "Power BI", level: 90, icon: BarChart3, color: "from-yellow-500 to-orange-500" },
  { name: "Machine Learning", level: 80, icon: Brain, color: "from-purple-500 to-pink-500" },
  { name: "Excel", level: 90, icon: FileSpreadsheet, color: "from-green-500 to-emerald-500" },
  { name: "Data Visualization", level: 90, icon: PieChart, color: "from-cyan-500 to-blue-500" },
  { name: "R Programming", level: 75, icon: Code2, color: "from-indigo-500 to-violet-500" },
  { name: "ETL & Pipelines", level: 80, icon: Database, color: "from-pink-500 to-red-400" },
  { name: "Statistics", level: 80, icon: BarChart3, color: "from-green-400 to-lime-500" },
  { name: "Data Cleaning", level: 90, icon: FileSpreadsheet, color: "from-yellow-400 to-orange-400" },
  { name: "Tableau", level: 80, icon: PieChart, color: "from-blue-400 to-indigo-500" },
  { name: "Business Analytics", level: 90, icon: BarChart3, color: "from-teal-400 to-cyan-500" },
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
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
                <div className="flex items-center gap-4 mb-5">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-md`}
                    whileHover={{ rotate: [0, -6, 6, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <skill.icon className="h-5 w-5 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-base">{skill.name}</h3>
                  <span className="ml-auto text-sm font-bold text-muted-foreground">{skill.level}%</span>
                </div>

                <div className="space-y-1.5">
                  <div className="h-1.5 bg-muted/60 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: index * 0.07 + 0.3, duration: 1.2, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>

                {/* Animated bottom reveal */}
                <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
