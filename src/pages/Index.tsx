import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Results from "@/components/Results";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { AccentHeading } from "@/components/design/bits";

const Index = () => {
  return (
    <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Experience />
          <About />
          <Projects />
          <Results />
          <Skills />
          <section id="education" className="scroll-mt-28 bg-[#F3F5F8] py-16 sm:py-20">
            <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
              <AccentHeading before="Study &" accent="Credentials" />
              <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <Education />
                <Certifications />
              </div>
            </div>
          </section>
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
