import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    title: "Data Analysis",
    description: "Explore datasets, test patterns, and turn findings into practical business recommendations.",
  },
  {
    title: "Data Visualization",
    description: "Build Power BI and Python dashboards that make performance, trends, and KPIs clear.",
  },
  {
    title: "Machine Learning",
    description: "Develop and evaluate predictive models for forecasting and classification problems.",
  },
  {
    title: "Data Engineering",
    description: "Create dependable ETL pipelines, data models, and database foundations for analytics.",
  },
  {
    title: "Data Cleaning",
    description: "Resolve missing values, duplicates, and inconsistent formats with repeatable transformations.",
  },
  {
    title: "Analytics Engineering",
    description: "Build maintainable dbt models and analytics-ready data layers that teams can trust.",
  },
];

const contactItems = [
  { label: "Location", value: "Cairo, Egypt" },
  { label: "Phone", value: "+20 101 556 5612", href: "tel:+201015565612" },
  { label: "Email", value: "khalidabdelrazk4@gmail.com", href: "mailto:khalidabdelrazk4@gmail.com" },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border py-16 md:py-24">
      <div className="frame">
        <SectionHeading
          index="01 — Profile"
          title="About"
          lede="Analysis, analytics engineering, and BI — built so other people can trust the numbers."
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
          <div>
            <p className="max-w-3xl font-display text-[1.65rem] font-medium leading-[1.25] sm:text-4xl sm:leading-[1.2]">
              I’m a data analyst and data engineer with more than a year of experience turning complex datasets into clear decisions and dependable data systems.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
              My work spans data analysis, analytics engineering, and BI, using Python, SQL, dbt, and Power BI.
            </p>

            <div className="mt-10 border-l border-primary pl-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Graduation project</p>
              <h3 className="mt-3 text-2xl leading-snug">Smart Medical Sample Transport System</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                I led an eight-person team to build the system, applying analytics and automation to improve healthcare workflows. The project earned full marks.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
              <div>
                <dt className="font-display text-3xl">1+</dt>
                <dd className="mt-1 text-xs leading-5 text-muted-foreground">year of experience</dd>
              </div>
              <div>
                <dt className="font-display text-3xl">8</dt>
                <dd className="mt-1 text-xs leading-5 text-muted-foreground">people on the team I led</dd>
              </div>
              <div>
                <dt className="font-display text-3xl">Full</dt>
                <dd className="mt-1 text-xs leading-5 text-muted-foreground">marks on the graduation project</dd>
              </div>
            </dl>
          </div>

          <aside className="lg:pt-2" aria-label="Contact details">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Reach me</p>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {contactItems.map((item) => (
                <li key={item.label} className="py-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block text-sm break-all hover:text-primary">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm">{item.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-16 md:mt-24">
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <h3 className="text-3xl">Services</h3>
            <p className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:block">
              From raw data to a decision
            </p>
          </div>
          <div className="border-t border-border">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="grid gap-2 border-b border-border py-5 transition-colors duration-300 hover:bg-secondary/40 sm:grid-cols-[3.5rem_14rem_minmax(0,1fr)] sm:items-baseline sm:gap-6 sm:px-2"
              >
                <span className="font-mono text-[11px] text-primary">{String(index + 1).padStart(2, "0")}</span>
                <h4 className="text-base font-medium">{service.title}</h4>
                <p className="text-sm leading-6 text-muted-foreground">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
