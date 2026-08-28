import { motion, useInView, useReducedMotion } from "framer-motion";
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
  // accent color used for the icon itself (not a gradient box fill)
  iconClass: string;
  // hover border accent color
  borderAccent: string;
}

const softSkills: SoftSkillItem[] = [
  {
    name: "Problem Solving",
    description: "Breaking down complex challenges into clear, actionable solutions.",
    icon: Lightbulb,
    iconClass: "text-amber-400",
    borderAccent: "group-hover:border-amber-500/45",
  },
  {
    name: "Teamwork & Collaboration",
    description: "Working closely with cross-functional teams to deliver shared goals.",
    icon: Users,
    iconClass: "text-cyan-400",
    borderAccent: "group-hover:border-cyan-500/45",
  },
  {
    name: "Communication Skills",
    description: "Translating technical findings into insights stakeholders can act on.",
    icon: MessageSquare,
    iconClass: "text-emerald-400",
    borderAccent: "group-hover:border-emerald-500/45",
  },
  {
    name: "Time Management",
    description: "Balancing multiple priorities and deadlines without losing quality.",
    icon: Clock,
    iconClass: "text-purple-400",
    borderAccent: "group-hover:border-purple-500/45",
  },
  {
    name: "Adaptability",
    description: "Adjusting quickly to new tools, requirements, and shifting priorities.",
    icon: Zap,
    iconClass: "text-pink-400",
    borderAccent: "group-hover:border-pink-500/45",
  },
  {
    name: "Critical Thinking",
    description: "Questioning assumptions and validating data before drawing conclusions.",
    icon: Brain,
    iconClass: "text-indigo-400",
    borderAccent: "group-hover:border-indigo-500/45",
  },
];

const SoftSkills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="soft-skills" className="py-14 md:py-20 relative overflow-hidden">
      {/* Reduced ambient glow — single central spot rather than two corner blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-accent/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/4 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 35 }}
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

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28, scale: prefersReducedMotion ? 1 : 0.97 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: prefersReducedMotion ? 0 : 28, scale: prefersReducedMotion ? 1 : 0.97 }
                  }
                  transition={{
                    delay: prefersReducedMotion ? 0 : index * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  // card-accent-bar gives each card the 2px left accent spine instead of corner gradient blobs
                  className={`glass card-accent-bar rounded-2xl p-6 sm:p-7 hover-glow hover:-translate-y-1.5 transition-all duration-300 border border-white/10 ${skill.borderAccent} group cursor-default flex flex-col justify-between`}
                >
                  <div>
                    {/* Flat icon treatment — icon-accent replaces gradient-square box */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="icon-accent w-12 h-12 flex-shrink-0">
                        <Icon className={`h-5 w-5 ${skill.iconClass}`} strokeWidth={1.75} />
                      </div>
                      {/* Small ordinal accent — adds visual interest without a blob */}
                      <span className="text-[10px] font-bold tracking-widest text-muted-foreground/40 mt-1 select-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Heading */}
                    <h3 className="text-lg sm:text-xl font-bold mb-2.5 group-hover:text-primary transition-colors leading-snug">
                      {skill.name}
                    </h3>

                    {/* Supporting Description */}
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Bottom accent line — grows on hover */}
                  <div className="mt-5 h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent transition-all duration-500 rounded-full" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkills;
