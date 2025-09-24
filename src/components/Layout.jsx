// src/components/Layout.jsx
import React from "react";
import Sidebar from "./Sidebar.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[hsl(220,13%,9%)] text-white">
      <Sidebar />
      {/* match your rail width (240px) */}
      <main className="ml-[240px] relative">
        {/* hairline divider at the rail edge */}
        <div className="pointer-events-none fixed left-[240px] top-0 bottom-0 w-px bg-[#1c1c1c]" />
        {children}
      </main>
    </div>
  );
}
