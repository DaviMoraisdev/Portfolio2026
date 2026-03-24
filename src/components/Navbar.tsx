"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "Sobre" },
    { href: "#skills", label: "Habilidades" },
    { href: "#experience", label: "Experiência" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <nav className="glass" style={{
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 100,
      padding: "1rem 0"
    }}>
      <div className="container" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>
          Davi Morais <span style={{ color: "var(--accent)" }}>Engenheiro de Software</span>
        </div>

        {/* Desktop navigation */}
        <div className="nav-desktop" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={{ fontWeight: 500 }}>{link.label}</a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile hamburger button */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          style={{
            display: "none",
            background: "transparent",
            border: "1px solid var(--border)",
            color: "var(--text-primary)",
            borderRadius: "6px",
            padding: "0.4rem 0.6rem",
            cursor: "pointer",
            fontSize: "1.25rem",
            lineHeight: 1,
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="nav-mobile-menu" style={{
          borderTop: "1px solid var(--border)",
          padding: "1rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}>
          <div className="container" style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontWeight: 500,
                  padding: "0.75rem 0",
                  borderBottom: "1px solid var(--border)",
                  display: "block",
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ paddingTop: "1rem" }}>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
