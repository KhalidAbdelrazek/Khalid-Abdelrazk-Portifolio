import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Database,
  BarChart3,
  Code2,
  Brain,
  FileSpreadsheet,
  PieChart,
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      name: "Python",
      level: 90,
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "SQL",
      level: 85,
      icon: Database,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Power BI",
      level: 88,
      icon: BarChart3,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Machine Learning",
      level: 80,
      icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Excel",
      level: 85,
      icon: FileSpreadsheet,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Data Visualization",
      level: 87,
      icon: PieChart,
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-6 hover-glow transition-all hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${skill.color}`}
                  >
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
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
