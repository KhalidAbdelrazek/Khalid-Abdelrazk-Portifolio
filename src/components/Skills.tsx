import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiPython,
  SiR,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiApacheairflow,
  SiApachespark,
  SiDbt,
  SiDatabricks,
  SiDuckdb,
  SiMetabase,
} from "react-icons/si";
import { FaAws, FaFileExcel } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandAzure, TbSql, TbChartPie } from "react-icons/tb";
import {
  Workflow,
  Layers,
  Network,
  Search,
  PieChart,
  Brain,
  Calculator,
  Sparkles,
  Server,
  TrendingUp,
  BarChart3,
} from "lucide-react";

interface SkillItem {
  name: string;
  icon: React.ElementType;
  iconColor: string;
  bgColor?: string;
}

// ROW 1: Data Engineering, Cloud & Languages (Scrolls Left)
const row1Skills: SkillItem[] = [
  { name: "Python", icon: SiPython, iconColor: "text-[#38bdf8]" },
  { name: "SQL", icon: TbSql, iconColor: "text-[#f97316]" },
  { name: "dbt (data build tool)", icon: SiDbt, iconColor: "text-[#ff694b]" },
  { name: "Apache Airflow", icon: SiApacheairflow, iconColor: "text-[#00c7d4]" },
  { name: "Apache Spark / PySpark", icon: SiApachespark, iconColor: "text-[#e25a1c]" },
  { name: "Amazon Redshift", icon: FaAws, iconColor: "text-[#ff9900]" },
  { name: "Azure Databricks", icon: SiDatabricks, iconColor: "text-[#ff3621]" },
  { name: "PostgreSQL", icon: SiPostgresql, iconColor: "text-[#336791]" },
  { name: "ETL & Pipelines", icon: Workflow, iconColor: "text-cyan-400" },
  { name: "Medallion Architecture", icon: Layers, iconColor: "text-purple-400" },
];

// ROW 2: BI, Analytics, Databases & Querying (Scrolls Right)
const row2Skills: SkillItem[] = [
  { name: "Power BI", icon: BarChart3, iconColor: "text-[#f2c811]" },
  { name: "Tableau", icon: TbChartPie, iconColor: "text-[#e97627]" },
  { name: "Metabase", icon: SiMetabase, iconColor: "text-[#509ee3]" },
  { name: "Microsoft Excel", icon: FaFileExcel, iconColor: "text-[#107c41]" },
  { name: "Microsoft Azure", icon: TbBrandAzure, iconColor: "text-[#0089d6]" },
  { name: "SQL Server", icon: DiMsqlServer, iconColor: "text-[#cc292b]" },
  { name: "DuckDB", icon: SiDuckdb, iconColor: "text-[#fff000]" },
  { name: "MongoDB", icon: SiMongodb, iconColor: "text-[#47a248]" },
  { name: "R", icon: SiR, iconColor: "text-[#276dc3]" },
  { name: "Business Analytics", icon: TrendingUp, iconColor: "text-emerald-400" },
];

// ROW 3: Analysis, Modeling, Tools & ML (Scrolls Left)
const row3Skills: SkillItem[] = [
  { name: "Data Modeling", icon: Network, iconColor: "text-violet-400" },
  { name: "Exploratory Data Analysis (EDA)", icon: Search, iconColor: "text-sky-400" },
  { name: "Data Visualization", icon: PieChart, iconColor: "text-pink-400" },
  { name: "Machine Learning", icon: Brain, iconColor: "text-purple-400" },
  { name: "Statistics", icon: Calculator, iconColor: "text-teal-400" },
  { name: "Data Cleaning", icon: Sparkles, iconColor: "text-amber-400" },
  { name: "Database Administration", icon: Server, iconColor: "text-indigo-400" },
  { name: "Docker", icon: SiDocker, iconColor: "text-[#2496ed]" },
  { name: "Git", icon: SiGit, iconColor: "text-[#f05032]" },
  { name: "GitHub", icon: SiGithub, iconColor: "text-foreground" },
];

interface MarqueeRowProps {
  skills: SkillItem[];
  direction: "left" | "right";
  speedClass?: string;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ skills, direction }) => {
  // Duplicate array once for seamless -50% translation loop
  const duplicatedSkills = [...skills, ...skills];
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="relative w-full overflow-hidden marquee-track py-1.5">
      <div className={`flex gap-3 sm:gap-4 ${animClass}`}>
        {duplicatedSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={`${skill.name}-${index}`}
              className="glass rounded-xl sm:rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3.5 flex items-center gap-3 sm:gap-3.5 shrink-0 hover-glow border border-border hover:border-primary/50 transition-all duration-300 group/card cursor-pointer select-none hover:scale-105"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center bg-secondary border border-border/80 group-hover/card:scale-110 group-hover/card:bg-primary/10 group-hover/card:border-primary/30 transition-all shrink-0">
                <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${skill.iconColor} transition-transform group-hover/card:rotate-6`} />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-foreground group-hover/card:text-primary transition-colors whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-14 md:py-20 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-center">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="section-divider mb-10 sm:mb-14" />

          {/* Marquee Container with Left & Right edge gradient fade masks */}
          <div className="relative w-full overflow-hidden max-w-7xl mx-auto space-y-3 sm:space-y-4">
            {/* Left fade gradient */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 md:w-36 z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />
            
            {/* Right fade gradient */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 md:w-36 z-10 bg-gradient-to-l from-background via-background/80 to-transparent" />

            {/* Row 1: Left */}
            <MarqueeRow skills={row1Skills} direction="left" />

            {/* Row 2: Right */}
            <MarqueeRow skills={row2Skills} direction="right" />

            {/* Row 3: Left */}
            <MarqueeRow skills={row3Skills} direction="left" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

