import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Spitzer - Étudiant BTS SIO & Développeur Full Stack | Portfolio",
  description: "Portfolio de Lucas Spitzer, étudiant en BTS SIO SLAM et développeur full stack passionné. Découvrez mes projets web, mes compétences en développement et mon parcours en formation.",
  keywords: "étudiant BTS SIO, BTS SIO SLAM, développeur web junior, full stack, React, TypeScript, PHP, portfolio étudiant, développeur, Nîmes, formation développement web, alternance développement, stage développement web, projets web étudiants",
  authors: [{ name: "Lucas Spitzer" }],
  creator: "Lucas Spitzer",
  publisher: "Lucas Spitzer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Lucas Spitzer - Étudiant BTS SIO & Développeur Full Stack | Portfolio",
    description: "Portfolio de Lucas Spitzer, étudiant en BTS SIO SLAM et développeur full stack passionné. Découvrez mes projets web, mes compétences en développement et mon parcours en formation.",
    type: "website",
    locale: "fr_FR",
    siteName: "Portfolio de Lucas Spitzer - Étudiant BTS SIO",
  },
  other: {
    "github-profile": "https://github.com/spitzerl",
    "linkedin-profile": "https://www.linkedin.com/in/lucasspitzer/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/my-notion-face-transparent.png" />
        <link rel="apple-touch-icon" href="/my-notion-face-transparent.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
