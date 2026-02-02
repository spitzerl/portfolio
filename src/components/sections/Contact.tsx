"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Loader2 } from "lucide-react"

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const email = "spitzer.lucas@proton.me"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi')
      }

      setSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue')
    } finally {
      setLoading(false)
    }
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

          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Envoyer un Message</h3>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm sm:text-base"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm sm:text-base"
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm sm:text-base"
                    placeholder="Votre message..."
                    required
                  />
                </div>
                
                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}
                
                {success && (
                  <p className="text-sm text-green-500">Message envoyé avec succès ! 🎉</p>
                )}

                <Button 
                  type="submit" 
                  className="w-full text-sm sm:text-base"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer le Message'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}