import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight, Layout, PieChart, Database, Cpu } from "lucide-react";

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
        company: "Smart Medical Sample Transport System",
        location: "Cairo, Egypt",
        period: "2024 - Present",
        description: [
            "Leading a cross-functional team of 8 engineers to design and implement an automated medical logistics system.",
            "Developing a data-driven monitoring dashboard to track sample health and transit efficiency.",
            "Optimizing healthcare workflows through advanced analytics and IoT integration.",
        ],
        skills: ["Team Leadership", "Project Management", "IoT", "Data Analytics", "System Design"],
        icon: Cpu,
        color: "from-blue-500 to-cyan-400",
    },
    {
        title: "Data Analyst",
        company: "IDH (Integrated Diagnostics Holdings)",
        location: "Cairo, Egypt",
        period: "2023 - 2024",
        description: [
            "Built predictive ML models to forecast house call requirements, improving resource allocation by 15%.",
            "Conducted deep-dive delay analysis to identify bottlenecks in patient flow and facility operations.",
            "Developed interactive Power BI dashboards for KPI tracking and executive decision-making.",
        ],
        skills: ["Python", "SQL", "Power BI", "Machine Learning", "Predictive Modeling"],
        icon: PieChart,
        color: "from-purple-500 to-pink-500",
    }
];

const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-background/50">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6" ref={containerRef}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Timeline line */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={`${exp.company}-${index}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-8 w-10 h-10 rounded-full glass border border-primary/30 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
                                <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${exp.color} animate-pulse`} />
                            </div>

                            {/* Content Card */}
                            <div className={`w-full md:w-[45%] ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                                <div className="glass rounded-3xl p-8 hover-glow transition-all duration-500 hover:-translate-y-2 group border-white/5 relative overflow-hidden">
                                    {/* Card Background Accent */}
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${exp.color} opacity-[0.03] rounded-bl-full`} />

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${exp.color} shadow-lg shadow-primary/20`}>
                                            <exp.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                                            <p className="text-muted-foreground font-medium">{exp.company}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-foreground/60">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="h-4 w-4" />
                                            {exp.period}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="h-4 w-4" />
                                            {exp.location}
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                                                <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20"
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
