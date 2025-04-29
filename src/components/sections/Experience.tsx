"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    period: "Janvier 2025 - Février 2025",
    title: "Testeur QA",
    company: "PeopleSpheres",
    location: "Montpellier",
    description: "Développement de tests automatisés pour une application de SIRH",
    contractType: "stage",
    reportLink: "/documents/Rapport_stage_PeopleSphertes_SPITZER_Lucas.pdf"
  },
  {
    period: "Mai 2024 - Juin 2024",
    title: "Développeur Full Stack",
    company: "Institut d'Électronique des Systèmes",
    location: "Montpellier",
    description: "Développement, déploiement et configuration de solution embarquées",
    contractType: "stage"
  },
]

// Fonction pour obtenir le label du type de contrat
const getContractLabel = (type: string) => {
  switch (type) {
    case "stage":
      return "Stage"
    case "alternance":
      return "Alternance"
    case "cdi":
      return "CDI"
    case "cdd":
      return "CDD"
    default:
      return type
  }
}

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Expérience</h2>
        <div className="grid gap-4 sm:gap-6 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card hover:bg-accent/5 transition-colors">
              <CardContent className="p-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <div className="flex items-center gap-1.5 text-muted-foreground mt-1">
                        <Building2 className="w-3.5 h-3.5" />
                        <span className="text-sm">{exp.company}</span>
                        <span className="text-sm text-muted-foreground/60">•</span>
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="h-fit shrink-0">
                      {getContractLabel(exp.contractType)}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                  {exp.reportLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-fit mt-2"
                      asChild
                    >
                      <a href={exp.reportLink} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger le rapport
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 