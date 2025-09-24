import React, { useEffect, useState } from "react";

const ROLES = [
  "web developer",
  "software developer",
  "AI specialist",
  "DevOps engineer",
  "programmer",
];

export default function RoleCycler() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % ROLES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="role-cycler">
      <span className="role-cycler-text">{ROLES[idx]}</span>
    </span>
  );
}
