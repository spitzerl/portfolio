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
    link: "https://www.w3.org/blog/news/archives/2023/09/ai_in_web_development"
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
    date: "Novembre 2023",
    title: "L'essor du Web3 et des applications décentralisées",
    description: "Adoption croissante des technologies blockchain dans le développement web",
    details: "Les innovations incluent :\n\n" +
      "• Smart contracts sur le web\n" +
      "• Authentification décentralisée\n" +
      "• Stockage distribué\n" +
      "• Applications autonomes\n" +
      "• Nouveaux modèles économiques",
    presentation: "Le Web3 transforme l'internet en un réseau décentralisé où les utilisateurs ont un contrôle total sur leurs données. Cette évolution ouvre de nouvelles possibilités pour les applications web, notamment en termes de sécurité et de transparence.",
    link: "https://ethereum.org/fr/web3/"
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
    title: "La révolution du Web Components",
    description: "Adoption massive des Web Components dans les applications web modernes",
    details: "Les avantages des Web Components :\n\n" +
      "• Réutilisabilité native\n" +
      "• Encapsulation CSS\n" +
      "• Compatibilité cross-framework\n" +
      "• Performance optimale\n" +
      "• Maintenance simplifiée",
    presentation: "Les Web Components représentent une avancée majeure dans le développement web en permettant de créer des composants réutilisables qui fonctionnent dans n'importe quel framework ou sans framework.",
    link: "https://developer.mozilla.org/fr/docs/Web/API/Web_components"
  },
  {
    date: "Mars 2024",
    title: "Le futur du CSS",
    description: "Nouvelles fonctionnalités CSS transformant le design web",
    details: "Les innovations CSS incluent :\n\n" +
      "• Container Queries\n" +
      "• Cascade Layers\n" +
      "• View Transitions API\n" +
      "• Color Spaces\n" +
      "• Subgrid",
    presentation: "Le CSS évolue rapidement avec de nouvelles fonctionnalités qui transforment la façon dont nous concevons les interfaces web. Ces avancées permettent de créer des designs plus sophistiqués et plus maintenables.",
    link: "https://www.w3.org/Style/CSS/"
  },
  {
    date: "Avril 2024",
    title: "La sécurité web évolue",
    description: "Nouvelles menaces et solutions de sécurité web",
    details: "Les innovations de sécurité incluent :\n\n" +
      "• Protection contre les attaques quantiques\n" +
      "• Authentification sans mot de passe\n" +
      "• Détection des vulnérabilités par IA\n" +
      "• Sécurité Zero Trust\n" +
      "• Conformité renforcée",
    presentation: "La sécurité web évolue face aux nouvelles menaces. Les développeurs doivent adopter de nouvelles pratiques et outils pour protéger leurs applications et leurs utilisateurs.",
    link: "https://owasp.org/"
  },
  {
    date: "Mai 2024",
    title: "Le futur du développement web",
    description: "Tendances émergentes dans le développement web",
    details: "Les tendances incluent :\n\n" +
      "• Low-Code/No-Code\n" +
      "• Micro-frontends\n" +
      "• Serverless\n" +
      "• WebAssembly\n" +
      "• Edge Computing",
    presentation: "Le développement web continue d'évoluer avec de nouvelles approches et technologies. Ces tendances transforment la façon dont nous construisons et déployons les applications web.",
    link: "https://www.w3.org/TR/"
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