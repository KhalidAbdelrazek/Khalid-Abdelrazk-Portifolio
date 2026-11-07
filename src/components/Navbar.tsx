import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "About", id: "about", num: "01" },
  { name: "Study", id: "education", num: "02" },
  { name: "Credentials", id: "certifications", num: "03" },
  { name: "Skills", id: "skills", num: "04" },
  { name: "Experience", id: "experience", num: "05" },
  { name: "Work", id: "projects", num: "06" },
  { name: "Contact", id: "contact", num: "07" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [clock, setClock] = useState("");
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const nodes = ["hero", ...navLinks.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const tick = () => {
      setClock(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Cairo",
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23",
        }).format(new Date()),
      );
    };
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const goTo = (id: string) => {
    setMenuOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");
  const themeLabel = resolvedTheme === "dark" ? "Day" : "Night";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] flex h-14 items-center justify-between border-b border-border bg-background px-5 lg:hidden">
        <button type="button" onClick={() => goTo("hero")} className="font-display text-2xl leading-none">
          Abdelrazk
        </button>
        <div className="flex items-center gap-4">
          <button type="button" onClick={toggleTheme} className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {themeLabel}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="font-mono text-[11px] uppercase tracking-[0.16em]"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "Close" : "Index"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="index"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-14 z-[60] flex flex-col overflow-y-auto bg-background px-6 py-8 lg:hidden"
            aria-label="Sections"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                type="button"
                onClick={() => goTo(link.id)}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.04 * index, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-baseline gap-4 border-b border-border py-3 text-left"
              >
                <span className="font-mono text-[11px] text-primary">{link.num}</span>
                <span className="font-display text-4xl">{link.name}</span>
              </motion.button>
            ))}
            <p className="mt-auto pt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Cairo {clock}
            </p>
          </motion.nav>
        )}
      </AnimatePresence>

      <aside className="fixed bottom-0 left-0 top-0 z-[60] hidden w-[15rem] flex-col border-r border-border bg-background px-6 py-8 lg:flex">
        <button type="button" onClick={() => goTo("hero")} className="text-left">
          <span className="block font-display text-[1.85rem] leading-none">Abdelrazk</span>
          <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Data · Cairo
          </span>
        </button>

        <nav className="mt-12 flex flex-col gap-1" aria-label="Sections">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => goTo(link.id)}
                className={`group flex items-baseline gap-3 py-1.5 text-left text-sm transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                <span className={`w-5 font-mono text-[10px] ${isActive ? "text-primary" : ""}`}>{link.num}</span>
                <span className="relative">
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="index-line"
                      className="absolute -bottom-0.5 left-0 h-px w-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto space-y-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
          >
            {themeLabel} mode
          </button>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Cairo {clock}</p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
