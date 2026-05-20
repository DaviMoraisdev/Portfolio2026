export type Project = {
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  status: "Projeto em produção";
};

export type ExperienceItem = {
  type: "education" | "experience";
  title: string;
  organization: string;
  period: string;
  description: string;
};

const githubUrl = "https://github.com/DaviMoraisdev";
const repoUrl = "https://github.com/DaviMoraisdev/Portfolio-2026";

export const profile = {
  name: "Davi Morais",
  role: "Desenvolvedor Back-End Junior",
  target: "Buscando primeira oportunidade como Back-End Junior",
  location: "Brasil",
  email: "davimorais063@gmail.com",
  githubUrl,
  linkedinUrl: "https://www.linkedin.com/in/davi-morais-b558b2261",
  portfolioUrl: process.env.NEXT_PUBLIC_SITE_URL ?? repoUrl,
  repoUrl,
  resumeUrl: null as string | null,
};

export const skills = [
  {
    title: "Back-End",
    items: ["PHP", "Node.js", "APIs REST", "Autenticacao", "Validacao"],
  },
  {
    title: "Banco de Dados",
    items: ["MySQL", "Modelagem relacional", "Consultas SQL", "Persistencia"],
  },
  {
    title: "Front-End de apoio",
    items: ["React", "Next.js", "TypeScript", "HTML", "CSS responsivo"],
  },
  {
    title: "Boas praticas",
    items: ["Git", "GitHub", "Documentacao", "Deploy", "Organizacao"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    type: "education",
    title: "Analise e Desenvolvimento de Sistemas",
    organization: "Graduacao em andamento",
    period: "2026 - 2027",
    description:
      "Formacao orientada a fundamentos de software, requisitos, algoritmos, banco de dados e construcao de aplicacoes web.",
  },
  {
    type: "experience",
    title: "Projetos Pessoais",
    organization: "Estudos praticos",
    period: "2024 - presente",
    description:
      "Construcao de sistemas web, organizacao de repositorios, aplicacao de versionamento e evolucao gradual de projetos com foco em back-end.",
  },
  {
    type: "education",
    title: "Estudos complementares",
    organization: "Cursos e pratica independente",
    period: "Continuo",
    description:
      "Aprofundamento em PHP, JavaScript, TypeScript, bancos de dados, arquitetura de APIs e boas praticas para projetos profissionais.",
  },
];

export const projects: Project[] = [
  {
    title: "E-Commerce API",
    description:
      "API RESTful para operacoes de e-commerce, com foco em autenticacao, carrinho, pedidos, pagamentos e persistencia de dados.",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
    status: "Projeto em produção",
    highlights: [
      "Fluxo de autenticacao para proteger rotas sensiveis.",
      "Organizacao de entidades como usuarios, produtos, carrinho e pedidos.",
      "Estrutura pensada para documentacao de endpoints e deploy.",
    ],
  },
  {
    title: "Sistema de Agendamentos",
    description:
      "Sistema para gerenciamento de horarios, confirmacoes e filas de processamento em um contexto de atendimento e reservas.",
    stack: ["Python", "FastAPI", "Redis", "Celery", "PostgreSQL"],
    status: "Projeto em produção",
    highlights: [
      "Separacao entre agendamento, notificacao e processamento assíncrono.",
      "Modelo preparado para controle de disponibilidade e conflitos.",
      "Boa base para demonstrar filas, tarefas e integracao com e-mail.",
    ],
  },
  {
    title: "Task Manager com Autenticacao",
    description:
      "Aplicacao para gestao de tarefas com usuarios, papeis, validacao de dados e separacao de responsabilidades no back-end.",
    stack: ["Java", "Spring Boot", "MySQL", "Docker", "JWT"],
    status: "Projeto em produção",
    highlights: [
      "Controle de acesso por perfil de usuario.",
      "Validacao forte para entrada de dados e regras de negocio.",
      "Estrutura preparada para testes e evolucao de funcionalidades.",
    ],
  },
];
