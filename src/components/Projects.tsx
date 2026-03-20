"use client";

import { useEffect, useState } from "react";

type Project = {
  id: number;
  name: string;
  description: string;
  tech: string[];
  link: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching projects", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{textAlign: "center", padding: "4rem"}}>Carregando projetos...</div>;

  return (
    <section id="projects" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <h2 style={{ fontSize: "2.5rem", marginBottom: "3rem", fontWeight: 700 }}>
          Projetos em <span style={{ color: "var(--accent)" }}>Destaque</span>
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}>
          {projects.map((proj) => (
            <div key={proj.id} style={{
              background: "var(--bg-primary)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "2rem",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "var(--glass-shadow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{proj.name}</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                {proj.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {proj.tech.map((t) => (
                  <span key={t} style={{
                    fontSize: "0.85rem",
                    background: "rgba(37, 99, 235, 0.1)",
                    color: "var(--accent)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "12px",
                    fontWeight: 500
                  }}>
                    {t}
                  </span>
                ))}
              </div>
              <a href={proj.link} style={{
                color: "var(--text-primary)",
                fontWeight: 600,
                textDecoration: "underline",
                textUnderlineOffset: "4px"
              }}>
                Ver Código &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
