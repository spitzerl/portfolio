"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "FlowTech",
    description: "Site de e-commerce fictif vendant des ordinateurs déjà montés ou configurables.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveLink: "",
    githubLink: "https://github.com/Bts-Sio-CCI/flowtech-ap3",
    year: "2025",
    type: "BTS"
  },
  {
    title: "Kit IA",
    description: "Site à but pédagogique visant à sensibiliser les élèves aux enjeux des intelligences artificielles.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    liveLink: "https://kit-sensibilisation-ia.vercel.app/",
    githubLink: "https://github.com/spitzerl/kit-sensibilisation-ia",
    year: "2024",
    type: "Personnel"
  },
  {
    title: "ViewToDo",
    description: "Projet d'entrainement au framework VueJS avec Vuetify visant à développer une petite application de gestion de tâches.",
    technologies: ["Vue.js", "Vuetify", "JavaScript", "CSS"],
    liveLink: "",
    githubLink: "https://github.com/spitzerl/ViewTodo",
    year: "2024",
    type: "Personnel"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Projets</h2>
        <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader className="pb-2 p-4 sm:p-6">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs sm:text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-2">
                  <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                  <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                    {project.year} - {project.type}
                  </div>
                </div>
                <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-2 sm:pt-4 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    disabled={!project.liveLink}
                    className={`w-full sm:w-auto ${!project.liveLink ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le site
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    disabled={!project.githubLink}
                    className={`w-full sm:w-auto ${!project.githubLink ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 