"use client"

import { Card, CardContent } from "@/components/ui/card"

const formations = [
  {
    period: "À venir",
    title: "Bachelor CSI",
    school: "ESN81, Castres",
    isUpcoming: true,
  },
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
        <div className="grid gap-4 sm:gap-6 max-w-3xl mx-auto">
          {formations.map((formation, index) => (
            <Card key={index}>
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">{formation.title}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">{formation.school}</p>
                  </div>
                  <span className={`text-xs sm:text-sm ${formation.isUpcoming ? 'bg-blue-100 text-blue-800 px-2 py-1 rounded-full' : 'text-muted-foreground'}`}>
                    {formation.period}
                  </span>
                </div>
                {/*   <p className="text-muted-foreground">{formation.description}</p> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 