import { GraduationCap, Laptop } from "lucide-react";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <span className="eyebrow">Trajetoria</span>
        <h2 className="section-title">
          Formações e <span className="highlight">Certificações</span>
        </h2>

        <div className="timeline">
          {experiences.map((item, index) => (
            <article className="timeline-item card" key={`${item.title}-${index}`}>
              <div className="timeline-icon" aria-hidden="true">
                {item.type === "education" ? <GraduationCap size={20} /> : <Laptop size={20} />}
              </div>
              <div className="timeline-body">
                <div className="timeline-header">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.organization}</p>
                  </div>
                  <span className="badge">
                    {item.period}
                  </span>
                </div>
                <p className="timeline-description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          background: var(--bg-secondary);
        }

        .timeline {
          display: grid;
          gap: 1rem;
          margin-top: 2rem;
        }

        .timeline-item {
          display: grid;
          gap: 1rem;
          grid-template-columns: auto 1fr;
          padding: 1.25rem;
        }

        .timeline-icon {
          align-items: center;
          background: var(--accent-soft);
          border-radius: var(--radius-sm);
          color: var(--accent);
          display: flex;
          height: 42px;
          justify-content: center;
          width: 42px;
        }

        .timeline-header {
          align-items: flex-start;
          display: flex;
          gap: 1rem;
          justify-content: space-between;
        }

        .timeline-header h3 {
          font-size: 1.12rem;
          line-height: 1.3;
        }

        .timeline-header p,
        .timeline-description {
          color: var(--text-secondary);
        }

        .timeline-header p {
          font-weight: 700;
          margin-top: 0.25rem;
        }

        .timeline-description {
          line-height: 1.65;
          margin-top: 0.8rem;
        }

        @media (max-width: 620px) {
          .timeline-item {
            grid-template-columns: 1fr;
          }

          .timeline-header {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
