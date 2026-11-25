import { motion, useReducedMotion } from "framer-motion";
import profileImage from "@/assets/profile.jpg";
import { ease, scrollTo } from "@/components/design/bits";

const Hero = () => {
  const reduced = useReducedMotion();
  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, delay, ease },
        };

  return (
    <section id="hero" className="scroll-mt-28 overflow-hidden bg-background pb-6 pt-28 sm:pt-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="relative mx-auto flex max-w-[980px] flex-col items-center">
          <motion.div {...rise(0.05)} className="relative">
            <span className="inline-flex rounded-full border border-[#171717] px-5 py-2 text-lg font-medium">Hello!</span>
            <svg viewBox="0 0 28 30" className="absolute -right-7 -top-3 h-7 w-7 text-primary" fill="none" aria-hidden="true">
              <path d="M4 22c6-2 8-8 7-14M16 6c2 4 6 6 10 5M14 16c3 1 5 4 5 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </motion.div>

          <motion.h1 {...rise(0.16)} className="mt-5 max-w-[16ch] text-center text-[clamp(3.1rem,7vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
            I’m <span className="text-primary">Khalid</span>,
            <br />
            Data Engineer
          </motion.h1>
          <motion.p {...rise(0.28)} className="mt-3 text-center text-base font-medium text-muted-foreground sm:text-lg">
            Analytics engineer · Cairo
          </motion.p>

          <div className="relative mt-2 h-[430px] w-full sm:h-[500px]">
            <div className="absolute bottom-0 left-1/2 w-[min(92%,620px)] -translate-x-1/2">
              <motion.div
                aria-hidden="true"
                className="h-[330px] w-full rounded-t-[320px] bg-[#E7D9CE] sm:h-[390px]"
                initial={reduced ? false : { scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease }}
              />
            </div>
            <div className="absolute bottom-0 left-1/2 w-[min(78%,380px)] -translate-x-1/2">
              <motion.img
                src={profileImage}
                alt="Portrait of Khalid Abdelrazk"
                className="h-[400px] w-full object-cover object-[center_12%] sm:h-[470px] [mask-image:radial-gradient(ellipse_70%_78%_at_50%_40%,#000_68%,transparent_78%)]"
                initial={reduced ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.28, ease }}
              />
            </div>

            <motion.aside {...rise(0.4)} className="absolute left-0 top-[38%] hidden max-w-[240px] lg:block">
              <QuoteMark />
              <p className="mt-3 text-lg leading-snug text-[#344054]">
                Pipelines and models built so finance, growth, and ops can trust the same numbers.
              </p>
            </motion.aside>

            <motion.aside {...rise(0.48)} className="absolute right-0 top-[40%] hidden text-right lg:block">
              <p className="text-4xl font-semibold tracking-tight">36M+</p>
              <p className="mt-1 text-sm text-muted-foreground">Trip records modeled</p>
            </motion.aside>

            <div className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2">
            <motion.div
              {...rise(0.55)}
              className="flex w-max items-center gap-1 rounded-full border-2 border-white bg-white/80 p-1.5 shadow-[0_10px_30px_rgba(23,23,23,0.08)] backdrop-blur-md"
            >
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-1 rounded-full bg-primary px-5 py-3 text-lg font-semibold text-white"
              >
                Portfolio
                <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
              <button type="button" onClick={() => scrollTo("contact")} className="rounded-full px-5 py-3 text-lg font-medium text-[#1D2430]">
                Hire me
              </button>
            </motion.div>
            </div>
          </div>

          <div className="mt-6 grid w-full gap-6 sm:grid-cols-2 lg:hidden">
            <p className="text-base leading-snug text-[#344054]">
              Pipelines and models built so finance, growth, and ops can trust the same numbers.
            </p>
            <p className="sm:text-right">
              <span className="block text-3xl font-semibold">36M+</span>
              <span className="text-sm text-muted-foreground">Trip records modeled</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuoteMark = () => (
  <svg viewBox="0 0 36 28" className="h-7 w-9 text-[#1D2430]" fill="currentColor" aria-hidden="true">
    <path d="M14 0C6 4 2 10 2 17c0 5 3 9 7 9 3 0 6-2 6-6s-2-5-5-5c0-4 3-8 7-11L14 0zm20 0c-8 4-12 10-12 17 0 5 3 9 7 9 3 0 6-2 6-6s-2-5-5-5c0-4 3-8 7-11L34 0z" />
  </svg>
);

export default Hero;
