'use client';

import { useEffect } from 'react';

/**
 * Composant pour supprimer définitivement tous les indicateurs Next.js
 */
export default function RemoveNextIndicators() {
  useEffect(() => {
    // Fonction pour supprimer les indicateurs
    const removeIndicators = () => {
      // Sélecteurs pour tous les types d'indicateurs connus
      const selectors = [
        '[data-nextjs-route-indicator]',
        '[data-nextjs-build-indicator]',
        '[data-turbopack-indicator]',
        '[data-turbo-indicator]',
        '.__nextjs_build_indicator',
        '.next-build-indicator',
        // Sélecteurs par style CSS (position fixe en bas à gauche)
        'div[style*="position: fixed"][style*="bottom: 10px"][style*="left: 20px"]',
        'div[style*="position:fixed"][style*="bottom:10px"][style*="left:20px"]',
        'div[style*="z-index: 9000"]',
        'div[style*="z-index:9000"]',
        // Sélecteurs pour les nouveaux indicateurs Next.js 15
        '[data-nextjs-router-indicator]',
        '[data-next-dev-indicator]'
      ];

      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          if (element && element.parentNode) {
            element.parentNode.removeChild(element);
          }
        });
      });

      // Recherche plus agressive : tous les divs en position fixe en bas à gauche
      const allFixedDivs = document.querySelectorAll('div[style*="position: fixed"], div[style*="position:fixed"]');
      allFixedDivs.forEach(div => {
        const style = div.getAttribute('style') || '';
        if (
          (style.includes('bottom') && style.includes('left')) ||
          (style.includes('z-index: 9000')) ||
          div.textContent?.includes('Route') ||
          div.textContent?.includes('Static') ||
          div.innerHTML?.includes('nextjs')
        ) {
          if (div.parentNode) {
            div.parentNode.removeChild(div);
          }
        }
      });
    };

    // Supprimer immédiatement
    removeIndicators();

    // Supprimer périodiquement au cas où l'indicateur se re-créerait
    const interval = setInterval(removeIndicators, 500);

    // Observer pour détecter les nouveaux éléments ajoutés au DOM
    const observer = new MutationObserver(() => {
      removeIndicators();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Nettoyage
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return null; // Ce composant ne rend rien visuellement
}