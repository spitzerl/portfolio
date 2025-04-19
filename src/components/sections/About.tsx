"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = {
  "Langages et frameworks": ["HTML5", "CSS3", "JavaScript", "PHP", "SQL", "Bootstrap", "WordPress"],
  "Outils": ["Visual Studio Code", "Visual Studio", "Git", "GitHub", "DevOps", "phpMyAdmin", "JetBrains"],
  "Soft Skills": ["Travail en équipe", "Autonomie", "Adaptabilité", "Curiosité", "Créativité", "Organisation", "Communication"]
}

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">À Propos</h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Parcours</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Étudiant en BTS SIO SLAM, je passionné par l'informatique et le développement web. J'ai acquis des compétences solides dans le développement d'applications web et mobiles modernes grâce à mon parcours et ma motivation.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Aimant explorer ce domaine à la recherche des dernières évolutions, j'ai pour souhait de faciliter la vie des utilisateurs en proposant des logiciels fonctionnels et performants.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Mon objectif est de continuer à apprendre et à m'améliorer dans ce domaine en constante évolution.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Langages de programmation</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "SQL", "C#", "Java"].map((lang) => (
                      <Badge key={lang} variant="secondary" className="text-xs sm:text-sm">{lang}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Frameworks</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {["VueJS", "React", "Symfony", "CodeIgniter", "PlayWright", "dotNET"].map((framework) => (
                      <Badge key={framework} variant="secondary" className="text-xs sm:text-sm">{framework}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Outils de développement</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {["Git", "GitHub", "Azure", "Docker", "Linux"].map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-xs sm:text-sm">{tool}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Gestion de projet</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {["Jira", "Trello", "Confluence", "Teams"].map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-xs sm:text-sm">{tool}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 