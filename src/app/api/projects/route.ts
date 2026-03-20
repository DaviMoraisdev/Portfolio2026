import { NextResponse } from 'next/server';

export async function GET() {
  // Simulating fetching from a database
  const projects = [
    {
      id: 1,
      name: "E-Commerce API",
      description: "Uma API RESTful completa com Node e Express. Contém autenticação na rota de pagamentos e carrinho de compras.",
      tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
      link: "#"
    },
    {
      id: 2,
      name: "Sistema de Agendamentos",
      description: "Gerenciamento de filas e horários com envio de e-mail de confirmação usando filas de back-end.",
      tech: ["Python", "FastAPI", "Redis", "Celery"],
      link: "#"
    },
    {
      id: 3,
      name: "Task Manager c/ Autenticação",
      description: "Aplicação Back-End estruturada focando na separação de roles (Admin/User) e forte validação de dados.",
      tech: ["Java", "Spring Boot", "MySQL", "Docker"],
      link: "#"
    }
  ];

  return NextResponse.json(projects, {
    headers: {
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
