"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface SkillBadgeProps {
  name: string
  iconPath: string
}

function SkillBadge({ name, iconPath }: SkillBadgeProps) {
  return (
    <Badge variant="secondary" className="text-xs sm:text-sm flex items-center gap-1">
      <Image 
        src={iconPath} 
        alt={`${name} icon`} 
        width={16} 
        height={16} 
        className="w-4 h-4"
      />
      {name}
    </Badge>
  )
}

const skills = {
  languages: [
    { name: "HTML", iconPath: "/devicons/html5/html5-original.svg" },
    { name: "CSS", iconPath: "/devicons/css3/css3-original.svg" },
    { name: "JavaScript", iconPath: "/devicons/javascript/javascript-original.svg" },
    { name: "TypeScript", iconPath: "/devicons/typescript/typescript-original.svg" },
    { name: "PHP", iconPath: "/devicons/php/php-original.svg" },
    { name: "SQL", iconPath: "/devicons/mysql/mysql-original.svg" },
    { name: "C#", iconPath: "/devicons/csharp/csharp-original.svg" },
    { name: "Java", iconPath: "/devicons/java/java-original.svg" },
  ],
  frameworks: [
    { name: "VueJS", iconPath: "/devicons/vuejs/vuejs-original.svg" },
    { name: "React", iconPath: "/devicons/react/react-original.svg" },
    { name: "Next.js", iconPath: "/devicons/nextjs/nextjs-original.svg" },
    { name: "Symfony", iconPath: "/devicons/symfony/symfony-original.svg" },
    { name: "CodeIgniter", iconPath: "/devicons/codeigniter/codeigniter-plain.svg" },
    { name: "PlayWright", iconPath: "/devicons/playwright/playwright-original.svg" },
    { name: "dotNET", iconPath: "/devicons/dotnetcore/dotnetcore-original.svg" },
  ],
  tools: [
    { name: "Git", iconPath: "/devicons/git/git-original.svg" },
    { name: "GitHub", iconPath: "/devicons/github/github-original.svg" },
    { name: "Azure", iconPath: "/devicons/azure/azure-original.svg" },
    { name: "Docker", iconPath: "/devicons/docker/docker-original.svg" },
    { name: "Linux", iconPath: "/devicons/linux/linux-original.svg" },
  ],
  projectManagement: [
    { name: "Jira", iconPath: "/devicons/jira/jira-original.svg" },
    { name: "Trello", iconPath: "/devicons/trello/trello-plain.svg" },
    { name: "Confluence", iconPath: "/devicons/confluence/confluence-original.svg" },
  ],
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
                Étudiant en BTS SIO SLAM, je suis passionné par l&apos;informatique et le développement web. J&apos;ai acquis des compétences solides dans le développement d&apos;applications web et mobiles modernes grâce à mon parcours et ma motivation.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Aimant explorer ce domaine à la recherche des dernières évolutions, j&apos;ai pour souhait de faciliter la vie des utilisateurs en proposant des logiciels fonctionnels et performants.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Mon objectif est de continuer à apprendre et à m&apos;améliorer dans ce domaine en constante évolution.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Langages de programmation</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skills.languages.map((skill) => (
                      <SkillBadge key={skill.name} {...skill} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Frameworks</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skills.frameworks.map((skill) => (
                      <SkillBadge key={skill.name} {...skill} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Outils de développement</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skills.tools.map((skill) => (
                      <SkillBadge key={skill.name} {...skill} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Gestion de projet</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skills.projectManagement.map((skill) => (
                      <SkillBadge key={skill.name} {...skill} />
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