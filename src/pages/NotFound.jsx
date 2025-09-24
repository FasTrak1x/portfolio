// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] grid place-items-center">
      <div className="text-center">
        <h1 className="text-6xl font-black mb-3">404</h1>
        <p className="text-[#c6cbcf] mb-6">Haven't gotten around to coding this yet...</p>
        <Link
          to="/"
          className="inline-block px-5 py-3 border-2 rounded-md 
                     border-[hsl(174,100%,42%)] text-[hsl(174,100%,42%)] font-extrabold tracking-[.12em] text-sm
                     hover:bg-[hsl(174,100%,42%)] hover:text-[hsl(220,13%,9%)] transition"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
