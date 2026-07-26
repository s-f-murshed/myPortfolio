import {
  SiPython, SiJavascript, SiCplusplus, SiPostgresql, SiMongodb,
  SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiPytorch,
  SiReact, SiVite, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiSocketdotio,
  SiGit, SiGithub, SiLinux, SiSqlite,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";

const iconMap = {
  Python: SiPython,
  JavaScript: SiJavascript,
  "C/C++": SiCplusplus,
  SQL: SiSqlite,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  "scikit-learn": SiScikitlearn,
  "TensorFlow/PyTorch": SiTensorflow,
  React: SiReact,
  Vite: SiVite,
  "Tailwind CSS": SiTailwindcss,
  "HTML/CSS": SiHtml5,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "Socket.io": SiSocketdotio,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  "Git/GitHub": SiGithub,
  "Linux (Ubuntu/Kali)": SiLinux,
};

const skillGroups = [
  { category: "Languages", items: ["Python", "JavaScript", "C/C++", "SQL"] },
  { category: "AI/ML", items: ["NumPy", "Pandas", "scikit-learn", "TensorFlow/PyTorch", "Prolog"] },
  { category: "Frontend", items: ["React", "Vite", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs", "Socket.io"] },
  { category: "Databases", items: ["MongoDB", "PostgreSQL"] },
  { category: "Tools & OS", items: ["Git/GitHub", "Linux (Ubuntu/Kali)", "VS Code"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-accent mb-2">$ cat skills.json</p>
      <h2 className="font-mono text-3xl font-bold mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div key={group.category} className="bg-surface border border-border rounded-lg p-5">
            <h3 className="font-mono text-accent text-sm mb-3">
              // {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => {
                const Icon = iconMap[item] || FiCode;
                return (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-sm font-mono text-text bg-bg border border-border px-3 py-1 rounded hover:border-accent hover:text-accent transition-colors"
                  >
                    <Icon className="text-xs" />
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}