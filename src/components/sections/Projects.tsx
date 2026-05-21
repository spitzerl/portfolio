"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pin } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const projects = [
  {
    title: "Portfolio V2",
    description: "Portfolio présentant mes compétences et mes projets.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI", "Vercel"],
    liveLink: "https://www.lucasspitzer.fr",
    githubLink: "",
    year: "2025",
    type: "Personnel",
    pinned: true,
    image: "/projects/portfoliov2.png"
  },
  {
    title: "FlowTech AP3",
    description: "Site de e-commerce fictif vendant des ordinateurs, permet aux utilisateurs de s'inscrire, passer des commandes et aux vendeurs de gérer leurs produits.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "SQL Server", "CodeIgniter"],
    liveLink: "",
    githubLink: "https://github.com/Bts-Sio-CCI/flowtech-ap3",
    year: "2025",
    type: "BTS",
    pinned: false,
    image: "/projects/flowtech3.png"
  },
  {
    title: "Conférence sur l'IA",
    description: "Conférencier sur les IA lors de la Digiweek 2024 à Nîmes. Présentation du kit de sensibilisation à des étudiants",
    technologies: [],
    liveLink: "https://www.nimes-metropole.fr/actualites/9eme-edition-de-la-digiweek-de-nimes-metropole-les-20-21-novembre-2024-a-lhotel-communautaire-de-nimes-metropole.html",
    githubLink: "",
    year: "2024",
    type: "Autre",
    pinned: true,
    image: "/projects/conference-ia.jpg"
  },
  {
    title: "Kit IA V2",
    description: "Site à but pédagogique visant à sensibiliser les élèves aux enjeux des intelligences artificielles.",
    technologies: ["NuxtJS", "Bootstrap", "Tailwind CSS", "Vercel"],
    liveLink: "https://kit-sensibilisation-ia.vercel.app/",
    githubLink: "https://github.com/spitzerl/kit-sensibilisation-ia",
    year: "2024",
    type: "Personnel",
    pinned: true,
    image: "/projects/kit-ia-v2.png"
  },
  {
    title: "Sudbois Chargements",
    description: "Application web de gestion de chargements permettant de créer, modifier et suivre des expéditions avec mises à jour automatiques des statuts.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Shadcn UI"],
    liveLink: "https://sudbois-chargements.vercel.app",
    githubLink: "https://github.com/spitzerl/sudbois-chargements",
    year: "2025",
    type: "Personnel",
    pinned: false,
    image: ""
  },
  {
    title: "Dwarf Bot",
    description: "Bot Discord de gestion de serveur permettant de gérer les salons, rôles et événements pour une meilleure expérience utilisateur.",
    technologies: ["Node.js", "Discord.js", "JavaScript"],
    liveLink: "",
    githubLink: "https://github.com/spitzerl/dwarf-bot",
    year: "2025",
    type: "Personnel",
    pinned: false,
    image: ""
  },
  {
    title: "Cookbook Laravel",
    description: "Application web de gestion de recettes de cuisine développée dans le cadre du BTS SIO SLAM, avec architecture MVC et authentification.",
    technologies: ["Laravel", "PHP", "Bootstrap", "MySQL"],
    liveLink: "",
    githubLink: "https://github.com/spitzerl/cookbook-laravel",
    year: "2025",
    type: "BTS",
    pinned: false,
    image: ""
  },
  {
    title: "Projet Cuve CIRA",
    description: "Conception d'un dispositif de mesure du niveau de remplissage d'une cuve industrielle à l'aide d'un capteur ultrason, avec transmission Bluetooth.",
    technologies: ["Arduino", "C++", "Bluetooth", "Capteur ultrason"],
    liveLink: "",
    githubLink: "https://github.com/spitzerl/projet-cuve-cira",
    year: "2023",
    type: "Scolaire",
    pinned: false,
    image: ""
  },
]

export function Projects() {
  // Trier les projets : d'abord les épinglés, puis par année décroissante
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.pinned !== b.pinned) {
      return a.pinned ? -1 : 1
    }
    return parseInt(b.year) - parseInt(a.year)
  })

  return (
    <section id="projects" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Projets</h2>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((project) => (
            <Dialog key={project.title}>
              <DialogTrigger asChild>
                <Card className="flex flex-col h-full bg-card hover:bg-accent/50 transition-colors cursor-pointer">
                  <CardContent className="p-4 flex flex-col h-full">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{project.title}</h3>
                            {project.pinned && <Pin className="w-3 h-3 text-primary" />}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {project.year} • {project.type}
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
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Voir le site en direct pour le projet ${project.title}`}
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
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Voir le dépôt GitHub du projet ${project.title}`}
                          >
                            GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    {project.title}
                    {project.pinned && <Pin className="w-4 h-4 text-primary" />}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {project.image && project.image !== "" && (
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`Capture d'écran de ${project.title}`}
                        className="object-cover w-full h-full"
                        width={800}
                        height={450}
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {project.year} - {project.type}
                    </p>
                    <p className="text-sm">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs px-1.5 py-0">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-4">
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
                          aria-label={`Voir le site en direct du projet ${project.title}`}
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
                          aria-label={`Voir le code source du projet ${project.title} sur GitHub`}
                        >
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
} 