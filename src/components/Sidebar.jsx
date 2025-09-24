// src/components/Sidebar.jsx
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Linkedin, Github, Mail } from "lucide-react";

const nav = [
  { id: "home", label: "Home", to: "/" },
  { id: "about", label: "About", to: "/about" },
  { id: "projects", label: "Projects", to: "/projects" },
  { id: "contact", label: "Contact", to: "/contact" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-[240px] bg-[#0f0f0f] border-r border-[#1c1c1c] grid grid-rows-[auto,1fr,auto] gap-4 p-4">
      {/* Brand tile */}
      <Link
        to="/"
        className="grid grid-cols-[60px,1fr] items-center gap-3 p-3 bg-[#0b0b0b] border border-[#1c1c1c] rounded-xl"
      >
        <div
          className="grid place-items-center w-[60px] h-[60px] bg-[#101010] border border-[#1c1c1c] rounded-lg font-black text-3xl text-white"
          style={{ textShadow: "-3px 2px #00ffd8, 3px -2px #ff0057" }}
        >
          W
        </div>
        <div>
          <p className="font-extrabold leading-none text-[#e9ecef]">Wasil</p>
          <p className="text-xs text-[#cfd3d6] opacity-90 mt-[2px]">
            AI Specialist
          </p>
        </div>
      </Link>

      {/* Nav */}
      <nav className="mt-2">
        <ul>
          {nav.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.to}
                end
                className={({ isActive }) =>
                  [
                    "block px-4 py-3 text-sm border-t border-[#1c1c1c] transition",
                    isActive
                      ? "text-[#00ffd8] relative"
                      : "text-white/85 hover:text-[#00ffd8]",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {item.label}
                    {isActive && (
                      <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#00ffd8] rounded-full" />
                    )}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Socials */}
      <div className="flex items-center gap-3 pt-3 border-t border-[#1c1c1c] text-[#9aa0a6]">
        <a
          href="https://linkedin.com/in/wasil-malik"
          target="_blank"
          rel="noreferrer"
          className="inline-flex p-2 rounded-md hover:text-[#00ffd8] hover:bg-white/5"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="https://github.com/FasTrak1x"
          target="_blank"
          rel="noreferrer"
          className="inline-flex p-2 rounded-md hover:text-[#00ffd8] hover:bg-white/5"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="mailto:wasilfawad.malik@outlook.com"
          className="inline-flex p-2 rounded-md hover:text-[#00ffd8] hover:bg-white/5"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
}
