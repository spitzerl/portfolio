"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "spitzer.lucas@proton.me"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Contact</h2>
        <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Me Contacter</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="text-sm sm:text-base font-semibold">Email</h4>
                  <div className="relative">
                    <p className="text-sm sm:text-base text-muted-foreground">
                      <span 
                        className="select-none cursor-pointer hover:text-primary transition-colors"
                        onClick={copyToClipboard}
                      >
                        spitzer<span className="hidden">.nospam</span>.lucas<span className="hidden">.nospam</span>@<span className="hidden">nospam.</span>proton<span className="hidden">.nospam</span>.me
                      </span>
                    </p>
                    {copied && (
                      <span className="absolute left-0 top-6 text-xs text-green-500 font-medium">
                        Copié dans le presse-papiers
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold">Localisation</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Nîmes, France</p>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold">Réseaux Sociaux</h4>
                  <div className="flex items-center gap-4 mt-2">
                    <a
                      href="https://github.com/spitzerl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary"
                    >
                      GitHub
                    </a>
                    <div className="h-4 w-px bg-border"></div>
                    <a
                      href="https://www.linkedin.com/in/lucasspitzer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="grayscale hover:grayscale-0 transition-all duration-500">
            <CardContent className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold">Envoyer un Message</h3>
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  Bientôt disponible
                </Badge>
              </div>
              <form className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm sm:text-base"
                    placeholder="Votre nom"
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm sm:text-base"
                    placeholder="votre.email@exemple.com"
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm sm:text-base"
                    placeholder="Votre message..."
                    disabled
                  />
                </div>
                <Button type="submit" className="w-full text-sm sm:text-base" disabled>
                  Envoyer le Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 