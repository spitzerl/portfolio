import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lucas Spitzer - Étudiant Bachelor DevOps & Développeur Full Stack | Portfolio",
  description: "Portfolio de Lucas Spitzer, étudiant en Bachelor SIN option DevOps Full Stack à l'EPSI Montpellier. Diplômé BTS SIO SLAM, découvrez mes projets web, compétences en développement et infrastructure.",
  keywords: "étudiant Bachelor DevOps, EPSI Montpellier, Bachelor SIN, DevOps Full Stack, développeur web, React, TypeScript, PHP, Docker, portfolio étudiant, développeur, Montpellier, formation développement web, infrastructure, BTS SIO SLAM diplômé",
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
    title: "Lucas Spitzer - Étudiant Bachelor DevOps & Développeur Full Stack | Portfolio",
    description: "Portfolio de Lucas Spitzer, étudiant en Bachelor SIN option DevOps Full Stack à l'EPSI Montpellier. Diplômé BTS SIO SLAM, découvrez mes projets web, compétences en développement et infrastructure.",
    type: "website",
    locale: "fr_FR",
    siteName: "Portfolio de Lucas Spitzer - Étudiant Bachelor DevOps",
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