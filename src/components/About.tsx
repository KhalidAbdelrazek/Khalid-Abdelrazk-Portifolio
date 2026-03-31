import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, BarChart2, PieChart, Brain, Smartphone, Database } from "lucide-react";

const services = [
  {
    title: "Data Analysis",
    description: "Analyze datasets, perform EDA, and extract actionable insights for business growth.",
    icon: BarChart2,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400"
  },
  {
    title: "Data Visualization",
    description: "Build immersive dashboards using Power BI and Python to track critical KPIs.",
    icon: PieChart,
    color: "from-orange-500/20 to-yellow-500/20",
    iconColor: "text-orange-400"
  },
  {
    title: "Machine Learning",
    description: "Develop robust predictive models for complex forecasting and classification problems.",
    icon: Brain,
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400"
  },

  {
    title: "Data Engineering Services",
    description: "Build scalable data pipelines, ETL processes, and robust database architectures.",
    icon: Database,
    color: "from-blue-600/20 to-indigo-600/20",
    iconColor: "text-blue-400"
  },
  {
    title: "Data Cleaning",
    description: "Clean, transform, and structure raw datasets to prepare them for deep analysis.",
    icon: Database,
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400"
  },
  {
    title: "Flutter Development",
    description: "Build cross-platform mobile apps with Flutter, focus on high performance and clean UI.",
    icon: Smartphone,
    color: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-400"
  }
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              <div className="glass rounded-2xl md:rounded-3xl p-5 sm:p-7 md:p-10 hover-glow transition-all">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-lg text-foreground/85 leading-relaxed mb-8"
                >
                  Data Analyst with 1+ year of experience converting complex datasets into strategic insights that drive
                  decision-making. Proven track record in data analysis, machine learning, and data visualization, with
                  strong skills in Python, SQL, and Power BI. Currently spearheading an 8-member team on a cutting-edge{" "}
                  <span className="text-gradient font-semibold">Smart Medical Sample Transport System</span>, leveraging
                  analytics and automation to optimize healthcare workflows and improve operational efficiency.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10"
                >
                  {contactItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    >
                      <div className="p-3 glass rounded-xl group-hover:scale-110 transition-transform flex-shrink-0">
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.label}</p>
                        <p className="font-bold text-xs truncate">{item.value}</p>
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
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="glass rounded-2xl p-4 sm:p-6 md:p-8 hover-glow group transition-all duration-500 hover:-translate-y-2 border-white/5"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg border border-white/10`}>
                    <service.icon className={`h-6 w-6 md:h-7 md:w-7 ${service.iconColor}`} />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {service.description}
                  </p>
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