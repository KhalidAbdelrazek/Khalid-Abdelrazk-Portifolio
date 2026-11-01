import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  BarChart2,
  PieChart,
  Brain,
  Database,
  Layers,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Data Analysis",
    description: "Explore datasets, test patterns, and turn findings into practical business recommendations.",
    icon: BarChart2,
  },
  {
    title: "Data Visualization",
    description: "Build Power BI and Python dashboards that make performance, trends, and KPIs clear.",
    icon: PieChart,
  },
  {
    title: "Machine Learning",
    description: "Develop and evaluate predictive models for forecasting and classification problems.",
    icon: Brain,
  },
  {
    title: "Data Engineering",
    description: "Create dependable ETL pipelines, data models, and database foundations for analytics.",
    icon: Database,
  },
  {
    title: "Data Cleaning",
    description: "Resolve missing values, duplicates, and inconsistent formats with repeatable transformations.",
    icon: Sparkles,
  },
  {
    title: "Analytics Engineering",
    description: "Build maintainable dbt models and analytics-ready data layers that teams can trust.",
    icon: Layers,
  },
];

const contactItems = [
  { icon: MapPin, label: "Location", value: "Cairo, Egypt" },
  { icon: Phone, label: "Phone", value: "+201015565612", href: "tel:+201015565612" },
  { icon: Mail, label: "Email", value: "khalidabdelrazk4@gmail.com", href: "mailto:khalidabdelrazk4@gmail.com" },
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-10 grid gap-4 border-b border-border pb-8 md:mb-14 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Profile</p>
              <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                About <span className="text-muted-foreground">me</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground md:text-right">
              Data analysis, analytics engineering, and BI—grounded in clear thinking and reliable systems.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(17rem,0.75fr)]">
            <article className="rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-10">
              <p className="max-w-3xl text-base leading-7 text-foreground/90 sm:text-lg sm:leading-8">
                I’m a data analyst and data engineer with more than a year of experience turning complex datasets into clear decisions and dependable data systems. My work spans data analysis, analytics engineering, and BI, using Python, SQL, dbt, and Power BI.
              </p>
              <div className="mt-8 border-l-2 border-primary pl-4 sm:pl-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Graduation project</p>
                <p className="mt-2 text-base font-semibold leading-snug sm:text-lg">Smart Medical Sample Transport System</p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                  I led an eight-person team to build the system, applying analytics and automation to improve healthcare workflows. The project earned full marks.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-2xl font-semibold tabular-nums sm:text-3xl">1+</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">year of experience</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tabular-nums sm:text-3xl">8</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">people on the team I led</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-2xl font-semibold sm:text-3xl">Full marks</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">graduation project</p>
                </div>
              </div>
            </article>

            <aside className="rounded-2xl border border-border bg-card p-5 sm:p-6" aria-label="Contact details">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Contact &amp; location</p>
              <div className="divide-y divide-border">
                {contactItems.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <>
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
                        <span className="mt-1 block truncate text-sm font-medium text-foreground">{value}</span>
                      </span>
                      {href && <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />}
                    </>
                  );

                  return href ? (
                    <a key={label} href={href} className="flex min-h-[4.5rem] items-center gap-3 py-3 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      {content}
                    </a>
                  ) : (
                    <div key={label} className="flex min-h-[4.5rem] items-center gap-3 py-3">
                      {content}
                    </div>
                  );
                })}
              </div>
            </aside>
          </div>

          <div className="mt-16 md:mt-20">
            <div className="mb-6 flex items-end justify-between gap-4 border-b border-border pb-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">How I can help</p>
                <h3 className="text-2xl font-semibold sm:text-3xl">Services</h3>
              </div>
              <p className="hidden max-w-xs text-right text-sm leading-6 text-muted-foreground sm:block">From raw data to useful decisions and systems.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ title, description, icon: Icon }, index) => (
                <article key={title} className="bg-background p-5 sm:p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-foreground/80">
                      <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs tabular-nums text-muted-foreground/70">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h4 className="text-base font-semibold">{title}</h4>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
