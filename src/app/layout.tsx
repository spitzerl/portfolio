import { Inter } from "next/font/google"
import "./globals.css"
import { metadata } from "./metadata"
import ClientLayout from "@/components/ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export { metadata }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lucas Spitzer",
    "url": "https://lucasspitzer.fr",
    "image": "https://lucasspitzer.fr/my-notion-face-portrait.png",
    "jobTitle": "Développeur Full Stack & Étudiant DevOps",
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "EPSI Montpellier"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Lycée CCI Gard"
      }
    ],
    "knowsAbout": [
      "DevOps",
      "Développement Web",
      "React",
      "TypeScript",
      "Docker",
      "PHP",
      "Laravel",
      "Linux",
      "CI/CD"
    ],
    "sameAs": [
      "https://github.com/spitzerl",
      "https://www.linkedin.com/in/lucasspitzer/"
    ]
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Portfolio" />
        <link rel="apple-touch-icon" href="/my-notion-face-portrait.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
