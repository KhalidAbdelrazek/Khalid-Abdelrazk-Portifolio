import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/SectionHeading";

const fieldClass =
  "w-full rounded-none border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground shadow-none outline-none placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    title: "Website Contact",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_vff6qlj", "template_6twp54l", formData, "Dlv3sTt1GEqeR_uYe")
      .then(
        () => {
          toast({
            title: "Message sent",
            description: "Thank you for reaching out. I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", message: "", title: "Website Contact" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          toast({
            title: "Something went wrong",
            description: "Please try again, or email me directly.",
          });
          setLoading(false);
        },
      );
  };

  return (
    <section id="contact" className="scroll-mt-24 border-b border-border py-16 md:py-24">
      <div className="frame">
        <SectionHeading
          index="07 — Correspondence"
          title="Contact"
          lede="A project, a role, or a question about the work. I read everything."
        />

        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <p className="font-display text-4xl italic leading-tight sm:text-5xl">Write to me.</p>
            <a
              href="mailto:khalidabdelrazk4@gmail.com"
              className="mt-6 block text-lg underline decoration-border underline-offset-4 hover:decoration-primary"
            >
              khalidabdelrazk4@gmail.com
            </a>
            <a href="tel:+201015565612" className="mt-2 block text-sm text-muted-foreground hover:text-foreground">
              +20 101 556 5612
            </a>
            <p className="mt-8 max-w-xs text-sm leading-6 text-muted-foreground">
              Based in Cairo. Available for data engineering, analytics engineering, and analysis work.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="What are you working on?"
                rows={5}
                className={`${fieldClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-11 items-center bg-foreground px-6 text-sm text-background transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
