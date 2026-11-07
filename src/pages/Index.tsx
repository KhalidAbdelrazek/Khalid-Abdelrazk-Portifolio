import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Grain from "@/components/Grain";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import SoftSkills from "@/components/SoftSkills";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Grain />
        <ScrollProgress />
        <Navbar />
        <div className="pt-14 lg:pl-[15rem] lg:pt-0">
          <main>
            <Hero />
            <About />
            <Education />
            <Certifications />
            <SoftSkills />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
