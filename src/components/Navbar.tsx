import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { scrollTo } from "@/components/design/bits";

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Resume", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const leftLinks = navLinks.slice(0, 3);
const rightLinks = navLinks.slice(3);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const nodes = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const goTo = (id: string) => {
    setMenuOpen(false);
    window.setTimeout(() => scrollTo(id), 40);
  };

  const LinkButton = ({ link }: { link: (typeof navLinks)[number] }) => {
    const isActive = active === link.id;
    return (
      <button
        type="button"
        onClick={() => goTo(link.id)}
        className={`rounded-full px-5 py-3 text-[15px] transition-colors duration-300 ${
          isActive ? "bg-primary font-semibold text-primary-foreground" : "font-medium text-white/90 hover:bg-white/10"
        }`}
        aria-current={isActive ? "true" : undefined}
      >
        {link.name}
      </button>
    );
  };

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-[70] flex justify-center px-3">
        <div className="flex h-[68px] w-full max-w-[1240px] items-center justify-between rounded-full border border-white/10 bg-[#171717] px-2 text-white shadow-[0_16px_40px_rgba(23,23,23,0.18)] lg:hidden">
          <button type="button" onClick={() => goTo("hero")} className="flex items-center gap-2 pl-3" aria-label="Back to top">
            <Mark />
            <span className="text-lg font-semibold tracking-tight">Abdelrazk</span>
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-full px-5 py-3 text-sm font-semibold"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        <nav
          className="hidden h-[78px] w-full max-w-[1240px] items-center justify-between rounded-full border border-white/10 bg-[#171717] px-2.5 text-white shadow-[0_16px_40px_rgba(23,23,23,0.16)] lg:flex"
          aria-label="Sections"
        >
          <div className="flex items-center">
            {leftLinks.map((link) => (
              <LinkButton key={link.id} link={link} />
            ))}
          </div>
          <button type="button" onClick={() => goTo("hero")} className="flex items-center gap-2.5 px-4" aria-label="Khalid Abdelrazk, back to top">
            <Mark />
            <span className="text-xl font-semibold tracking-tight">ABDELRAZK</span>
          </button>
          <div className="flex items-center">
            {rightLinks.map((link) => (
              <LinkButton key={link.id} link={link} />
            ))}
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-3 top-[84px] z-[70] rounded-3xl bg-[#171717] p-3 text-white lg:hidden"
            aria-label="Sections"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => goTo(link.id)}
                className={`block w-full rounded-2xl px-4 py-3 text-left text-lg ${
                  active === link.id ? "bg-primary font-semibold" : "font-medium"
                }`}
              >
                {link.name}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

const Mark = () => (
  <span className="grid size-9 place-items-center rounded-full bg-primary text-sm font-bold text-white">KA</span>
);

export default Navbar;
