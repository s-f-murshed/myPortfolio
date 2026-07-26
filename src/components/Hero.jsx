import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
  const roles = ["AI/ML Engineer", "Full-Stack Developer", "Problem Solver"];
  const typed = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto"
    >
      <p className="font-mono text-accent mb-2">$ whoami</p>
      <h1 className="font-mono text-4xl md:text-6xl font-bold text-text mb-4">
        Suf Farhan Murshed
      </h1>
      <h2 className="font-mono text-xl md:text-2xl text-muted h-8">
        {typed}
        <span className="text-accent animate-pulse">_</span>
      </h2>
      <p className="mt-6 max-w-xl text-muted">
        Building things at the intersection of AI/ML and full-stack web
        development. Currently studying and shipping real products.
      </p>

      < a href="#projects"
      className="mt-8 w-fit font-mono px-6 py-3 border border-accent text-accent rounded hover:bg-accent hover:text-bg transition-colors"
      >
      view_projects()
    </a>
    </section >
  );
}