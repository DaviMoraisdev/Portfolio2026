import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.portfolioUrl),
  title: `${profile.name} | ${profile.role}`,
  description:
    "Portfolio de Davi Morais, desenvolvedor back-end junior com projetos em PHP, JavaScript, TypeScript, APIs, banco de dados e aplicacoes web.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Davi Morais",
    "desenvolvedor back-end junior",
    "portfolio dev junior",
    "PHP",
    "Next.js",
    "TypeScript",
    "MySQL",
  ],
  authors: [{ name: profile.name, url: profile.githubUrl }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description:
      "Projetos, habilidades e contatos de Davi Morais para oportunidades de back-end junior.",
    url: "/",
    siteName: `${profile.name} Portfolio`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description:
      "Portfolio focado em projetos e fundamentos para vaga de back-end junior.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="dark" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
