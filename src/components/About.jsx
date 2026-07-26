export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-accent mb-2">$ cat about.md</p>
      <h2 className="font-mono text-3xl font-bold mb-8">About</h2>

      <div className="bg-surface border border-border rounded-lg p-8">
        <p className="font-mono text-lg text-text leading-relaxed">
          I build things — from AI/ML models in the classroom to a real
          production app powering my own pizza shop.{" "}
          <span className="text-accent">Currently: 4th semester,</span>{" "}
          shipping projects that actually get used.
        </p>
      </div>
    </section>
  );
}