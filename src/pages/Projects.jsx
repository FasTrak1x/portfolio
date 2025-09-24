// src/pages/Projects.jsx
import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "To-Do List App",
    description:
      "A simple and intuitive to-do list application built with React.",
    tags: ["JavaScript", "HTML", "CSS"],
    demo: "https://example.com/todo-app",
    repo: "https://github.com/FasTrak1x/todo-app",
  },
  {
    id: 2,
    title: "Fine-Tuning Qwen2-VL for LaTeX Code Generation",
    description:
      "A project focused on fine-tuning the Qwen2-VL model to generate LaTeX code from images of Mathematical Equations using LoRA and 4-bit Quantization.",
    tags: ["Python", "NLP", "CV"],
    demo: "https://colab.research.google.com/drive/1gggX4DHzHRnqvnpSBIy2h8XMZzv1vOdu?usp=sharing",
    repo: "https://github.com/FasTrak1x/ai-playground",
  },
  {
    id: 3,
    title: "Credit Card Fraud Detection",
    description:
      "A project focused on learning and detecting fraudulent credit card transactions using machine learning algorithms.",
    tags: ["Python", "Machine Learning", "Data Science"],
    demo: "https://colab.research.google.com/drive/1hq_Kt1CVxfaUkd9G49-c2WZvo0lLe2Mm?usp=sharing",
    repo: "https://github.com/FasTrak1x/credit-card-fraud-detection",
  },
  {
    id: 4,
    title: "MeMalDet HMM",
    description:
      "Deploying Hidden Markov Models (HMM) for effective malware detection and classification on the Memory Malware Detection (MeMalDet) framework.",
    tags: ["Python", "Deep Learning", "Cybersecurity"],
    demo: "https://colab.research.google.com/drive/1cqnifZM2L57-m63ZOvMl6OiBBLkkKBgV?usp=sharing",
    repo: "https://github.com/FasTrak1x/credit-card-fraud-detection",
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
