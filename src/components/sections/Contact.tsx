"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
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
                  <p className="text-sm sm:text-base text-muted-foreground">
                    <a href="mailto:spitzer.lucas@proton.me" className="hover:text-primary">spitzer.lucas@proton.me</a>
                  </p>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold">Localisation</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Nîmes, France</p>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold">Réseaux Sociaux</h4>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://github.com/spitzerl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary"
                    >
                      GitHub
                    </a>
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

          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Envoyer un Message</h3>
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
                  />
                </div>
                <Button type="submit" className="w-full text-sm sm:text-base">
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