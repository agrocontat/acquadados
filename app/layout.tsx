import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acquadados — Sistema ERP para Irrigação",
  description:
    "Acquadados é o sistema ERP desenvolvido para empresas do setor de irrigação agrícola. Gestão financeira, controle de pivôs, monitoramento hídrico e muito mais.",
  keywords: [
    "ERP irrigação",
    "sistema irrigação agrícola",
    "controle de pivôs",
    "gestão agrícola",
    "Acquadados",
    "software irrigação",
  ],
  openGraph: {
    title: "Acquadados — Sistema ERP para Irrigação",
    description:
      "Sistema completo de gestão para empresas de irrigação agrícola. Do financeiro ao campo.",
    url: "https://acquadados.com.br",
    siteName: "Acquadados",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap" rel="stylesheet" />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
