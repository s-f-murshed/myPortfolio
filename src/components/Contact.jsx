import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const links = [
  { label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com", icon: FiMail },
  { label: "GitHub", value: "github.com/yourusername", href: "https://github.com/yourusername", icon: FiGithub },
  { label: "LinkedIn", value: "linkedin.com/in/yourusername", href: "https://linkedin.com/in/yourusername", icon: FiLinkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-accent mb-2">$ ./contact.sh</p>
      <h2 className="font-mono text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="text-muted mb-10 max-w-xl">
        Open to opportunities, collaborations, or just talking about AI/ML
        and web dev. Reach out through any of these:
      </p>

      <div className="flex flex-col gap-4 max-w-md">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            
             <a key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 bg-surface border border-border rounded-lg px-5 py-4 hover:border-accent transition-colors group"
            >
              <Icon className="text-accent text-xl shrink-0" />
              <div className="flex flex-col">
                <span className="font-mono text-muted text-xs">{link.label}</span>
                <span className="font-mono text-text group-hover:text-accent transition-colors">
                  {link.value}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}