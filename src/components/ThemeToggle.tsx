"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.getAttribute("data-theme") === "dark"
      : true
  );

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "transparent",
        border: "1px solid var(--border)",
        color: "var(--text-primary)",
        padding: "0.5rem 1rem",
        borderRadius: "20px",
        cursor: "pointer",
        transition: "all 0.2s ease"
      }}
    >
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
