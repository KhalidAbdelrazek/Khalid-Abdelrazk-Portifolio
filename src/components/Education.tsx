const studyAreas = [
  "Signal Processing",
  "Embedded Systems",
  "Data Networks",
  "Digital Communications",
  "Wireless Communications",
  "Network Security",
  "RF Engineering",
];

const Education = () => {
  return (
    <article className="rounded-[28px] bg-white p-6 shadow-[0_10px_30px_rgba(29,36,48,0.04)] sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Bachelor’s degree</p>
      <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">Electronics & Communications Engineering</h3>
      <p className="mt-2 text-sm text-muted-foreground">Faculty of Engineering · BNS University, Egypt</p>
      <div className="mt-6 flex items-end justify-between">
        <p className="text-sm text-muted-foreground">GPA 3.3 / 4.0</p>
        <p className="text-3xl font-semibold">2026</p>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {studyAreas.map((area) => (
          <li key={area} className="rounded-full bg-[#F2F4F7] px-3 py-1 text-xs text-[#344054]">
            {area}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Education;
