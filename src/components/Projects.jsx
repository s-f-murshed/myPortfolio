import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const categories = ["All", "AI/ML", "Full-Stack"];
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-accent mb-2">$ ls projects/</p>
      <h2 className="font-mono text-3xl font-bold mb-8">Projects</h2>

      <div className="flex gap-3 mb-10 font-mono text-sm">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded border transition-colors ${
              active === cat
                ? "bg-accent text-bg border-accent"
                : "border-border text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((project) => (
          <div
            key={project.title}
            className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors group"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-mono text-lg font-bold text-text">
                {project.title}
              </h3>
              <span className="text-xs font-mono text-accent border border-accent-dim px-2 py-1 rounded">
                {project.category}
              </span>
            </div>
            <p className="text-muted text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-muted bg-bg border border-border px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 font-mono text-sm">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                  GitHub →
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                  Live →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}