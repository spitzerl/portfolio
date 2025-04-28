"use client";

import React, { useState } from 'react';
import { Modal } from './Modal';

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
    title: "CSS Container Queries",
    description: "Support complet des Container Queries dans tous les navigateurs modernes",
    details: "Les Container Queries permettent :\n\n" +
      "• Design responsive basé sur le conteneur\n" +
      "• Meilleure réutilisation des composants\n" +
      "• Layouts plus flexibles\n" +
      "• Support des media queries au niveau du conteneur\n" +
      "• Compatibilité avec les frameworks modernes",
    presentation: "Les Container Queries sont une fonctionnalité CSS qui permet de créer des designs responsifs basés sur la taille du conteneur plutôt que sur la taille de la fenêtre. Cette technologie révolutionne la façon dont nous créons des composants réutilisables en permettant une adaptation plus fine et plus contextuelle du design.",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_container_queries"
  },
  {
    date: "Octobre 2023",
    title: "Web Components v1",
    description: "Adoption généralisée des Web Components par les principaux navigateurs",
    details: "Les Web Components v1 offrent :\n\n" +
      "• Composants réutilisables natifs\n" +
      "• Shadow DOM pour l'encapsulation\n" +
      "• Templates HTML\n" +
      "• Custom Elements\n" +
      "• Support multiplateforme complet",
    presentation: "Les Web Components sont un ensemble de technologies web standard qui permettent de créer des composants réutilisables personnalisés. Cette technologie permet de développer des composants qui fonctionnent dans n'importe quel framework ou sans framework, offrant une solution native pour la réutilisation de code.",
    link: "https://developer.mozilla.org/fr/docs/Web/API/Web_components"
  },
  {
    date: "Novembre 2023",
    title: "Vue.js 3.4",
    description: "Améliorations significatives des performances et nouvelles fonctionnalités",
    details: "Vue.js 3.4 apporte :\n\n" +
      "• Compilateur plus rapide\n" +
      "• Meilleure réactivité\n" +
      "• Nouveaux composants\n" +
      "• Support TypeScript amélioré\n" +
      "• Optimisations du SSR",
    presentation: "Vue.js est un framework JavaScript progressif pour construire des interfaces utilisateur. La version 3.4 représente une étape importante dans l'évolution du framework, avec des améliorations majeures des performances et de l'expérience développeur. Vue.js se distingue par son approche progressive et sa facilité d'apprentissage.",
    link: "https://blog.vuejs.org/posts/vue-3-4"
  },
  {
    date: "Décembre 2023",
    title: "TypeScript 5.3",
    description: "Nouvelles fonctionnalités pour améliorer le typage et la sécurité du code",
    details: "TypeScript 5.3 introduit :\n\n" +
      "• Nouveau système de types pour les décorateurs\n" +
      "• Améliorations des génériques\n" +
      "• Meilleure inférence de types\n" +
      "• Support des imports/exports de types\n" +
      "• Optimisations des performances",
    presentation: "TypeScript est un sur-ensemble typé de JavaScript qui ajoute des types statiques optionnels au langage. La version 5.3 apporte des améliorations significatives dans la façon dont les types sont gérés et inférés, rendant le développement plus sûr et plus efficace. Ces changements permettent une meilleure détection des erreurs et une meilleure expérience de développement.",
    link: "https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/"
  },
  {
    date: "Janvier 2024",
    title: "React 19 Preview",
    description: "Annonce des premières fonctionnalités de React 19 avec un focus sur les performances et l'expérience développeur",
    details: "React 19 apporte des innovations majeures :\n\n" +
      "• Nouveau système de compilation\n" +
      "• Améliorations du concurrent mode\n" +
      "• Meilleure gestion de la mémoire\n" +
      "• Nouvelles API pour les hooks\n" +
      "• Support amélioré du SSR",
    presentation: "React est une bibliothèque JavaScript pour construire des interfaces utilisateur. React 19 marque une étape importante dans l'évolution de la bibliothèque, avec un focus sur les performances et la simplification du développement. Cette version apporte des améliorations significatives dans la façon dont React gère le rendu et l'état des composants.",
    link: "https://react.dev/blog/2024/01/03/react-19-preview"
  },
  {
    date: "Février 2024",
    title: "WebGPU devient stable",
    description: "L'API WebGPU devient stable dans Chrome, ouvrant la voie à de nouvelles possibilités de rendu 3D et de calcul sur le web",
    details: "WebGPU représente une avancée majeure pour les graphiques web :\n\n" +
      "• Support natif du GPU\n" +
      "• Meilleures performances que WebGL\n" +
      "• Compatible avec les shaders modernes\n" +
      "• Idéal pour le machine learning dans le navigateur\n" +
      "• Support multiplateforme (Chrome, Edge, Firefox en développement)",
    presentation: "WebGPU est la nouvelle API graphique standard du web, conçue pour succéder à WebGL. Elle offre un accès direct aux capacités du GPU, permettant des performances supérieures pour les applications 3D, le machine learning, et les calculs parallèles. Cette technologie ouve la voie à de nouvelles applications web qui nécessitent des capacités de calcul avancées.",
    link: "https://developer.chrome.com/blog/webgpu-stable"
  },
  {
    date: "Mars 2024",
    title: "Next.js 14.1",
    description: "Améliorations majeures des performances et de l'expérience développeur",
    details: "Next.js 14.1 apporte des améliorations significatives :\n\n" +
      "• Partial Prerendering (PPR) en preview\n" +
      "• Optimisations des performances du serveur\n" +
      "• Meilleure gestion du cache\n" +
      "• Support amélioré des métadonnées\n" +
      "• Nouvelles API pour la gestion des assets",
    presentation: "Next.js est un framework React qui permet de créer des applications web full-stack. Il offre le rendu côté serveur (SSR), la génération statique (SSG), et le rendu côté client. Next.js 14.1 représente une étape importante dans l'évolution du framework, avec un focus particulier sur les performances et l'expérience développeur.",
    link: "https://nextjs.org/blog/next-14-1"
  },
  {
    date: "Avril 2024",
    title: "Astro 4.0",
    description: "Nouvelle version majeure du framework Astro avec des améliorations de performance",
    details: "Astro 4.0 apporte des améliorations significatives :\n\n" +
      "• Nouveau système de rendu View Transitions\n" +
      "• Support amélioré des images et des assets\n" +
      "• Meilleure intégration avec les frameworks\n" +
      "• Optimisations des performances\n" +
      "• Nouveaux outils de développement",
    presentation: "Astro est un framework web moderne qui permet de créer des sites web performants en utilisant une approche 'Islands Architecture'. Il permet de mélanger différents frameworks et technologies dans un même projet, avec un focus sur les performances et l'expérience utilisateur.",
    link: "https://astro.build/blog/astro-4/"
  },
  {
    date: "Mai 2024",
    title: "Svelte 5.0",
    description: "Sortie de Svelte 5 avec un nouveau système de réactivité",
    details: "Svelte 5.0 apporte des innovations majeures :\n\n" +
      "• Nouveau système de réactivité fine\n" +
      "• Compilateur optimisé\n" +
      "• Support TypeScript amélioré\n" +
      "• Nouveaux composants natifs\n" +
      "• Meilleure intégration avec les outils",
    presentation: "Svelte est un framework JavaScript qui compile le code en JavaScript vanilla hautement optimisé. La version 5.0 représente une refonte majeure du framework, avec un focus sur les performances et la simplicité du développement. Cette version apporte des améliorations significatives dans la façon dont Svelte gère la réactivité et le rendu des composants.",
    link: "https://svelte.dev/blog/announcing-svelte-5"
  },
  {
    date: "Juin 2024",
    title: "Vue.js 4.0",
    description: "Nouvelle version majeure de Vue.js avec des améliorations majeures",
    details: "Vue.js 4.0 introduit :\n\n" +
      "• Nouveau système de compilation\n" +
      "• Meilleure réactivité\n" +
      "• Support amélioré du SSR\n" +
      "• Nouveaux composants\n" +
      "• Optimisations des performances",
    presentation: "Vue.js 4.0 marque une étape importante dans l'évolution du framework, avec un focus sur les performances et l'expérience développeur. Cette version apporte des améliorations significatives dans la façon dont Vue.js gère le rendu et l'état des composants.",
    link: "https://blog.vuejs.org/posts/vue-4-0"
  },
  {
    date: "Juillet 2024",
    title: "React 19",
    description: "Sortie officielle de React 19",
    details: "React 19 apporte des innovations majeures :\n\n" +
      "• Nouveau système de compilation\n" +
      "• Améliorations du concurrent mode\n" +
      "• Meilleure gestion de la mémoire\n" +
      "• Nouvelles API pour les hooks\n" +
      "• Support amélioré du SSR",
    presentation: "React 19 représente une étape majeure dans l'évolution de la bibliothèque, avec un focus sur les performances et la simplification du développement. Cette version apporte des améliorations significatives dans la façon dont React gère le rendu et l'état des composants.",
    link: "https://react.dev/blog/2024/07/react-19"
  },
  {
    date: "Août 2024",
    title: "Next.js 15",
    description: "Nouvelle version majeure de Next.js",
    details: "Next.js 15 apporte :\n\n" +
      "• Partial Prerendering stable\n" +
      "• Nouveau système de routing\n" +
      "• Optimisations des performances\n" +
      "• Support amélioré des métadonnées\n" +
      "• Nouvelles API pour la gestion des assets",
    presentation: "Next.js 15 représente une étape importante dans l'évolution du framework, avec un focus sur les performances et l'expérience développeur. Cette version apporte des améliorations significatives dans la façon dont Next.js gère le rendu et le routing.",
    link: "https://nextjs.org/blog/next-15"
  },
  {
    date: "Septembre 2024",
    title: "TypeScript 6.0",
    description: "Nouvelle version majeure de TypeScript",
    details: "TypeScript 6.0 introduit :\n\n" +
      "• Nouveau système de types\n" +
      "• Améliorations des génériques\n" +
      "• Meilleure inférence de types\n" +
      "• Support des imports/exports de types\n" +
      "• Optimisations des performances",
    presentation: "TypeScript 6.0 apporte des améliorations significatives dans la façon dont les types sont gérés et inférés, rendant le développement plus sûr et plus efficace. Ces changements permettent une meilleure détection des erreurs et une meilleure expérience de développement.",
    link: "https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/"
  },
  {
    date: "Octobre 2024",
    title: "WebGPU 2.0",
    description: "Nouvelle version de l'API WebGPU",
    details: "WebGPU 2.0 apporte :\n\n" +
      "• Support des ray tracing\n" +
      "• Meilleures performances\n" +
      "• Support des shaders modernes\n" +
      "• Idéal pour le machine learning\n" +
      "• Support multiplateforme complet",
    presentation: "WebGPU 2.0 représente une avancée majeure pour les graphiques web, avec un focus sur les performances et les capacités. Cette version apporte des améliorations significatives dans la façon dont WebGPU gère le rendu et les calculs.",
    link: "https://developer.chrome.com/blog/webgpu-2-0"
  },
  {
    date: "Novembre 2024",
    title: "Vue.js 4.1",
    description: "Améliorations majeures de Vue.js",
    details: "Vue.js 4.1 apporte :\n\n" +
      "• Compilateur plus rapide\n" +
      "• Meilleure réactivité\n" +
      "• Nouveaux composants\n" +
      "• Support TypeScript amélioré\n" +
      "• Optimisations du SSR",
    presentation: "Vue.js 4.1 apporte des améliorations significatives dans la façon dont Vue.js gère le rendu et l'état des composants, avec un focus sur les performances et l'expérience développeur.",
    link: "https://blog.vuejs.org/posts/vue-4-1"
  },
  {
    date: "Décembre 2024",
    title: "React 19.1",
    description: "Améliorations majeures de React",
    details: "React 19.1 apporte :\n\n" +
      "• Améliorations du concurrent mode\n" +
      "• Meilleure gestion de la mémoire\n" +
      "• Nouvelles API pour les hooks\n" +
      "• Support amélioré du SSR\n" +
      "• Optimisations des performances",
    presentation: "React 19.1 apporte des améliorations significatives dans la façon dont React gère le rendu et l'état des composants, avec un focus sur les performances et l'expérience développeur.",
    link: "https://react.dev/blog/2024/12/react-19-1"
  },
  {
    date: "Janvier 2025",
    title: "Next.js 15.1",
    description: "Améliorations majeures de Next.js",
    details: "Next.js 15.1 apporte :\n\n" +
      "• Partial Prerendering stable\n" +
      "• Nouveau système de routing\n" +
      "• Optimisations des performances\n" +
      "• Support amélioré des métadonnées\n" +
      "• Nouvelles API pour la gestion des assets",
    presentation: "Next.js 15.1 apporte des améliorations significatives dans la façon dont Next.js gère le rendu et le routing, avec un focus sur les performances et l'expérience développeur.",
    link: "https://nextjs.org/blog/next-15-1"
  },
  {
    date: "Février 2025",
    title: "Svelte 5.1",
    description: "Améliorations majeures de Svelte",
    details: "Svelte 5.1 apporte :\n\n" +
      "• Améliorations du système de réactivité\n" +
      "• Compilateur optimisé\n" +
      "• Support TypeScript amélioré\n" +
      "• Nouveaux composants natifs\n" +
      "• Meilleure intégration avec les outils",
    presentation: "Svelte 5.1 apporte des améliorations significatives dans la façon dont Svelte gère la réactivité et le rendu des composants, avec un focus sur les performances et l'expérience développeur.",
    link: "https://svelte.dev/blog/announcing-svelte-5-1"
  },
  {
    date: "Mars 2025",
    title: "Vue.js 4.2",
    description: "Améliorations majeures de Vue.js",
    details: "Vue.js 4.2 apporte :\n\n" +
      "• Compilateur plus rapide\n" +
      "• Meilleure réactivité\n" +
      "• Nouveaux composants\n" +
      "• Support TypeScript amélioré\n" +
      "• Optimisations du SSR",
    presentation: "Vue.js 4.2 apporte des améliorations significatives dans la façon dont Vue.js gère le rendu et l'état des composants, avec un focus sur les performances et l'expérience développeur.",
    link: "https://blog.vuejs.org/posts/vue-4-2"
  },
  {
    date: "Avril 2025",
    title: "React 19.2",
    description: "Améliorations majeures de React",
    details: "React 19.2 apporte :\n\n" +
      "• Améliorations du concurrent mode\n" +
      "• Meilleure gestion de la mémoire\n" +
      "• Nouvelles API pour les hooks\n" +
      "• Support amélioré du SSR\n" +
      "• Optimisations des performances",
    presentation: "React 19.2 apporte des améliorations significatives dans la façon dont React gère le rendu et l'état des composants, avec un focus sur les performances et l'expérience développeur.",
    link: "https://react.dev/blog/2025/04/react-19-2"
  }
];

// Composant Timeline
export const Timeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        {/* Ligne verticale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
        
        {/* Événements */}
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {/* Point sur la timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              
              {/* Carte d'événement */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div 
                  className="bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="text-sm text-gray-500 mb-1">{event.date}</div>
                  <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                  <p className="text-gray-600 text-sm h-10 overflow-hidden">
                    {truncateText(event.description, 80)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <Modal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={selectedEvent.title}
          date={selectedEvent.date}
          description={selectedEvent.description}
          details={selectedEvent.details}
          presentation={selectedEvent.presentation}
          link={selectedEvent.link}
        />
      )}
    </div>
  );
}; 