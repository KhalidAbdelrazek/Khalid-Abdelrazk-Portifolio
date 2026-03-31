import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { FaRobot, FaDatabase, FaChartPie, FaMobileAlt, FaTools } from "react-icons/fa";

interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    skills: string[];
    icon: any;
    color: string;
}

const experiences: ExperienceItem[] = [
    {
        title: "Senior Project Lead",
        company: "Multi-Functional Healthcare Robot (Graduation Project)",
        location: "Beni Suef, Egypt",
        period: "Jun 2025 - Present",
        description: [
            "Leading a cross-functional team of 8 engineers to design and implement an automated medical logistics robot for hospitals.",
            "Developing a mobile application in Flutter for controlling the robot and managing hospital appointments.",
            "Integrating backend services (Django) for user authentication, appointment management, and medical data storage.",
            "Collaborating with ROS developers to ensure precise robot navigation and task execution.",
            "Creating data-driven dashboards to monitor robot performance, hospital workflow efficiency, and sample delivery status.",
        ],
        skills: ["Team Leadership", "Flutter", "Django", "ROS", "IoT", "Mobile App Development", "Data Analytics"],
        icon: FaRobot,
        color: "from-blue-600 to-cyan-500",
    },
    {
        title: "Data Engineer Trainee",
        company: "DEPI",
        location: "Cairo, Egypt",
        period: "Nov 2025 - Present",
        description: [
            "Training in data engineering concepts, data pipelines, databases, and analytics tools with hands-on projects.",
        ],
        skills: ["Data Engineering", "SQL", "Python", "Analytics", "ETL"],
        icon: FaDatabase,
        color: "from-blue-500 to-cyan-400",
    },
    {
        title: "Data Scientist Intern",
        company: "IDH (Integrated Diagnostics Holdings)",
        location: "Cairo, Egypt",
        period: "Aug 2025 - Sept 2025",
        description: [
            "Worked on healthcare datasets by applying preprocessing, cleaning, and exploratory analysis.",
            "Built predictive models and customer segmentation analyses.",
            "Supported dashboard development to visualize trends and KPIs.",
        ],
        skills: ["Python", "Machine Learning", "Data Analysis", "Power BI", "SQL"],
        icon: FaChartPie,
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "Data Analysis Trainee",
        company: "NTI (National Telecommunication Institute)",
        location: "Cairo, Egypt",
        period: "Jun 2025 - Jul 2025",
        description: [
            "Conducted exploratory data analysis (EDA) on real-world datasets.",
            "Created performance dashboards using Python, Power BI, and SQL.",
            "Delivered insights on key performance metrics to support data-driven decision-making.",
        ],
        skills: ["Python", "SQL", "Power BI", "EDA", "Reporting"],
        icon: FaChartPie,
        color: "from-green-500 to-teal-400",
    },
    {
        title: "CRM Intern (Siebel)",
        company: "2B Company",
        location: "Cairo, Egypt",
        period: "Sept 2024 - Oct 2024",
        description: [
            "Assisted in managing customer data and customizing workflows within Siebel CRM.",
            "Supported troubleshooting, testing, and documentation.",
            "Helped the IT team improve CRM efficiency and user experience.",
        ],
        skills: ["CRM", "Siebel", "Data Management", "IT Support"],
        icon: FaTools,
        color: "from-yellow-500 to-orange-400",
    },
    {
        title: "Part-Time Flutter Developer",
        company: "OneAinity",
        location: "Cairo, Egypt",
        period: "Jun 2025 - Nov 2025",
        description: [
            "Developed and maintained cross-platform mobile applications using Flutter and Dart.",
            "Implemented responsive UIs, state management (BLoC), and REST API integrations.",
            "Collaborated with the team to test, debug, and deploy features in production.",
        ],
        skills: ["Flutter", "Dart", "BLoC", "REST API", "UI Development"],
        icon: FaMobileAlt,
        color: "from-red-500 to-pink-400",
    },
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-14 md:py-24 relative overflow-hidden bg-background/50">
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline line — offset to match dot position */}
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative mb-8 md:mb-14 flex items-start"
            >
              {/* Timeline dot — aligned to left line */}
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full glass border border-primary/30
                          flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,180,220,0.2)]
                          mr-4 sm:mr-5 mt-1">
                <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-br ${exp.color} animate-pulse`} />
              </div>

              {/* Content Card */}
              <div className="flex-1 min-w-0">
                <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover-glow transition-all duration-500 hover:-translate-y-1 group border-white/5 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${exp.color} opacity-[0.03] rounded-bl-full`} />

                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <div className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${exp.color} shadow-lg shadow-primary/20 flex-shrink-0`}>
                      <exp.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-xl font-bold group-hover:text-primary transition-colors leading-tight">{exp.title}</h3>
                      <p className="text-muted-foreground font-medium text-xs sm:text-sm leading-tight mt-0.5 line-clamp-2">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 text-xs sm:text-sm text-foreground/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2 text-xs sm:text-sm leading-relaxed text-foreground/80">
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;