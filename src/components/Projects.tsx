import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Provas praticas</span>
          <h2 className="section-title">
            Projetos <span className="highlight">Pessoais</span>
          </h2>
          <p className="section-copy">
            A seleção abaixo prioriza projetos completos em produção, com domínio do problema, organização, tecnologias usadas e próximos passos claros.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card card" key={project.title}>
              <div className="project-card-header">
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>

              <div className="stack-list" aria-label={`Tecnologias de ${project.title}`}>
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <ul className="highlight-list">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="project-actions">
                {project.repoUrl && (
                  <a
                    className="button button-primary"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver repositório
                  </a>
                )}
                <span className="button button-secondary project-production">
                  {project.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          background: var(--bg-secondary);
        }

        .section-heading {
          margin-bottom: 2.5rem;
        }

        .projects-grid {
          display: grid;
          gap: 1.25rem;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .project-card {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          padding: 1.35rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .project-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-4px);
        }

        .project-card-header {
          display: grid;
          gap: 0.8rem;
        }

        .project-card h3 {
          font-size: 1.35rem;
          line-height: 1.2;
        }

        .project-card p {
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .stack-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .stack-list span {
          background: var(--surface-strong);
          border: 1px solid var(--border);
          border-radius: 999px;
          color: var(--text-secondary);
          font-size: 0.82rem;
          font-weight: 700;
          padding: 0.38rem 0.6rem;
        }

        .highlight-list {
          color: var(--text-secondary);
          display: grid;
          gap: 0.55rem;
          line-height: 1.55;
          margin-left: 1.1rem;
        }

        .project-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-top: auto;
        }

        .project-production {
          cursor: default;
        }

        .project-production:hover {
          transform: none;
        }

        @media (max-width: 980px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 680px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
