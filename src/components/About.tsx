import profileImage from "@/assets/profile.jpg";
import { AccentHeading, Reveal, scrollTo } from "@/components/design/bits";

const points = [
  { title: "Problem solving", copy: "Break a messy metric into a definition, a model, and a check." },
  { title: "Communication", copy: "Explain a pipeline in the language finance and growth already use." },
  { title: "Critical thinking", copy: "Question a number before it becomes a decision." },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-28 bg-[#F3F5F8] py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal>
          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute inset-x-8 bottom-0 top-10 rounded-[36px] bg-[#E7D3C4]" aria-hidden="true" />
            <img
              src={profileImage}
              alt="Khalid Abdelrazk, analytics engineer"
              className="relative mx-auto h-[460px] w-[86%] rounded-[32px] object-cover object-[center_15%] shadow-[0_20px_50px_rgba(29,36,48,0.12)]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <AccentHeading before="Why" accent="Hire me?" />
          <p className="mt-6 max-w-md text-lg leading-8 text-[#667085]">
            I’m an analytics engineer and data engineer in Cairo. I turn operational data into models, pipelines, and dashboards that other people can rely on.
          </p>
          <dl className="mt-8 grid max-w-lg grid-cols-2 gap-6">
            <div>
              <dt className="text-4xl font-semibold tracking-tight text-foreground">50+</dt>
              <dd className="mt-1 text-sm text-muted-foreground">Finance and growth KPIs in one model</dd>
            </div>
            <div>
              <dt className="text-4xl font-semibold tracking-tight text-foreground">1+</dt>
              <dd className="mt-1 text-sm text-muted-foreground">Year building pipelines and BI</dd>
            </div>
          </dl>
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="mt-8 rounded-full border border-[#1D2430] px-10 py-3 text-lg font-medium transition-colors duration-300 hover:bg-[#1D2430] hover:text-white"
          >
            Hire me
          </button>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {points.map((point) => (
              <li key={point.title}>
                <p className="font-semibold text-foreground">{point.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{point.copy}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
