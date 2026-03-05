import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Lightbulb,
    Users,
    MessageSquare,
    Clock,
    Zap,
    Brain,
} from "lucide-react";

const softSkills = [
    {
        name: "Problem Solving",
        description: "Breaking down complex challenges into actionable solutions",
        icon: Lightbulb,
        color: "from-yellow-500 to-orange-500",
        glow: "hover:shadow-yellow-500/20",
    },
    {
        name: "Teamwork & Collaboration",
        description: "Working effectively with cross-functional teams",
        icon: Users,
        color: "from-blue-500 to-cyan-500",
        glow: "hover:shadow-blue-500/20",
    },
    {
        name: "Communication Skills",
        description: "Translating technical insights into clear narratives",
        icon: MessageSquare,
        color: "from-green-500 to-emerald-500",
        glow: "hover:shadow-green-500/20",
    },
    {
        name: "Time Management",
        description: "Delivering results efficiently under tight deadlines",
        icon: Clock,
        color: "from-purple-500 to-violet-500",
        glow: "hover:shadow-purple-500/20",
    },
    {
        name: "Adaptability",
        description: "Thriving in fast-paced and evolving environments",
        icon: Zap,
        color: "from-pink-500 to-rose-500",
        glow: "hover:shadow-pink-500/20",
    },
    {
        name: "Critical Thinking",
        description: "Evaluating data and situations with analytical depth",
        icon: Brain,
        color: "from-cyan-500 to-indigo-500",
        glow: "hover:shadow-cyan-500/20",
    },
];

const SoftSkills = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="soft-skills" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        Soft <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
                        Beyond the technical — the human qualities that make collaboration and
                        innovation possible.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, y: 0, scale: 1 }
                                        : { opacity: 0, y: 40, scale: 0.95 }
                                }
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`glass rounded-2xl p-6 hover-glow transition-all hover:scale-[1.04] hover:shadow-xl ${skill.glow} group cursor-default`}
                            >
                                {/* Icon */}
                                <div className="flex items-start gap-4">
                                    <motion.div
                                        className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} flex-shrink-0 shadow-md`}
                                        whileHover={{ rotate: [0, -8, 8, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <skill.icon className="h-6 w-6 text-white" />
                                    </motion.div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-base md:text-lg leading-tight mb-1 group-hover:text-gradient transition-colors">
                                            {skill.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {skill.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Animated bottom bar */}
                                <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent transition-all duration-500 rounded-full" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SoftSkills;
