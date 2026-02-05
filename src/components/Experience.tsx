import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "DEPI",
      role: "Data Engineer Trainee",
      description:
        "Training in data engineering concepts, data pipelines, databases, and analytics tools with hands-on projects.",
      period: "Nov 2025 - Present",
    },
    {
      company: "IDH (Integrated Diagnostics Holdings)",
      role: "Data Scientist Intern",
      description:
        "Worked on healthcare datasets by applying preprocessing, cleaning, and exploratory analysis. Built predictive models and customer segmentation analyses while supporting dashboard development to visualize trends and KPIs.",
      period: "Aug 2025 - Sept 2025",
    },
    {
      company: "NTI (National Telecommunication Institute)",
      role: "Data Analysis Training",
      description:
        "Conducted exploratory data analysis (EDA) on real-world datasets and created performance dashboards using Python, Power BI, and SQL. Delivered insights on key performance metrics to support data-driven decision-making.",
      period: "Jun 2025 - Jul 2025",
    },
    {
      company: "2B Company",
      role: "CRM Intern (Siebel)",
      description:
        "Assisted in managing customer data and customizing workflows within Siebel CRM. Supported troubleshooting, testing, and documentation, helping the IT team improve CRM efficiency and user experience.",
      period: "Sept 2024 - Oct 2024",
    },
    {
      company: "OneAinity",
      role: "Part-Time Flutter Developer",
      description:
        "Developed and maintained cross-platform mobile applications using Flutter and Dart, implementing responsive UIs, state management (BLoC), and REST API integrations. Collaborated with the team to test, debug, and deploy features in production.",
      period: "Jun 2025 - Nov 2025",
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Work <span className="text-gradient">Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="glass rounded-2xl p-6 md:p-8 hover-glow transition-all hover:scale-[1.02] group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-gradient-primary rounded-xl group-hover:animate-pulse">
                      <Briefcase className="h-6 w-6 text-red" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {exp.description}
                    </p>
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

export default Experience;