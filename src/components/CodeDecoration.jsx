// src/components/CodeDecoration.jsx
import React from "react";

export default function CodeDecoration() {
  const a = [
    "const developer = {",
    "  name: 'Wasil',",
    "  skills: ['React','JS','AI'],",
    "  passion: 'building things'",
    "};",
  ];
  const b = [
    "function createAwesome(){",
    "  return code + creativity",
    "}",
    "// shipping…",
  ];

  return (
    <div className="absolute inset-0 pointer-events-none opacity-10 text-[13px] text-[#9aa0a6] leading-5">
      <div className="absolute top-20 left-20">
        {a.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
      <div className="absolute top-28 right-24">
        {b.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
      <div className="absolute bottom-16 left-24">
        {`<div>`}
        <br />
        {`  <Creativity />`}
        <br />
        {`</div>`}
      </div>
    </div>
  );
}
