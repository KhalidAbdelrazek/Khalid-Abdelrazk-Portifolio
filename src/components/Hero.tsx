import profileImage from "@/assets/profile.jpg";

const stats = [
  { value: "1+", label: "Year building pipelines and dashboards" },
  { value: "50+", label: "Finance and growth KPIs in one model" },
  { value: "36M+", label: "Trip records in the TLC pipeline" },
  { value: "3.3", label: "GPA, Electronics & Communications" },
];

const links = [
  { href: "https://github.com/khalidabdelrazek", label: "GitHub" },
  { href: "https://www.linkedin.com/in/khalid-abdelrazk-7719b32b3/", label: "LinkedIn" },
  { href: "mailto:khalidabdelrazk4@gmail.com", label: "Email" },
];

const Hero = () => {
  return (
    <section id="hero" className="scroll-mt-24 border-b border-border">
      <div className="frame pb-12 pt-8 lg:pb-16 lg:pt-12">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>Analytics engineer at Flash</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Cairo, Egypt
          </span>
        </div>

        <div className="mt-10 grid items-end gap-8 xl:mt-16 xl:grid-cols-[minmax(0,1fr)_16.5rem] xl:gap-14">
          <div className="rise">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
              Data analyst · Data engineer
            </p>
            <h1 className="text-[clamp(2.9rem,7.2vw,6.6rem)] leading-[0.84] tracking-[-0.045em]">
              <span className="block">Khalid</span>
              <span className="block italic text-primary">Abdelrazk</span>
            </h1>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Mohammed Ibrahim
            </p>
          </div>

          <figure className="max-w-[16rem] xl:max-w-none xl:justify-self-end">
            <div className="relative">
              <div className="absolute -left-2.5 -top-2.5 h-full w-full border border-primary" aria-hidden="true" />
              <img
                src={profileImage}
                alt="Portrait of Khalid Abdelrazk"
                className="relative aspect-[4/5] w-full object-cover object-[center_20%]"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Portrait · Cairo
            </figcaption>
          </figure>
        </div>

        <div className="mt-12 grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,38rem)_auto] lg:items-end">
          <p className="text-base leading-7 text-foreground/90 sm:text-lg sm:leading-8">
            Data Analyst and Data Engineer with 1+ years of experience building data pipelines, analytics models, and BI dashboards that turn raw data into business decisions. Skilled in Python, SQL, dbt, Power BI, and cloud data platforms.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="https://drive.google.com/file/d/1R4OBFBmX3yRYVu-ZxegHulADLe0amrLn/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center bg-foreground px-5 text-sm text-background transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Download CV
            </a>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 border-t border-border sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-b border-border py-5 pr-4 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0">
              <dt className="font-display text-3xl leading-none sm:text-4xl">{stat.value}</dt>
              <dd className="mt-2 max-w-[12rem] text-xs leading-5 text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
