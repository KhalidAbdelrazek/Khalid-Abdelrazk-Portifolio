const links = [
  { href: "https://github.com/khalidabdelrazek", label: "GitHub" },
  { href: "https://www.linkedin.com/in/khalid-abdelrazk-7719b32b3/", label: "LinkedIn" },
  { href: "mailto:khalidabdelrazk4@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="frame flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-3xl leading-none">Khalid Abdelrazk</p>
          <p className="mt-2 text-sm text-muted-foreground">Data analyst · Data engineer · Cairo</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-sm text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">© 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
