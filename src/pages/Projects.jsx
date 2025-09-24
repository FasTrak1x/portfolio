// src/pages/Projects.jsx
import React from "react";
import { Github, Code2, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "My developer portfolio built with React + Vite + Tailwind and animated accents.",
    tags: ["React", "Vite", "Tailwind"],
    demo: "https://example.com/portfolio",
    repo: "https://github.com/FasTrak1x/portfolio",
  },
  {
    id: 2,
    title: "AI Playground",
    description:
      "Small playground to test LLM prompts and integrate basic tools.",
    tags: ["Node", "OpenAI", "Express"],
    demo: "https://example.com/ai-playground",
    repo: "https://github.com/FasTrak1x/ai-playground",
  },
  {
    id: 3,
    title: "DevOps Lab",
    description: "Dockerized services with Nginx reverse proxy and CI basics.",
    tags: ["Docker", "Nginx", "CI"],
    demo: "https://example.com/devops-lab",
    repo: "https://github.com/FasTrak1x/devops-lab",
  },
];

export default function Projects() {
  return (
    <section className="w-[min(980px,calc(100%-220px))] mx-auto py-20">
      {/* decorative <h2> */}
      <div className="relative mb-8">
        <span className="absolute -top-6 -left-8 text-[#6e6e6e] italic text-sm select-none">
          &lt;h2&gt;
        </span>
        <span className="absolute -top-6 -right-8 text-[#6e6e6e] italic text-sm select-none">
          &lt;/h2&gt;
        </span>

        <h2 className="text-[hsl(174,100%,42%)] text-4xl sm:text-5xl font-extrabold">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article
            key={p.id}
            className="project-card bg-[#151515] border border-[#262626] rounded-xl p-5 transition
                       hover:-translate-y-1 hover:border-[hsl(174,100%,42%)]
                       hover:shadow-[0_10px_30px_rgba(0,255,216,.14)]"
          >
            <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
            <p className="text-[#c6cbcf] mb-3">{p.description}</p>

            <ul className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="text-[12px] uppercase tracking-wider px-2 py-[3px] rounded-md
                             border border-[hsl(174,100%,42%)] text-[hsl(174,100%,42%)]"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border-2
                           border-[hsl(174,100%,42%)] text-[hsl(174,100%,42%)] font-bold text-xs
                           hover:bg-[hsl(174,100%,42%)] hover:text-[hsl(220,13%,9%)] transition"
                title="Live / Demo"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>

              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border-2
                           border-[hsl(174,100%,42%)] text-[hsl(174,100%,42%)] font-bold text-xs
                           hover:bg-[hsl(174,100%,42%)] hover:text-[hsl(220,13%,9%)] transition"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
                Repo
              </a>

              {/* optional: code link if different from repo */}
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border-2
                           border-[#2d88ff] text-[#2d88ff] font-bold text-xs
                           hover:bg-[#2d88ff] hover:text-[#0b1220] transition"
                title="Source Code"
              >
                <Code2 className="w-4 h-4" />
                Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
