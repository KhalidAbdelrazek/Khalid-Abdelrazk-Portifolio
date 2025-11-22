import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-gradient mb-2">
              Khalid Abdelrazk
            </p>
            <p className="text-muted-foreground text-sm">
              Data Analyst
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/khalidabdelrazek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover-glow transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/khalid-abdelrazk-7719b32b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover-glow transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:khalidabdelrazk4@gmail.com"
              className="p-3 glass rounded-full hover-glow transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © 2024 Khalid Abdelrazk. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
