/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Navbar } from "@/components/Navbar"

export default function GLPIPage() {
  return (
    <main className="min-h-screen py-16 sm:py-24 px-4">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
          GLPI - Gestionnaire Libre de Parc Informatique
        </h1>

        <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
          <p className="text-lg text-muted-foreground text-center mb-8">
            GLPI est un logiciel libre de gestion de parc informatique et de helpdesk, 
            permettant de gérer efficacement les ressources informatiques d&apos;une entreprise.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Fonctionnalités Principales</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Gestion du parc informatique (ordinateurs, imprimantes, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Gestion des licences logicielles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Gestion des tickets d&apos;incident et de demande</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Gestion des contrats de maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Gestion des fournisseurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Gestion des budgets</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Avantages</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Interface intuitive et personnalisable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Multi-utilisateurs avec gestion des droits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Rapports et statistiques avancés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>API REST pour l&apos;intégration avec d&apos;autres outils</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Communauté active et mises à jour régulières</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Support multilingue</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center mb-8">Interface et Fonctionnalités</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-4">
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/glpi/dashboard.webp"
                    alt="Tableau de bord GLPI"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tableau de Bord</h3>
                <p className="text-muted-foreground">
                  Vue d&apos;ensemble des éléments importants : tickets, matériel, licences et contrats.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/glpi/ticket.webp"
                    alt="Gestion des tickets GLPI"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gestion des Tickets</h3>
                <p className="text-muted-foreground">
                  Suivi des incidents et demandes avec système de priorité et d&apos;escalade.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/glpi/inventory.webp"
                    alt="Inventaire GLPI"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inventaire</h3>
                <p className="text-muted-foreground">
                  Gestion détaillée du parc informatique avec suivi des configurations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/glpi/reports.webp"
                    alt="Rapports GLPI"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rapports</h3>
                <p className="text-muted-foreground">
                  Génération de rapports personnalisés pour l&apos;analyse et la prise de décision.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
} 