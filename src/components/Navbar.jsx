import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = ["About", "Projects", "Skills", "Experience", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-mono text-accent font-bold">
          &lt;Farhan.dev /&gt;
        </span>

        <ul className="hidden md:flex gap-8 font-mono text-sm">
          {links.map((link) => (
            <li key={link}>
              
              <a  href={`#${link.toLowerCase()}`}
                className="text-muted hover:text-accent transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-text text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 font-mono text-sm">
          {links.map((link) => (
            <li key={link}>
              
              <a  href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-3 border-b border-border text-muted hover:text-accent transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}