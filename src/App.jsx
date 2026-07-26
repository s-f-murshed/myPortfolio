import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function Footer() {
  return (
    <footer className="py-8 px-6 text-center border-t border-border">
      <p className="font-mono text-muted text-sm">
        Built with <span className="text-accent">React</span> +{" "}
        <span className="text-accent">Tailwind</span> · © {new Date().getFullYear()} Farhan
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}