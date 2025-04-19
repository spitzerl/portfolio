"use client"

import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    period: "Janvier 2025 - Février 2025",
    title: "Testeur Q&A",
    company: "PeopleSpheres, Montpellier",
    description: "Développement de tests automatisés pour une application de SIRH"
  },
  {
    period: "Mai 2024 - Juin 2024",
    title: "Développeur Full Stack",
    company: "Institut d'Électronique des Systèmes, Montpellier",
    description: "Développement, déploiement et configuration de solution embarquées"
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Expérience</h2>
        <div className="grid gap-4 sm:gap-6 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-2">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">{exp.title}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 