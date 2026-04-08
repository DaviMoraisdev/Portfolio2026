import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Davi Morais | Desenvolvedor Back-End",
  description: "Portfólio de Davi Morais – Desenvolvedor Back-End focado em APIs, arquitetura de software e soluções escaláveis.",
  openGraph: {
    title: "Davi Morais | Desenvolvedor Back-End",
    description: "Portfólio de Davi Morais – Desenvolvedor Back-End focado em APIs, arquitetura de software e soluções escaláveis.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Davi Morais | Desenvolvedor Back-End",
    description: "Portfólio de Davi Morais – Desenvolvedor Back-End focado em APIs, arquitetura de software e soluções escaláveis.",
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
