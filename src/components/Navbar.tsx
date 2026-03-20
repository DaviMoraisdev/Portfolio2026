"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
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
          Davi <span style={{ color: "var(--accent)" }}>.Dev</span>
        </div>
        
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <a href="#about" style={{ fontWeight: 500 }}>Sobre</a>
          <a href="#projects" style={{ fontWeight: 500 }}>Projetos</a>
          <a href="#contact" style={{ fontWeight: 500 }}>Contato</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
