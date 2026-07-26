const timeline = [
  {
    period: "Current",
    title: "B.Tech — AI/ML Engineering",
    subtitle: "4th Semester",
    details: [
      "Discrete Mathematics",
      "Artificial Intelligence",
      "Programming-heavy project coursework",
    ],
  },
  // Add earlier semesters/coursework here if you want a fuller timeline, e.g.:
  // {
  //   period: "Semester 3",
  //   title: "...",
  //   subtitle: "...",
  //   details: ["...", "..."],
  // },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-accent mb-2">$ git log --education</p>
      <h2 className="font-mono text-3xl font-bold mb-10">Education</h2>

      <div className="relative border-l border-border ml-3">
        {timeline.map((item) => (
          <div key={item.title} className="mb-10 ml-8 relative">
            <span className="absolute -left-[38px] top-1 w-3 h-3 bg-accent rounded-full border-4 border-bg" />
            <p className="font-mono text-accent text-sm mb-1">{item.period}</p>
            <h3 className="font-mono text-lg font-bold text-text">
              {item.title}
            </h3>
            <p className="text-muted text-sm mb-3">{item.subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {item.details.map((d) => (
                <span
                  key={d}
                  className="text-xs font-mono text-muted bg-surface border border-border px-2 py-1 rounded"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}