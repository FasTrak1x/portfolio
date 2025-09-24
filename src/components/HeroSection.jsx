// src/components/HeroSection.jsx
import React, { useEffect, useRef, useState } from "react";
import CodeDecoration from "./CodeDecoration.jsx";
import { Link } from "react-router-dom";

const ROLES = [
  "AI specialist",
  "software developer",
  "web developer",
  "DevOps engineer",
  "programmer",
];

export default function HeroSection() {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);
  const timeoutRef = useRef();

  useEffect(() => {
    // simple fade-out/fade-in cycle
    timeoutRef.current = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        setI((prev) => (prev + 1) % ROLES.length);
        setShow(true);
      }, 180); // match transition
    }, 2200);
    return () => clearTimeout(timeoutRef.current);
  }, [i]);

  return (
    <section className="relative min-h-[88vh] flex items-center hero">
      <CodeDecoration />

      <div className="w-[min(980px,calc(100%-220px))] mx-auto py-20 code code--h1">
        <h1 className="text-white font-black leading-[1.02] tracking-[.002em] text-[clamp(3.4rem,6.2vw+.2rem,5.8rem)]">
          Hi,
          <br />
          I’m{" "}
          <span
            className="inline-block text-white"
            style={{ textShadow: "-6px 3px #00ffd8, 6px -3px #ff0057" }}
          >
            W
          </span>
          asil,
          <br />
          <span
            className={`inline-block transition-opacity duration-200 ${
              show ? "opacity-100" : "opacity-0"
            }`}
          >
            {ROLES[i]}
          </span>
        </h1>

        {/* subtitle with <p> tags */}
        <div className="relative mt-4 code code--p-row">
          <p className="uppercase tracking-[.28em] text-[0.78rem] font-semibold text-[#8f979d]">
            Turning curiosity into code: AI, software, front-end, and beyond.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <Link
            to="/contact"
            className="relative inline-flex items-center justify-center px-6 py-3 border-2 rounded-md 
           border-[hsl(174,100%,42%)] text-[hsl(174,100%,42%)] font-extrabold tracking-[.12em] text-sm
           hover:bg-[hsl(174,100%,42%)] hover:text-[hsl(220,13%,9%)] transition"
          >
            Contact me!
            <span className="absolute -right-1.5 -bottom-1.5 w-2.5 h-2.5 border-2 border-[hsl(174,100%,42%)] border-l-0 border-t-0 rounded-[2px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
