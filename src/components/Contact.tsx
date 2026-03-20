"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      
      if (res.ok) {
        setSuccess(true);
        setName(""); setEmail(""); setMessage("");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container" style={{
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", fontWeight: 700 }}>
          Vamos <span style={{ color: "var(--accent)" }}>Conversar</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "3rem" }}>
          Tem uma oportunidade no Back-End, uma ideia de projeto ou apenas quer dizer oi? Envie-me uma mensagem.
        </p>

        {success ? (
          <div style={{
            padding: "2rem",
            background: "rgba(34, 197, 94, 0.1)",
            color: "#22c55e",
            borderRadius: "12px",
            border: "1px solid #22c55e",
            fontWeight: 600
          }}>
            Mensagem enviada com sucesso! Entrarei em contato em breve.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            textAlign: "left"
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label htmlFor="name" style={{ fontWeight: 500 }}>Nome</label>
              <input type="text" id="name" required value={name} onChange={e => setName(e.target.value)} style={{
                padding: "0.75rem",
                borderRadius: "6px",
                border: "1px solid var(--border)",
                background: "var(--bg-primary)",
                color: "var(--text-primary)",
                outline: "none"
              }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label htmlFor="email" style={{ fontWeight: 500 }}>E-mail</label>
              <input type="email" id="email" required value={email} onChange={e => setEmail(e.target.value)} style={{
                padding: "0.75rem",
                borderRadius: "6px",
                border: "1px solid var(--border)",
                background: "var(--bg-primary)",
                color: "var(--text-primary)",
                outline: "none"
              }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label htmlFor="message" style={{ fontWeight: 500 }}>Mensagem</label>
              <textarea id="message" rows={5} required value={message} onChange={e => setMessage(e.target.value)} style={{
                padding: "0.75rem",
                borderRadius: "6px",
                border: "1px solid var(--border)",
                background: "var(--bg-primary)",
                color: "var(--text-primary)",
                outline: "none",
                resize: "vertical"
              }} />
            </div>

            <button type="submit" disabled={loading} style={{
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
              padding: "1rem",
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "1.1rem",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              transition: "opacity 0.2s"
            }}>
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
