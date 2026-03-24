const skillCategories = [
  {
    title: "Back-End",
    skills: ["Node.js", "Express", "Python", "FastAPI", "Java", "Spring Boot"],
  },
  {
    title: "Banco de Dados",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Ferramentas",
    skills: ["Docker", "Git", "GitHub Actions", "Linux"],
  },
  {
    title: "Conceitos & Práticas",
    skills: ["REST APIs", "JWT", "Clean Architecture", "SOLID", "TDD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 style={{ fontSize: "2.5rem", marginBottom: "3rem", fontWeight: 700 }}>
          Habilidades &amp; <span style={{ color: "var(--accent)" }}>Tecnologias</span>
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
        }}>
          {skillCategories.map((category) => (
            <div key={category.title} style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "1.5rem",
            }}>
              <h3 style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--accent)",
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}>
                {category.title}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {category.skills.map((skill) => (
                  <span key={skill} style={{
                    fontSize: "0.875rem",
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "6px",
                    fontWeight: 500,
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
