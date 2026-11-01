import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
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
    description: "Breaking complex challenges into clear, actionable steps.",
    icon: Lightbulb,
  },
  {
    name: "Teamwork & Collaboration",
    description: "Working closely with cross-functional teams to deliver shared goals.",
    icon: Users,
  },
  {
    name: "Communication Skills",
    description: "Explaining technical findings in terms stakeholders can use.",
    icon: MessageSquare,
  },
  {
    name: "Time Management",
    description: "Balancing multiple priorities and deadlines without losing quality.",
    icon: Clock,
  },
  {
    name: "Adaptability",
    description: "Adjusting quickly as tools, requirements, and priorities change.",
    icon: Zap,
  },
  {
    name: "Critical Thinking",
    description: "Questioning assumptions and validating data before drawing conclusions.",
    icon: Brain,
  },
];

const SoftSkills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="soft-skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-8 grid gap-4 border-b border-border pb-5 sm:mb-10 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Working style</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Soft skills</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-right">
              The habits that help me solve problems, collaborate, and communicate useful findings.
            </p>
          </div>

          <ul className="grid gap-x-10 sm:grid-cols-2">
            {softSkills.map(({ name, description, icon: Icon }) => (
              <li key={name} className="flex gap-4 border-b border-border py-5 sm:py-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground/80">
                  <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{name}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkills;
