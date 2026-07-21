# Davi Morais | Desenvolvedor Back-End Junior

[![Codigo](https://img.shields.io/badge/Codigo-Portfolio_2026-2563eb?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DaviMoraisdev/Portfolio-2026)
[![GitHub](https://img.shields.io/badge/GitHub-DaviMoraisdev-111827?style=for-the-badge&logo=github)](https://github.com/DaviMoraisdev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Davi_Morais-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/davi-morais-b558b2261)

Portfolio pessoal criado para apresentar perfil profissional, projetos, habilidades e canais de contato de Davi Morais, com foco em oportunidades de back-end junior.

## Objetivo

Atuar como desenvolvedor back-end júnior ou estagiário, com foco em Node.js, TypeScript e PostgreSQL na construção de APIs REST seguras e escaláveis. Aprendizado orientado a fundamentos, aplicado no desenvolvimento de uma plataforma de e-commerce em microsserviços (Docker, JWT, MongoDB, Redis).

## Stack

- **Next.js 16** com App Router
- **React 19**
- **TypeScript**
- **CSS global e componentes reutilizaveis**
- **lucide-react** para iconografia
- **Route Handler** para contato
- **Metadata API**, `sitemap.ts`, `robots.ts` e Open Graph dinamico

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para validar producao:

```bash
npm run lint
npm run build
```

> Observacao: no ambiente WSL 1 esses comandos podem falhar com `WSL 1 is not supported`. Use WSL 2, Linux nativo ou outro ambiente Node compativel.

## Configuracao de contato

O formulario usa a rota `POST /api/contact`. Para envio real, configure um endpoint externo compativel com POST JSON, como Formspree ou um webhook proprio:

```bash
CONTACT_FORM_ENDPOINT=https://formspree.io/f/abc123
NEXT_PUBLIC_SITE_URL=https://portfolio-davimorais.vercel.app
```

Sem `CONTACT_FORM_ENDPOINT`, a interface continua mostrando o e-mail direto como fallback.

## Personalizacao

Os dados do portfolio ficam centralizados em `src/data/portfolio.ts`:

- perfil e links profissionais
- habilidades
- formacao e experiencia
- projetos e repositorios

Atualize esse arquivo sempre que houver novo projeto, demo, curriculo em PDF ou link profissional.

## Contato

- E-mail: [davimorais063@gmail.com](mailto:davimorais063@gmail.com)
- GitHub: [github.com/DaviMoraisdev](https://github.com/DaviMoraisdev)
- LinkedIn: [linkedin.com/in/davi-morais-b558b2261](https://www.linkedin.com/in/davi-morais-b558b2261)
