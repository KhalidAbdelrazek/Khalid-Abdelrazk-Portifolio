import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-50 animate-pulse" />
            <motion.img
              src={profileImage}
              alt="Khalid Abdelrazk"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/50 shadow-2xl relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Text Content */}
          <div className="space-y-4 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-primary text-sm md:text-base tracking-wider uppercase"
            >
              Senior Data Analytics Engineering Student
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            >
              Khalid Mohammed
              <br />
              <span className="text-gradient">Abdelrazk Ibrahim</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Data Analyst with 1+ years of experience turning raw data into
              actionable insights. Skilled in Python, SQL, Power BI, and data
              storytelling.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" className="hover-glow group" >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" className="hover-glow">
              View Projects
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-4 items-center"
          >
            <a
              href="https://github.com/khalidabdelrazek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover-glow transition-all hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/khalid-abdelrazk-7719b32b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover-glow transition-all hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:khalidabdelrazk4@gmail.com"
              className="p-3 glass rounded-full hover-glow transition-all hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div
        className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
};

export default Hero;
