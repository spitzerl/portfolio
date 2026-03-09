"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Search } from "lucide-react"

const formations = [
  {
    period: "2023 - 2025",
    title: "BTS SIO SLAM",
    school: "Lycée CCI Gard, Nîmes",
  },
  {
    period: "2020 - 2023",
    title: "Baccalauréat STI2D SIN",
    school: "Lycée LaSalle, Alès",
  }
]

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Formation</h2>
        <div className="max-w-3xl mx-auto relative">
          {/* Ligne verticale de la frise */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-6">
            {/* Encart recherche d'alternance */}
            <div className="flex items-center gap-4">
              <div className="relative w-[15px] h-[15px] shrink-0 rounded-full border-2 border-primary bg-background z-10">
                <div className="absolute inset-[3px] rounded-full bg-primary animate-pulse" />
              </div>
              <Card className="flex-1 border-dashed border-primary/30 bg-primary/5">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-sm">En recherche d'une formation en alternance</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Ouvert aux opportunités</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formations */}
            {formations.map((formation, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="relative w-[15px] h-[15px] shrink-0 rounded-full border-2 border-emerald-500 bg-background z-10">
                  <div className="absolute inset-[3px] rounded-full bg-emerald-500" />
                </div>
                <Card className="flex-1 bg-card hover:bg-accent/5 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-semibold text-lg">{formation.title}</h3>
                        <Badge
                          variant="secondary"
                          className="whitespace-nowrap text-xs bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800"
                        >
                          Obtenu
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                        <span>{formation.school}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{formation.period}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
