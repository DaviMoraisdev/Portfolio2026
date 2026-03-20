export default function Hero() {
  return (
    <section id="about" className="section" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      paddingTop: "6rem" // account for sticky nav
    }}>
      <div className="container">
        <h1 style={{
          fontSize: "4rem",
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: "1.5rem"
        }}>
          Construindo a base <br />
          <span style={{ color: "var(--accent)" }}>invisível e robusta</span><br />
          da web.
        </h1>
        
        <p style={{
          fontSize: "1.25rem",
          color: "var(--text-secondary)",
          maxWidth: "600px",
          marginBottom: "2rem",
          lineHeight: 1.6
        }}>
          Olá, meu nome é Davi. Sou um Desenvolvedor Back-End focado em arquitetura 
          escalável, APIs eficientes, banco de dados e testes. Transformo lógicas 
          complexas em soluções seguras e performáticas.
        </p>

        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="#projects" style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            borderRadius: "6px",
            fontWeight: 600,
            transition: "background 0.2s"
          }}>
            Ver Projetos
          </a>
          <a href="#contact" style={{
            background: "transparent",
            color: "var(--text-primary)",
            padding: "0.75rem 1.5rem",
            borderRadius: "6px",
            border: "1px solid var(--border)",
            fontWeight: 600,
            transition: "background 0.2s"
          }}>
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
