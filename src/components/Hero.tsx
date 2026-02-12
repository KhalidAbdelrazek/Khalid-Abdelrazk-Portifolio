import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Sparkles, Zap, Database, Code, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  function scrollToSection(arg0: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <section
      id="hero"
      className="h-screen w-full flex flex-col relative overflow-hidden"
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

      {/* Content Container - Takes full height */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10 flex flex-col h-full"
      >

        {/* Main Grid - Takes available space and centers content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12 lg:gap-8 w-full max-w-7xl mx-auto">

            {/* LEFT COLUMN: Personal Info */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 flex-1">
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
              <div className="space-y-4 max-w-2xl">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-primary text-sm md:text-base tracking-wider uppercase font-semibold"
                >
                  Senior Electronics & Communication Engineering Student | Aspiring Data Analytics
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Khalid Mohammed
                  <br />
                  <span className="text-gradient">Abdelrazk Ibrahim</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                >
                  Data Analyst with 1+ years of experience turning raw data into
                  actionable insights. Skilled in Python, SQL, Power BI, and data
                  storytelling.
                </motion.p>
              </div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="hover-glow group"
                  onClick={() => {
                    window.open("https://drive.google.com/file/d/1xTIMbHZeORU_mT_xuEVxSOE8_IPswiq8/view?usp=sharing", "_blank");
                  }}
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download CV
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="hover-glow"
                  onClick={() => {
                    window.open("https://github.com/KhalidAbdelrazek?tab=repositories", "_blank");
                  }}
                >
                  View Projects
                </Button>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Neon Slogan */}
            <div className="flex-1 w-full flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center perspective-1000">

                {/* Abstract Tech Background Elements */}
                <motion.div
                  className="absolute inset-0 z-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  {/* Floating Nodes */}
                  {[
                    { Icon: Database, top: "0%", left: "10%", delay: 0 },
                    { Icon: Code, top: "15%", right: "5%", delay: 1 },
                    { Icon: Cpu, bottom: "5%", left: "15%", delay: 2 },
                    { Icon: Zap, bottom: "20%", right: "0%", delay: 3 }
                  ].map(({ Icon, top, left, right, bottom, delay }, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-primary/20"
                      style={{ top, left, right, bottom }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.2, 0.5, 0.2],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 4,
                        delay: delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Icon className="w-12 h-12 lg:w-16 lg:h-16" />
                    </motion.div>
                  ))}

                  {/* Connecting Lines */}
                  <div className="absolute top-[20%] left-[20%] w-[80px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent rotate-45" />
                  <div className="absolute bottom-[20%] right-[20%] w-[100px] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent -rotate-12" />
                </motion.div>

                {/* Main Slogan Typography */}
                <motion.div
                  className="relative z-10 text-center"
                  initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  transition={{ duration: 1, type: "spring", bounce: 0.5 }}
                >
                  <div className="flex flex-col items-center gap-4">

                    {/* "FROM CONCEPT" */}
                    <motion.span
                      className="relative inline-block text-foreground/50 text-2xl md:text-3xl font-mono uppercase tracking-[0.2em]"
                      whileHover={{ color: "var(--primary)", letterSpacing: "0.3em" }}
                    >
                      From Concept
                    </motion.span>

                    {/* Divider */}
                    <span className="block w-1 h-12 bg-gradient-brand rounded-full mx-auto opacity-30"></span>

                    {/* "TO CREATION" */}
                    <motion.div className="relative">
                      {/* Glow Layer */}
                      <span
                        className="absolute inset-0 text-neon blur-md opacity-70 select-none pointer-events-none text-5xl md:text-6xl font-black italic"
                        aria-hidden="true"
                      >
                        TO CREATION
                      </span>

                      {/* 3D Text Layer */}
                      <span
                        className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-primary to-purple-500 text-3d animate-pulse text-5xl md:text-6xl font-black italic whitespace-nowrap block"
                        style={{
                          backgroundImage: "linear-gradient(to right, #22d3ee, #0ea5e9, #a855f7)",
                          WebkitBackgroundClip: "text",
                        }}
                      >
                        TO CREATION
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links - Centered at the bottom */}
        {/* pb-4 gives approx 16px bottom padding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex gap-6 items-center justify-center w-full pb-4 shrink-0"
        >
          <a
            href="https://github.com/khalidabdelrazek"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover-glow transition-all hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/khalid-abdelrazk-7719b32b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover-glow transition-all hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:khalidabdelrazk4@gmail.com"
            className="p-3 glass rounded-full hover-glow transition-all hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
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
