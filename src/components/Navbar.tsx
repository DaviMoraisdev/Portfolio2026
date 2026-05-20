"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";
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
    <nav className="site-nav glass">
      <div className="container nav-inner">
        <a className="brand" href="#about" aria-label="Voltar ao inicio">
          <strong>{profile.name}</strong>
          <span>{profile.role}</span>
        </a>

        <div className="nav-desktop" aria-label="Navegacao principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <ThemeToggle />
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="nav-mobile-menu" id="mobile-menu">
          <div className="container mobile-menu-inner">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mobile-theme">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .site-nav {
          left: 0;
          padding: 0.85rem 0;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 100;
        }

        .nav-inner {
          align-items: center;
          display: flex;
          justify-content: space-between;
        }

        .brand {
          display: grid;
          gap: 0.15rem;
          min-width: 0;
        }

        .brand strong {
          font-size: 1rem;
          line-height: 1;
        }

        .brand span {
          color: var(--accent);
          font-size: 0.82rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .nav-desktop {
          align-items: center;
          display: flex;
          gap: 1.25rem;
        }

        .nav-desktop a,
        .nav-mobile-menu a {
          color: var(--text-secondary);
          font-weight: 750;
          transition: color 0.2s ease;
        }

        .nav-desktop a:hover,
        .nav-mobile-menu a:hover {
          color: var(--accent);
        }

        .nav-mobile-toggle {
          align-items: center;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          cursor: pointer;
          display: none;
          height: 42px;
          justify-content: center;
          width: 42px;
        }

        .nav-mobile-menu {
          border-top: 1px solid var(--border);
          margin-top: 0.85rem;
          padding: 0.5rem 0 0.25rem;
        }

        .mobile-menu-inner {
          display: grid;
          gap: 0;
        }

        .nav-mobile-menu a {
          border-bottom: 1px solid var(--border);
          display: block;
          padding: 0.85rem 0;
        }

        .mobile-theme {
          padding-top: 0.85rem;
        }

        @media (max-width: 700px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }

          .brand span {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
