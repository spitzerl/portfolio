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
    { name: "Python", iconPath: "/devicons/python/python-original.svg" },
    { name: "SQL", iconPath: "/devicons/mysql/mysql-original.svg" },
    { name: "C#", iconPath: "/devicons/csharp/csharp-original.svg" },
  ],
  frameworks: [
    { name: "VueJS", iconPath: "/devicons/vuejs/vuejs-original.svg" },
    { name: "React", iconPath: "/devicons/react/react-original.svg" },
    { name: "Laravel", iconPath: "/devicons/laravel/laravel-original.svg" },
    { name: "CodeIgniter", iconPath: "/devicons/codeigniter/codeigniter-plain.svg" },
    { name: "PlayWright", iconPath: "/devicons/playwright/playwright-original.svg" },
    { name: "dotNET", iconPath: "/devicons/dotnetcore/dotnetcore-original.svg" },
  ],
  databases: [
    { name: "MySQL", iconPath: "/devicons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", iconPath: "/devicons/postgresql/postgresql-original.svg" },
    { name: "Microsoft SQL Server", iconPath: "/devicons/sqlserver/sqlserver-original.svg" },
  ],
  devTools: [
    { name: "Git", iconPath: "/devicons/git/git-original.svg" },
    { name: "GitHub", iconPath: "/devicons/github/github-original.svg" },
    { name: "Azure", iconPath: "/devicons/azure/azure-original.svg" },
    { name: "Docker", iconPath: "/devicons/docker/docker-original.svg" },
    { name: "Linux", iconPath: "/devicons/linux/linux-original.svg" },
  ],
  otherTools: [
    { name: "Jira", iconPath: "/devicons/jira/jira-original.svg" },
    { name: "Trello", iconPath: "/devicons/trello/trello-plain.svg" },
    { name: "Confluence", iconPath: "/devicons/confluence/confluence-original.svg" },
    { name: "Teams", iconPath: "/devicons/teams/teams-original.svg" },
    { name: "Office", iconPath: "/devicons/office/office-original.svg" },
    { name: "WordPress", iconPath: "/devicons/wordpress/wordpress-original.svg" },
  ],
}

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">À Propos</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Parcours</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Diplômé du BTS SIO SLAM et actuellement étudiant en Bachelor SIN option DevOps Full Stack à l&apos;EPSI Montpellier, je suis passionné par l&apos;informatique, le développement web et l&apos;infrastructure.
                </p>
                <p>
                  J&apos;ai acquis des compétences solides dans le développement d&apos;applications web modernes et l&apos;automatisation des déploiements, avec pour objectif de faciliter la vie des utilisateurs.
                </p>
                <p>
                  Mon ambition est de continuer à évoluer dans ce domaine en constante innovation.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-4">Langages de programmation</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <SkillBadge key={skill.name} {...skill} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4">Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill) => (
                      <SkillBadge key={skill.name} {...skill} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4">Bases de données</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill) => (
                      <SkillBadge key={skill.name} {...skill} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4">Outils de développement</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.devTools.map((skill) => (
                      <SkillBadge key={skill.name} {...skill} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4">Outils divers</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.otherTools.map((skill) => (
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