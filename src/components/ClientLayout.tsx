"use client"

import { ThemeProvider } from "@/components/ThemeProvider"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useEffect } from "react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Enregistrement du service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker enregistré avec succès:', registration)
          })
          .catch(error => {
            console.log('Échec de l\'enregistrement du Service Worker:', error)
          })
      })
    }
  }, [])

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  )
} 