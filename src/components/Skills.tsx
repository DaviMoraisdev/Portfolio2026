import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="eyebrow">Stack em evolucao</span>
        <h2 className="section-title">
          Habilidades de <span className="highlight">Atuação</span>
        </h2>
        <p className="section-copy">
          Habilidades em desenvolvimento, entender requisitos, modelar dados, construir funcionalidades e manter o codigo compreensivel.
        </p>

        <div className="skills-grid">
          {skills.map((category) => (
            <article className="skill-card card" key={category.title}>
              <h3>{category.title}</h3>
              <div>
                {category.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 2rem;
        }

        .skill-card {
          padding: 1.25rem;
        }

        .skill-card h3 {
          color: var(--accent);
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .skill-card div {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .skill-card span {
          background: var(--surface-strong);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          font-size: 0.86rem;
          font-weight: 700;
          padding: 0.42rem 0.55rem;
        }

        @media (max-width: 920px) {
          .skills-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 560px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
