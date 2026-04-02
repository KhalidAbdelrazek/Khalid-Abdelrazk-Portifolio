import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socials = [
    { href: "https://github.com/khalidabdelrazek", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/khalid-abdelrazk-7719b32b3/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:khalidabdelrazk4@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="py-10 border-t border-border/40 relative overflow-hidden">
      {/* Subtle gradient top bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-gradient mb-1">Khalid Abdelrazk</p>
            <p className="text-muted-foreground text-sm">Data Analyst · Flutter Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 glass rounded-full hover-glow transition-all"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center gap-1 justify-center md:justify-end">
              © 2026 Khalid Abdelrazk.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
