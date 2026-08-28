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

interface SoftSkillItem {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const softSkills: SoftSkillItem[] = [
  {
    name: "Problem Solving",
    description: "Breaking down complex challenges into clear, actionable solutions.",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Teamwork & Collaboration",
    description: "Working closely with cross-functional teams to deliver shared goals.",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Communication Skills",
    description: "Translating technical findings into insights stakeholders can act on.",
    icon: MessageSquare,
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Time Management",
    description: "Balancing multiple priorities and deadlines without losing quality.",
    icon: Clock,
    color: "from-purple-500 to-violet-500",
  },
  {
    name: "Adaptability",
    description: "Adjusting quickly to new tools, requirements, and shifting priorities.",
    icon: Zap,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Critical Thinking",
    description: "Questioning assumptions and validating data before drawing conclusions.",
    icon: Brain,
    color: "from-cyan-500 to-indigo-500",
  },
];

const SoftSkills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="soft-skills" className="py-14 md:py-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-center">
            Soft <span className="text-gradient">Skills</span>
          </h2>
          <div className="section-divider mb-4 sm:mb-6" />
          <p className="text-center text-muted-foreground mb-10 sm:mb-14 max-w-xl mx-auto text-sm sm:text-base">
            Beyond the technical — the interpersonal strengths and analytical mindset that drive high-impact outcomes.
          </p>

          {/* Cards Grid: 3 cols on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 30, scale: 0.95 }
                }
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="glass rounded-2xl p-6 sm:p-7 hover-glow hover:-translate-y-1.5 transition-all duration-300 border border-white/10 hover:border-primary/40 group cursor-default relative overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle corner gradient light */}
                <div
                  className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${skill.color} opacity-[0.06] group-hover:opacity-15 transition-opacity rounded-bl-full pointer-events-none`}
                />

                <div>
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-primary/20 transition-transform duration-300`}
                  >
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Heading */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2.5 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>

                  {/* Supporting Description */}
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Subtle hover accent bar */}
                <div className="mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkills;

