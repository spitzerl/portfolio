import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://lucasspitzer.fr"),
  title: "Lucas Spitzer | Portfolio - Développeur Full Stack & DevOps",
  description: "Découvrez le portfolio de Lucas Spitzer, étudiant en DevOps et développeur Full Stack à Montpellier. Explorez mes projets web (React, PHP) et DevOps (Docker, CI/CD).",
  keywords: "Lucas Spitzer, DevOps, Développeur Full Stack, Montpellier, alternance DevOps, EPSI Montpellier, React, TypeScript, PHP, Docker, CI/CD, BTS SIO SLAM, portfolio informatique",
  authors: [{ name: "Lucas Spitzer" }],
  creator: "Lucas Spitzer",
  publisher: "Lucas Spitzer",
  icons: {
    icon: '/favicon.ico',
    apple: '/my-notion-face-portrait.png',
  },
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Lucas Spitzer | Portfolio - Développeur Full Stack & DevOps",
    description: "Découvrez le portfolio de Lucas Spitzer, étudiant en DevOps et développeur Full Stack à Montpellier. Explorez mes projets web et DevOps.",
    url: "https://lucasspitzer.fr",
    type: "website",
    locale: "fr_FR",
    siteName: "Lucas Spitzer | Portfolio",
    images: [
      {
        url: "/my-notion-face-portrait.png",
        width: 800,
        height: 800,
        alt: "Lucas Spitzer - Développeur Full Stack & DevOps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Spitzer | Portfolio - Développeur Full Stack & DevOps",
    description: "Découvrez le portfolio de Lucas Spitzer, étudiant en DevOps et développeur Full Stack à Montpellier.",
    images: ["/my-notion-face-portrait.png"],
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