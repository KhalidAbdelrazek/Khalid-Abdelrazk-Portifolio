import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const softSkills = [
  {
    name: "Problem Solving",
    description: "Breaking complex challenges into clear, actionable steps.",
  },
  {
    name: "Teamwork & Collaboration",
    description: "Working closely with cross-functional teams to deliver shared goals.",
  },
  {
    name: "Communication Skills",
    description: "Explaining technical findings in terms stakeholders can use.",
  },
  {
    name: "Time Management",
    description: "Balancing multiple priorities and deadlines without losing quality.",
  },
  {
    name: "Adaptability",
    description: "Adjusting quickly as tools, requirements, and priorities change.",
  },
  {
    name: "Critical Thinking",
    description: "Questioning assumptions and validating data before drawing conclusions.",
  },
];

const SoftSkills = () => {
  return (
    <section id="soft-skills" className="scroll-mt-24 border-b border-border py-16 md:py-24">
      <div className="frame">
        <SectionHeading
          index="Working style"
          title="Soft skills"
          lede="How the work actually gets done with other people in the room."
        />

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((skill, index) => (
            <motion.li
              key={skill.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-border py-6 pr-6"
            >
              <p className="font-mono text-[11px] text-primary">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-2xl">{skill.name}</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">{skill.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SoftSkills;
