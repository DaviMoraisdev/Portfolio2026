"use client";

import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      
      if (res.ok) {
        setSuccess(true);
        setName(""); setEmail(""); setMessage("");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Ocorreu um erro ao enviar a mensagem. Tente novamente.");
      }
    } catch {
      setError("Não foi possível enviar a mensagem. Verifique sua conexão e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-grid">
          <div>
            <span className="eyebrow">Contato</span>
            <h2 className="section-title">
              Caso tenha se interessado <span className="highlight">entre em contato!</span>
            </h2>
            <p className="section-copy">
              Se voce procura alguem em formacao, com base pratica e disposto a evoluir com feedback, envie uma mensagem pelo formulario ou pelo e-mail.
            </p>
            <a className="direct-email" href={`mailto:${profile.email}`}>
              <Mail size={20} /> {profile.email}
            </a>
          </div>

          <div className="contact-card card">
            {success ? (
              <div className="form-alert form-success" role="status">
                Mensagem enviada com sucesso. Entrarei em contato em breve.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {error && (
                  <div className="form-alert form-error" role="alert">
                    {error} Tambem e possivel enviar direto para {profile.email}.
                  </div>
                )}
                <div className="field">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={80}
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    maxLength={120}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    minLength={10}
                    maxLength={1200}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                </div>

                <button className="button button-primary" type="submit" disabled={loading}>
                  <Send size={18} /> {loading ? "Enviando..." : "Enviar mensagem"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          align-items: start;
          display: grid;
          gap: 2rem;
          grid-template-columns: minmax(0, 0.9fr) minmax(300px, 0.7fr);
        }

        .direct-email {
          align-items: center;
          color: var(--accent);
          display: inline-flex;
          font-weight: 800;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .contact-card {
          padding: 1.35rem;
        }

        .contact-form {
          display: grid;
          gap: 1rem;
        }

        .field {
          display: grid;
          gap: 0.45rem;
        }

        .field label {
          font-weight: 800;
        }

        .field input,
        .field textarea {
          background: var(--surface-strong);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 1rem;
          padding: 0.8rem 0.9rem;
          resize: vertical;
          width: 100%;
        }

        .field input:focus,
        .field textarea:focus {
          border-color: var(--accent);
          outline: none;
        }

        .form-alert {
          border-radius: var(--radius-sm);
          font-weight: 700;
          line-height: 1.55;
          padding: 0.9rem;
        }

        .form-success {
          background: var(--success-soft);
          border: 1px solid var(--success);
          color: var(--success);
        }

        .form-error {
          background: var(--danger-soft);
          border: 1px solid var(--danger);
          color: var(--danger);
        }

        .contact-form button {
          width: 100%;
        }

        .contact-form button:disabled {
          cursor: wait;
          opacity: 0.72;
          transform: none;
        }

        @media (max-width: 820px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
