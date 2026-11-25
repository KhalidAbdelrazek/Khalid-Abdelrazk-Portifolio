import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { AccentHeading } from "@/components/design/bits";

const fieldClass =
  "w-full rounded-2xl border border-border bg-white px-4 py-3 text-base text-foreground outline-none placeholder:text-muted-foreground/70 focus-visible:border-primary";

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

    emailjs.send("service_vff6qlj", "template_6twp54l", formData, "Dlv3sTt1GEqeR_uYe").then(
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
    <section id="contact" className="scroll-mt-28 bg-background px-3 py-8 sm:px-6">
      <div className="mx-auto max-w-[1100px] rounded-[32px] bg-[#F3F5F8] px-5 py-14 sm:px-10">
        <AccentHeading before="Have a data problem?" accent="Let’s Discuss" className="text-center" />
        <p className="mx-auto mt-4 max-w-lg text-center text-base leading-7 text-muted-foreground">
          A role, a pipeline, or a question about the work. I read everything. Cairo, available for data and analytics engineering.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 grid max-w-xl gap-4">
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className={fieldClass} />
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email address"
            className={fieldClass}
          />
          <label className="sr-only" htmlFor="message">
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
          <button
            type="submit"
            disabled={loading}
            className="justify-self-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-white disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
