"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pin, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "FlowTech AP3",
    description: "Site de e-commerce fictif vendant des ordinateurs, permet aux utilisateurs de s'inscrire, passer des commandes et aux vendeurs de gérer leurs produits.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "SQL Server", "CodeIgniter"],
    liveLink: "",
    githubLink: "https://github.com/Bts-Sio-CCI/flowtech-ap3",
    year: "2025",
    type: "BTS",
    pinned: true
  },
  {
    title: "Kit IA",
    description: "Site à but pédagogique visant à sensibiliser les élèves aux enjeux des intelligences artificielles.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    liveLink: "https://kit-sensibilisation-ia.vercel.app/",
    githubLink: "https://github.com/spitzerl/kit-sensibilisation-ia",
    year: "2024",
    type: "Personnel",
    pinned: true
  },
  {
    title: "FlowTech AP2",
    description: "Site de e-commerce fictif vendant des ordinateurs, permet aux utilisateurs de s'inscrire, passer des commandes et aux vendeurs de gérer leurs produits.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    liveLink: "",
    githubLink: "https://github.com/Bts-Sio-CCI/FlowTechAP2",
    year: "2024",
    type: "BTS",
    pinned: false
  },
  {
    title: "ViewToDo",
    description: "Projet d'entrainement au framework VueJS avec Vuetify visant à développer une petite application de gestion de tâches.",
    technologies: ["Vue.js", "Vuetify", "JavaScript", "CSS"],
    liveLink: "",
    githubLink: "https://github.com/spitzerl/ViewTodo",
    year: "2024",
    type: "Personnel",
    pinned: false
  },
  {
    title: "FlowTech AP1",
    description: "Site vitrine de e-commerce fictif vendant des ordinateurs.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    liveLink: "",
    githubLink: "https://github.com/Bts-Sio-CCI/FlowTechAP1",
    year: "2023",
    type: "BTS",
    pinned: false
  }
]

export function Projects() {
  // Trier les projets : d'abord les épinglés, puis par année décroissante
  const sortedProjects = [...projects].sort((a, b) => {
    // Si l'un est épinglé et l'autre non, l'épinglé vient en premier
    if (a.pinned !== b.pinned) {
      return a.pinned ? -1 : 1
    }
    // Si les deux sont épinglés ou non épinglés, trier par année
    return parseInt(b.year) - parseInt(a.year)
  })

  return (
    <section id="projects" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Projets</h2>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((project) => (
            <Card key={project.title} className="flex flex-col h-full bg-card hover:bg-accent/5 transition-colors">
              <CardContent className="p-4 flex flex-col h-full">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{project.title}</h3>
                        {project.pinned && <Pin className="w-3 h-3 text-primary" />}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {project.year} - {project.type}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs px-1.5 py-0">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-auto pt-4">
                  {project.liveLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Voir le site
                      </a>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
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