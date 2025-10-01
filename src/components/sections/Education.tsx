"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

const formations = [
  {
    period: "2025 - 2028",
    title: "Bachelor SIN - DevOps Full Stack",
    school: "EPSI Montpellier",
    isUpcoming: false,
    isCurrent: true,
  },
  {
    period: "2023 - 2025",
    title: "BTS SIO SLAM",
    school: "Lycée CCI Gard, Nîmes",
    isUpcoming: false,
    isCurrent: false,
    isCompleted: true,
  },
  {
    period: "2020 - 2023",
    title: "Baccalauréat STI2D SIN",
    school: "Lycée LaSalle, Alès",
    isUpcoming: false,
    isCurrent: false,
    isCompleted: true,
  }
]

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Formation</h2>
        <div className="max-w-4xl mx-auto relative">
          {/* Ligne verticale de progression avec effet de dégradé */}
          <div className="absolute left-4 sm:left-1/2 top-[5%] bottom-[5%] w-px -translate-x-1/2">
            {/* Ligne principale */}
            <div className="absolute inset-0 border-l-2 border-dashed border-border" />
            {/* Dégradé haut */}
            <div className="absolute top-0 h-12 w-full bg-gradient-to-b from-background to-transparent" />
            {/* Dégradé bas */}
            <div className="absolute bottom-0 h-12 w-full bg-gradient-to-t from-background to-transparent" />
          </div>

          <div className="space-y-12">
            {formations.map((formation, index) => (
              <div key={index} className="relative">
                {/* Point de progression avec ombre */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 -translate-y-1/2 top-[50%]">
                  <div className={`w-3 h-3 rounded-full shadow-sm ${
                    formation.isCurrent 
                      ? "bg-primary shadow-primary/20" 
                      : formation.isUpcoming 
                        ? "border border-border" 
                        : formation.isCompleted
                          ? "bg-green-500 shadow-green-500/20"
                          : "border border-primary"
                  }`} />
                </div>

                {/* Carte */}
                <div className={`ml-12 sm:ml-0 ${index % 2 === 0 ? 'sm:mr-[50%] sm:pr-16' : 'sm:ml-[50%] sm:pl-16'}`}>
                  <Card className={`transition-colors ${
                    formation.isUpcoming ? "opacity-50" : ""
                  }`}>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-baseline justify-between gap-4">
                            <h3 className="font-semibold text-lg">{formation.title}</h3>
                            <Badge 
                              variant={
                                formation.isCurrent 
                                  ? "default" 
                                  : formation.isCompleted 
                                    ? "outline"
                                    : "secondary"
                              }
                              className={`whitespace-nowrap text-xs ${
                                formation.isCompleted ? "border-green-500 text-green-600" : ""
                              }`}
                            >
                              {formation.period}
                              {formation.isCompleted && " ✓"}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                            <GraduationCap className="w-4 h-4 shrink-0" />
                            <span>{formation.school}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 