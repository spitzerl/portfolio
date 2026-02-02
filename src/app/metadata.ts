import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lucas Spitzer | Portfolio",
  description: "Portfolio de Lucas Spitzer, étudiant en informatique",
  keywords: "étudiant, DevOps Full Stack, développeur web, React, TypeScript, PHP, Docker, portfolio étudiant, développeur, Montpellier, formation développement web, infrastructure, BTS SIO SLAM, diplômé",
  authors: [{ name: "Lucas Spitzer" }],
  creator: "Lucas Spitzer",
  publisher: "Lucas Spitzer",
  icons: {
    icon: '/favicon.ico',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Lucas Spitzer | Portfolio",
    description: "Portfolio de Lucas Spitzer, étudiant en informatique",
    type: "website",
    locale: "fr_FR",
    siteName: "Lucas Spitzer | Portfolio",
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