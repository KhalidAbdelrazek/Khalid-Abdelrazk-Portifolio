import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { ArrowIcon, scrollTo } from "@/components/design/bits";

const navigation = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Resume", id: "experience" },
  { label: "Projects", id: "projects" },
];

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_vff6qlj",
        "template_6twp54l",
        { name: "Website", email, message: "Please get in touch.", title: "Footer" },
        "Dlv3sTt1GEqeR_uYe",
      )
      .then(
        () => {
          toast({ title: "Got it", description: "I'll reply to that address." });
          setEmail("");
          setLoading(false);
        },
        () => {
          toast({ title: "Could not send", description: "Email khalidabdelrazk4@gmail.com directly." });
          setLoading(false);
        },
      );
  };

  return (
    <footer className="px-3 pb-4 sm:px-6">
      <div className="mx-auto max-w-[1240px] rounded-[32px] bg-[#171717] px-6 py-10 text-white sm:px-10 sm:py-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Lets Connect there</h2>
          <button type="button" onClick={() => scrollTo("contact")} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white">
            Hire me
            <ArrowIcon />
          </button>
        </div>

        <div className="my-8 h-px bg-white/15" />

        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_auto_auto_minmax(0,16rem)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-10 place-items-center rounded-full bg-primary text-sm font-bold">KA</span>
              <span className="text-xl font-semibold">ABDELRAZK</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
              Data engineer and analytics engineer in Cairo. Pipelines, models, and dashboards built so the numbers can be trusted.
            </p>
            <div className="mt-5 flex gap-4 text-sm font-semibold">
              <a href="https://github.com/khalidabdelrazek" target="_blank" rel="noreferrer" className="hover:text-primary">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/khalid-abdelrazk-7719b32b3/" target="_blank" rel="noreferrer" className="hover:text-primary">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-primary">Navigation</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button type="button" onClick={() => scrollTo(item.id)} className="hover:text-white">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-primary">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a href="tel:+201015565612">+20 101 556 5612</a>
              </li>
              <li>
                <a href="mailto:khalidabdelrazk4@gmail.com">khalidabdelrazk4@gmail.com</a>
              </li>
              <li>Cairo, Egypt</li>
            </ul>
          </div>

          <form onSubmit={subscribe}>
            <p className="font-semibold text-primary">Get in touch</p>
            <div className="mt-3 flex overflow-hidden rounded-full bg-white">
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="w-full bg-transparent px-4 py-3 text-sm text-[#1D2430] outline-none"
              />
              <button type="submit" disabled={loading} aria-label="Send email" className="grid w-12 place-items-center bg-primary text-white disabled:opacity-60">
                <ArrowIcon />
              </button>
            </div>
            <a
              href="https://drive.google.com/file/d/1R4OBFBmX3yRYVu-ZxegHulADLe0amrLn/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm text-white/70 underline underline-offset-4 hover:text-white"
            >
              Download CV
            </a>
          </form>
        </div>

        <div className="mt-8 h-px bg-white/15" />
        <div className="mt-4 flex flex-col gap-2 text-sm text-white/60 sm:flex-row sm:justify-between">
          <p>Copyright© {new Date().getFullYear()} Khalid Abdelrazk. All Rights Reserved.</p>
          <p>Cairo · Data & analytics engineering</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
