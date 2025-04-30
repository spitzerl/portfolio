"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Interface pour les événements de la timeline
interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  details: string;
  presentation: string;
  link: string;
}

// Fonction utilitaire pour tronquer le texte
const truncateText = (text: string, maxLength: number = 100) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

// Données de la timeline
const timelineEvents: TimelineEvent[] = [
  {
    date: "Juillet 2023",
    title: "Standardisation accrue autour de ECMAScript",
    description: "De nouvelles fonctionnalités JS sont standardisées, favorisant un écosystème unifié",
    details: "Les apports récents incluent :\n\n" +
      "• Les décorateurs\n" +
      "• Les Records & Tuples\n" +
      "• Le pattern matching\n" +
      "• Les améliorations des Promises\n" +
      "• Une meilleure compatibilité inter-navigateurs",
    presentation: "La standardisation continue d'ECMAScript garantit une meilleure cohérence entre les plateformes et facilite l'adoption de nouvelles fonctionnalités dans les navigateurs modernes.",
    link: "https://github.com/tc39/proposals"
  },
{
    date: "Août 2023",
    title: "Frameworks CSS modernes gagnent en popularité",
    description: "Adoption accrue de Tailwind CSS, Vanilla Extract et autres outils utilitaires",
    details: "Les frameworks CSS modernes permettent :\n\n" +
      "• Des composants plus modulaires\n" +
      "• Un développement plus rapide\n" +
      "• Moins de surcharge CSS\n" +
      "• Une meilleure maintenabilité\n" +
      "• Des performances accrues",
    presentation: "L'émergence de nouveaux frameworks CSS utilitaires améliore la rapidité de prototypage tout en maintenant une base de code propre et évolutive.",
    link: "https://tailwindcss.com/blog/utility-first-css"
  },
{
    date: "Septembre 2023",
    title: "L'IA générative révolutionne le développement web",
    description: "Intégration massive des modèles d'IA dans les outils de développement web",
    details: "Les avancées majeures incluent :\n\n" +
      "• Assistants de code basés sur l'IA\n" +
      "• Génération automatique de composants\n" +
      "• Optimisation intelligente des performances\n" +
      "• Tests automatisés générés par l'IA\n" +
      "• Refactoring intelligent du code",
    presentation: "L'intelligence artificielle transforme radicalement la façon dont nous développons des applications web. Les outils basés sur l'IA permettent d'accélérer le développement, d'améliorer la qualité du code et d'automatiser des tâches répétitives.",
    link: "https://www.w3.org/blog/2023/09/ai-in-web-development/"
  },
{
    date: "Octobre 2023",
    title: "WebAssembly 2.0",
    description: "Nouvelle version de WebAssembly avec support multithreading et garbage collection",
    details: "WebAssembly 2.0 apporte :\n\n" +
      "• Support natif du multithreading\n" +
      "• Garbage collection intégré\n" +
      "• Meilleures performances\n" +
      "• Support des langages de haut niveau\n" +
      "• Déploiement simplifié",
    presentation: "WebAssembly 2.0 représente une avancée majeure pour les applications web performantes. Cette technologie permet d'exécuter du code natif dans le navigateur avec des performances proches du natif, ouvrant la voie à de nouvelles applications web complexes.",
    link: "https://webassembly.org/roadmap/"
  },
{
    date: "Décembre 2023",
    title: "La révolution du Edge Computing",
    description: "Déploiement massif des applications web sur le edge",
    details: "Les avantages du Edge Computing :\n\n" +
      "• Latence ultra-faible\n" +
      "• Meilleure disponibilité\n" +
      "• Réduction des coûts\n" +
      "• Sécurité renforcée\n" +
      "• Scalabilité améliorée",
    presentation: "Le Edge Computing révolutionne l'architecture des applications web en rapprochant le traitement des données des utilisateurs. Cette approche permet d'améliorer significativement les performances et l'expérience utilisateur.",
    link: "https://www.cloudflare.com/learning/edge/what-is-edge-computing/"
  },
{
    date: "Janvier 2024",
    title: "L'accessibilité devient une priorité",
    description: "Nouvelles normes et outils pour l'accessibilité web",
    details: "Les avancées incluent :\n\n" +
      "• WCAG 2.2\n" +
      "• Outils automatisés d'audit\n" +
      "• Composants accessibles par défaut\n" +
      "• Support amélioré des lecteurs d'écran\n" +
      "• Formation obligatoire",
    presentation: "L'accessibilité web devient une priorité absolue avec de nouvelles normes et outils. Cette évolution permet de rendre le web accessible à tous les utilisateurs, quel que soit leur handicap.",
    link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
{
    date: "Février 2024",
    title: "TypeScript 5.4 : Les nouvelles fonctionnalités",
    description: "Mise à jour majeure de TypeScript avec de nouvelles capacités",
    details: "Les améliorations incluent :\n\n" +
      "• Nouveau système de types\n" +
      "• Meilleure inférence de types\n" +
      "• Support des décorateurs\n" +
      "• Optimisations des performances\n" +
      "• Nouveaux utilitaires de types",
    presentation: "TypeScript 5.4 apporte des améliorations significatives pour le typage statique, rendant le développement plus sûr et plus productif.",
    link: "https://devblogs.microsoft.com/typescript/announcing-typescript-5-4/"
  },
{
    date: "Mars 2024",
    title: "React 19 Beta : Les nouveautés majeures",
    description: "Annonce de la version bêta de React 19 avec des améliorations significatives",
    details: "Les innovations incluent :\n\n" +
      "• Actions de serveur intégrées\n" +
      "• Optimisations de rendu automatiques\n" +
      "• Nouveau système de gestion d'état\n" +
      "• Meilleure gestion des effets secondaires\n" +
      "• Support amélioré du SSR",
    presentation: "React 19 apporte des améliorations majeures en termes de performances et de développeur experience, rendant les applications plus rapides et plus faciles à maintenir.",
    link: "https://react.dev/blog/2024/03/19/react-19-beta"
  },
{
    date: "Mars 2024",
    title: "WebGPU : La révolution du rendu 3D dans le navigateur",
    description: "Lancement officiel de WebGPU, permettant des performances graphiques proches du natif",
    details: "Les avancées majeures incluent :\n\n" +
      "• Support natif du GPU dans le navigateur\n" +
      "• Performances 3D exceptionnelles\n" +
      "• Support des shaders modernes\n" +
      "• Intégration avec WebGL et WebGL2\n" +
      "• Optimisation pour l'IA et le machine learning",
    presentation: "WebGPU représente une avancée majeure dans les capacités graphiques du web, permettant de créer des applications 3D performantes directement dans le navigateur sans plugins.",
    link: "https://developer.mozilla.org/fr/docs/Web/API/WebGPU_API"
  },
{
    date: "Janvier 2025",
    title: "L'IA dans le développement web : La prochaine révolution",
    description: "Intégration avancée de l'IA dans les outils de développement web",
    details: "Les avancées majeures incluent :\n\n" +
      "• Génération automatique de tests unitaires\n" +
      "• Optimisation intelligente du code\n" +
      "• Détection automatique des vulnérabilités\n" +
      "• Génération de documentation\n" +
      "• Refactoring intelligent",
    presentation: "L'intelligence artificielle continue de transformer le développement web avec des outils toujours plus sophistiqués et autonomes.",
    link: "https://www.w3.org/blog/2025/01/ai-in-web-development/"
  },
{
  date: "Février 2025",
  title: "L'accessibilité renforcée par l'IA",
  description: "Les outils IA permettent une personnalisation automatique de l'accessibilité",
  details: "Les avancées majeures incluent :\n\n" +
    "• Thèmes adaptatifs\n" +
    "• Ajustement automatique des contrastes\n" +
    "• Navigation guidée par IA\n" +
    "• Audit automatique des sites\n" +
    "• Assistance vocale intégrée",
  presentation: "Les outils d'accessibilité se modernisent grâce à l'IA, rendant les sites plus inclusifs sans effort de la part des développeurs.",
  link: "https://www.w3.org/WAI/news/2025/02/ai-a11y/"
},
{
  date: "Mars 2025",
  title: "Frameworks fullstack intégrés par défaut",
  description: "Les nouveaux frameworks web intègrent directement frontend, backend, base de données et IA",
  details: "Les améliorations majeures incluent :\n\n" +
    "• CLI unifiée\n" +
    "• Déploiement serverless natif\n" +
    "• Authentification simplifiée\n" +
    "• Intégration IA prête à l'emploi\n" +
    "• Performances optimisées",
  presentation: "Les frameworks deviennent tout-en-un, facilitant le développement rapide et la maintenance des applications complexes.",
  link: "https://jamstack.org/blog/2025-frameworks-unifies/"
}
];

// Composant Timeline
export const Timeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  // Gestionnaire pour la touche Échap
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedEvent(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        {/* Ligne verticale */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>
        <div className="flex flex-col gap-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex md:items-center min-h-[90px]">
              {/* Point sur la timeline */}
              <div className="absolute left-4 top-6 md:left-1/2 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg z-10"></div>
              {/* Ligne pointillée */}
              <div
                className={`hidden md:block absolute top-1/2 w-1/2 h-0.5 border-t-2 border-dashed border-gray-300 z-0
                  ${index % 2 === 0 ? 'right-1/2' : 'left-1/2'}`}
              ></div>
              {/* Carte d'événement */}
              <div
                className={`ml-12 md:ml-0 w-full md:w-5/12 z-20
                  ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}
                style={{ order: 2 }}
              >
                <div
                  className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-100"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="text-sm text-blue-500 font-medium mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
                  <p className="text-gray-600 text-sm h-12 overflow-hidden">
                    {truncateText(event.description, 80)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal avec effet de flou */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm text-blue-500 font-medium mb-1">{selectedEvent.date}</div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedEvent.title}</h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedEvent(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-4">{selectedEvent.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Contexte</h3>
                    <p className="text-gray-700">{selectedEvent.presentation}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Détails techniques</h3>
                    <div className="whitespace-pre-line text-gray-700">{selectedEvent.details}</div>
                  </div>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedEvent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    En savoir plus
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 