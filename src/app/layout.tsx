import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Spitzer - Développeur Full Stack | Portfolio",
  description: "Portfolio de Lucas Spitzer, développeur full stack passionné par la création d'applications web modernes. Expert en React, TypeScript, PHP et développement web.",
  keywords: "développeur web, full stack, React, TypeScript, PHP, portfolio, développeur, Nîmes",
  authors: [{ name: "Lucas Spitzer" }],
  creator: "Lucas Spitzer",
  publisher: "Lucas Spitzer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://spitzerl.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lucas Spitzer - Développeur Full Stack | Portfolio",
    description: "Portfolio de Lucas Spitzer, développeur full stack passionné par la création d'applications web modernes. Expert en React, TypeScript, PHP et développement web.",
    url: "https://spitzerl.dev",
    siteName: "Portfolio de Lucas Spitzer",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Spitzer - Développeur Full Stack | Portfolio",
    description: "Portfolio de Lucas Spitzer, développeur full stack passionné par la création d'applications web modernes.",
    creator: "@spitzerl",
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
  verification: {
    google: "votre-code-de-verification-google",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
