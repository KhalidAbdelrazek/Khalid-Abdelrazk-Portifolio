import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MapPin, Phone, Mail, BarChart2, PieChart, Brain, Database, Layers, Sparkles } from "lucide-react";

const services = [
  {
    title: "Data Analysis",
    description: "Analyze datasets, perform EDA, and extract actionable insights for business growth.",
    icon: BarChart2,
  },
  {
    title: "Data Visualization",
    description: "Build immersive dashboards using Power BI and Python to track critical KPIs.",
    icon: PieChart,
  },
  {
    title: "Machine Learning",
    description: "Develop robust predictive models for complex forecasting and classification problems.",
    icon: Brain,
  },
  {
    title: "Data Engineering",
    description: "Build scalable data pipelines, ETL processes, and robust database architectures.",
    icon: Database,
  },
  {
    title: "Data Cleaning",
    description: "Clean, transform, and structure raw datasets to prepare them for deep analysis.",
    icon: Sparkles,
  },
  {
    title: "Analytics Engineering",
    description: "Build and maintain scalable dbt models and data transformation pipelines for analytics-ready datasets.",
    icon: Layers,
  }
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const contactItems = [
    { icon: MapPin, label: "Location", value: "Cairo, Egypt", color: "text-primary" },
    { icon: Phone, label: "Phone", value: "+201015565612", color: "text-accent" },
    { icon: Mail, label: "Email", value: "khalidabdelrazk4@gmail.com", color: "text-primary" },
  ];

  return (
    <section id="about" className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="section-divider mb-16" />

          <div className="grid lg:grid-cols-3 gap-8 items-start mb-10 md:mb-16">
            <div className="lg:col-span-3 space-y-8">
              <div className="glass rounded-2xl md:rounded-3xl p-5 sm:p-7 md:p-10 hover-glow transition-all border border-border">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-lg text-foreground/90 leading-relaxed mb-8"
                >
                  Data Analyst and Data Engineer with 1+ year of experience converting complex datasets into strategic insights and scalable data infrastructure. Proven track record across data analysis, analytics engineering, and BI development, with strong skills in Python, SQL, dbt, and Power BI. Recently led an 8-member team to deliver a{" "}
                  <span className="text-gradient font-semibold">Smart Medical Sample Transport System</span>{" "}
                  as a graduation project, earning full marks — leveraging analytics and automation to optimize healthcare workflows.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border/40"
                >
                  {contactItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    >
                      <div className="p-3 glass rounded-xl group-hover:scale-110 transition-transform flex-shrink-0 border border-border/50">
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">{item.label}</p>
                        <p className="font-bold text-xs truncate text-foreground">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center">My <span className="text-gradient title-underline">Services</span></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
                  transition={{ delay: prefersReducedMotion ? 0 : 0.2 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="glass card-accent-bar rounded-2xl p-5 sm:p-7 hover-glow group transition-all duration-500 hover:-translate-y-1.5 border border-border hover:border-primary/50"
                >
                  {/* Consistent Duotone Icon Container */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="icon-accent w-12 h-12">
                      <service.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-muted-foreground/50 mt-1 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold mb-2.5 group-hover:text-primary transition-colors text-foreground">{service.title}</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-5 h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent transition-all duration-500 rounded-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;