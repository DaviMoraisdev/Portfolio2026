const experiences = [
  {
    type: "education",
    title: "Engenharia de Software",
    organization: "Universidade",
    period: "2023 – Cursando",
    description:
      "Graduação com foco em desenvolvimento de software, arquitetura de sistemas, estruturas de dados, algoritmos e engenharia de requisitos.",
  },
  {
    type: "experience",
    title: "Desenvolvedor Back-End (Projetos Pessoais)",
    organization: "Freelance / Open Source",
    period: "2023 – Presente",
    description:
      "Desenvolvimento de APIs RESTful, sistemas de autenticação com JWT, gerenciamento de filas com Redis/Celery e integração com bancos de dados relacionais e não-relacionais.",
  },
  {
    type: "education",
    title: "Cursos Complementares",
    organization: "Rocketseat, Alura, Udemy",
    period: "2022 – Presente",
    description:
      "Node.js avançado, Docker na prática, Java com Spring Boot, Python para back-end, arquitetura limpa e boas práticas de desenvolvimento.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <h2 style={{ fontSize: "2.5rem", marginBottom: "3rem", fontWeight: 700 }}>
          Formação &amp; <span style={{ color: "var(--accent)" }}>Experiência</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {experiences.map((item, index) => (
            <div key={index} style={{
              display: "flex",
              gap: "1.5rem",
              background: "var(--bg-primary)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "1.75rem",
            }}>
              <div style={{
                flexShrink: 0,
                width: "10px",
                borderRadius: "4px",
                background: item.type === "education" ? "var(--accent)" : "#22c55e",
              }} />
              <div>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <div>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>{item.title}</h3>
                    <p style={{ color: "var(--accent)", fontWeight: 500, fontSize: "0.95rem" }}>
                      {item.organization}
                    </p>
                  </div>
                  <span style={{
                    fontSize: "0.8rem",
                    background: "rgba(37, 99, 235, 0.1)",
                    color: "var(--accent)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "12px",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                  }}>
                    {item.period}
                  </span>
                </div>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginTop: "0.5rem" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
