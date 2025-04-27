import React from 'react';

// Interface pour les événements de la timeline
interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  link?: string;
}

// Données de la timeline
const timelineEvents: TimelineEvent[] = [
  {
    date: "Mars 2024",
    title: "Sortie de Next.js 14.1",
    description: "Améliorations majeures des performances et de l'expérience développeur",
    link: "https://nextjs.org/blog/next-14-1"
  },
  {
    date: "Février 2024",
    title: "WebGPU devient stable",
    description: "L'API WebGPU devient stable dans Chrome, ouvrant la voie à de nouvelles possibilités de rendu 3D et de calcul sur le web",
    link: "https://developer.chrome.com/blog/webgpu-stable"
  },
  {
    date: "Janvier 2024",
    title: "React 19 Preview",
    description: "Annonce des premières fonctionnalités de React 19 avec un focus sur les performances et l'expérience développeur",
    link: "https://react.dev/blog/2024/01/03/react-19-preview"
  },
  {
    date: "Décembre 2023",
    title: "TypeScript 5.3",
    description: "Nouvelles fonctionnalités pour améliorer le typage et la sécurité du code",
    link: "https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/"
  },
  {
    date: "Novembre 2023",
    title: "Vue.js 3.4",
    description: "Améliorations significatives des performances et nouvelles fonctionnalités",
    link: "https://blog.vuejs.org/posts/vue-3-4"
  },
  {
    date: "Octobre 2023",
    title: "Web Components v1",
    description: "Adoption généralisée des Web Components par les principaux navigateurs",
    link: "https://developer.mozilla.org/fr/docs/Web/API/Web_components"
  },
  {
    date: "Septembre 2023",
    title: "CSS Container Queries",
    description: "Support complet des Container Queries dans tous les navigateurs modernes",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_container_queries"
  }
];

// Composant Timeline
export const Timeline: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        {/* Ligne verticale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
        
        {/* Événements */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {/* Point sur la timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              
              {/* Carte d'événement */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-sm text-gray-500 mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                  {event.link && (
                    <a 
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
                    >
                      En savoir plus →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 