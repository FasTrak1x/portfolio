// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";

const skills = [
  "🔧 HTML, CSS, JavaScript",
  "⚛️ React",
  "🐍 Python",
  "🧠 C++",
  "🧱 Java",
  "🗄️ PostgreSQL",
  "💻 Verilog",
  "☁️ DevOps (in progress)",
  "🔐 Cybersecurity (in progress)",
];

export default function About() {
  return (
    <section className="relative w-[min(980px,calc(100%-220px))] mx-auto py-20">
      {/* decorative <h2> */}
      <div className="relative mb-6">
        <span className="absolute -top-6 -left-8 text-[#6e6e6e] italic text-sm select-none">
          &lt;h2&gt;
        </span>
        <span className="absolute -top-6 -right-8 text-[#6e6e6e] italic text-sm select-none">
          &lt;/h2&gt;
        </span>
        <h2 className="text-[hsl(174,100%,42%)] text-4xl sm:text-5xl font-extrabold">
          Me, Myself, and I
        </h2>
      </div>

      {/* two-column: paragraph + skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* paragraph block with <p>…</p> */}
        <div className="relative">
          <span className="absolute -top-5 -left-7 text-[#6e6e6e] italic text-sm select-none">
            &lt;p&gt;
          </span>
          <span className="absolute -left-7 -bottom-5 text-[#6e6e6e] italic text-sm select-none">
            &lt;/p&gt;
          </span>
          <p className="text-[#c6cbcf] leading-8 text-[1.02rem]">
            I’m an Artificial Intelligence major who is fascinated by exploring
            every corner of technology I can get my hands on. While AI is my
            core focus, I’ve developed a strong interest in front-end
            development, software engineering, cybersecurity, and DevOps. What
            excites me most is the opportunity to learn quickly, adapt to new
            tools, and apply that knowledge to create practical, meaningful
            solutions. My philosophy has always been to embrace challenges and
            view them as opportunities for growth.
            <br />
            <br />
            <br /> When it comes to Computer Science, the iceberg goes deep, and
            I’m eager to explore as much of it as I can. If I don't know enough
            about something, I dive in headfirst, learn what I need to, and get
            the job done. This mindset has helped me tackle a variety of
            projects. I believe that with determination and a willingness to
            learn, I can overcome any obstacle and deliver results that make a
            difference.
          </p>
        </div>

        {/* skills grid with animated cards */}
        <div>
          <h3 className="mb-3 text-[#9aa0a6] uppercase tracking-[.22em] text-xs font-semibold">
            Languages &amp; Tools I’m working with:
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((item) => (
              <li
                key={item}
                className="skill-card bg-[#151515] border border-[#262626] rounded-lg px-4 py-3 text-[#e9ecef]
                           transition will-change-transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,255,216,.14)]
                           hover:border-[hsl(174,100%,42%)]"
              >
                <span className="inline-block border-l-2 border-[hsl(174,100%,42%)] pl-3">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              to="/projects"
              className="relative inline-flex items-center justify-center px-6 py-3 border-2 rounded-md 
                         border-[hsl(174,100%,42%)] text-[hsl(174,100%,42%)] font-extrabold tracking-[.12em] text-sm
                         hover:bg-[hsl(174,100%,42%)] hover:text-[hsl(220,13%,9%)] transition"
            >
              See Projects
              <span className="absolute -right-1.5 -bottom-1.5 w-2.5 h-2.5 border-2 border-[hsl(174,100%,42%)] border-l-0 border-t-0 rounded-[2px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
