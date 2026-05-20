import { ArrowRight, FileText, MapPin } from "lucide-react";
import { profile, projects, skills } from "@/data/portfolio";
import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="status-dot" />
              {profile.target}
            </span>

            <h1 className="hero-title">
              {profile.name}, Desenvolvedor Back-end Junior
            </h1>

            <p className="hero-copy">
              Estudante de Análise e Desenvolvimento de Sistemas, em desenvolvimento com tecnologias relacionadas: JavaScript, TypeScript e banco de dados, Docker, Container, Python e atividades relacionadas. Quero atuar em um time onde possa evoluir e aprender com proatividade e produção.
            </p>

            <div className="hero-actions" aria-label="Acoes principais">
              <a className="button button-primary" href="#projects">
                Ver projetos <ArrowRight size={18} />
              </a>
              <a className="button button-secondary" href="#contact">
                Entrar em contato
              </a>
              {profile.resumeUrl ? (
                <a className="button button-ghost" href={profile.resumeUrl}>
                  <FileText size={18} /> Baixar curriculo
                </a>
              ) : (
                <span className="button button-ghost hero-disabled-action" aria-disabled="true">
                  <FileText size={18} /> Curriculo em preparacao
                </span>
              )}
            </div>

            <div className="hero-socials" aria-label="Links profissionais">
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir GitHub de Davi Morais">
                <GitHubIcon size={22} /> GitHub
              </a>
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir LinkedIn de Davi Morais">
                <LinkedInIcon size={22} /> LinkedIn
              </a>
              <span>
                <MapPin size={22} /> {profile.location}
              </span>
            </div>
          </div>

          <aside className="hero-panel card" aria-label="Resumo profissional">
            <p className="panel-label">Resumo</p>
            <div className="profile-summary">
              <h2>{profile.name}</h2>
              <span>{profile.role}</span>
            </div>
            <div className="compact-info">
              <div>
                <strong>Habilidades e tecnologias</strong>
                <span>{skills.flatMap((category) => category.items).slice(0, 8).join(", ")}</span>
              </div>
              <div>
                <strong>Nível de Inglês</strong>
                <span>Intermediário - Avançado</span>
              </div>
              <div>
                <strong>Projetos feitos</strong>
                <span>{projects.length} projetos em produção</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        .hero-section {
          align-items: center;
          display: flex;
          min-height: 100vh;
          padding: 7rem 0 4rem;
        }

        .hero-grid {
          align-items: center;
          display: grid;
          gap: 3rem;
          grid-template-columns: minmax(0, 1.5fr) minmax(260px, 0.5fr);
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.8rem);
          font-weight: 900;
          line-height: 1.03;
          margin: 1.5rem 0;
          max-width: 760px;
        }

        .hero-copy {
          color: var(--text-secondary);
          font-size: clamp(1.05rem, 2vw, 1.22rem);
          line-height: 1.75;
          max-width: 780px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-top: 2rem;
        }

        .hero-socials {
          align-items: center;
          color: var(--text-secondary);
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1.4rem;
        }

        .hero-disabled-action {
          color: var(--text-muted);
          cursor: default;
          opacity: 0.82;
        }

        .hero-disabled-action:hover {
          transform: none;
        }

        .hero-socials a,
        .hero-socials span {
          align-items: center;
          display: inline-flex;
          gap: 0.45rem;
        }

        .hero-socials a:hover {
          color: var(--accent);
        }

        .status-dot {
          background: var(--success);
          border-radius: 999px;
          box-shadow: 0 0 0 6px var(--success-soft);
          height: 0.55rem;
          width: 0.55rem;
        }

        .hero-panel {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.15rem;
        }

        .panel-label {
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          margin-bottom: 0.35rem;
          text-transform: uppercase;
        }

        .hero-panel h2 {
          font-size: 1.25rem;
          line-height: 1.2;
        }

        .profile-summary {
          border-bottom: 1px solid var(--border);
          display: grid;
          gap: 0.25rem;
          padding-bottom: 1rem;
        }

        .profile-summary span,
        .compact-info span {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .compact-info {
          display: grid;
          gap: 0.9rem;
        }

        .compact-info div {
          display: grid;
          gap: 0.25rem;
        }

        .compact-info strong {
          font-size: 0.9rem;
        }

        @media (max-width: 860px) {
          .hero-section {
            min-height: auto;
            padding-top: 6rem;
          }

          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-panel {
            max-width: 520px;
          }
        }
      `}</style>
    </section>
  );
}
