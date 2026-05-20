"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = storedTheme ?? (prefersDark ? "dark" : "light");

    document.documentElement.setAttribute("data-theme", nextTheme);
    setIsDark(nextTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    setIsDark(nextTheme === "dark");
  };

  return (
    <>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
        title={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
        type="button"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      <style>{`
        .theme-toggle {
          align-items: center;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          cursor: pointer;
          display: inline-flex;
          height: 42px;
          justify-content: center;
          transition: transform 0.2s ease, border-color 0.2s ease;
          width: 42px;
        }

        .theme-toggle:hover {
          border-color: var(--accent);
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
}
