type SectionHeadingProps = {
  index: string;
  title: string;
  lede?: string;
};

const SectionHeading = ({ index, title, lede }: SectionHeadingProps) => (
  <header className="mb-10 grid items-end gap-5 border-b border-border pb-5 md:mb-14 md:grid-cols-[minmax(0,1fr)_17rem]">
    <div>
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">{index}</p>
      <h2 className="text-4xl leading-[0.95] sm:text-5xl md:text-[3.5rem]">{title}</h2>
    </div>
    {lede ? (
      <p className="max-w-sm text-sm leading-6 text-muted-foreground md:justify-self-end md:pb-1 md:text-right">
        {lede}
      </p>
    ) : null}
  </header>
);

export default SectionHeading;
