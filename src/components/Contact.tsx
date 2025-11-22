import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    title: "Website Contact",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_vff6qlj",    // Your Service ID
        "template_6twp54l",   // Your Template ID
        formData,             // Form data
        "Dlv3sTt1GEqeR_uYe"   // Public Key
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you soon!",
          });
          setFormData({ name: "", email: "", message: "", title: "Website Contact" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          toast({
            title: "Error!",
            description: "Something went wrong. Please try again later.",
          });
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Get In <span className="text-gradient">Touch</span>
          </h2>

          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ delay: 0.2, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 md:p-12 space-y-6"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full hover-glow group"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
