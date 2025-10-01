// Script inline pour supprimer immédiatement l'indicateur Next.js
(function() {
  'use strict';
  
  function forceRemoveIndicators() {
    // Liste exhaustive de sélecteurs pour tous les indicateurs connus
    const selectors = [
      '[data-nextjs-route-indicator]',
      '[data-nextjs-build-indicator]', 
      '[data-turbopack-indicator]',
      '[data-turbo-indicator]',
      '[data-nextjs-router-indicator]',
      '[data-next-dev-indicator]',
      '.__nextjs_build_indicator',
      '.next-build-indicator',
      'div[style*="position: fixed"][style*="bottom"]',
      'div[style*="z-index: 9000"]'
    ];

    selectors.forEach(selector => {
      try {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el && el.parentNode) {
            el.parentNode.removeChild(el);
          }
        });
      } catch (e) {
        // Ignorer les erreurs de sélecteur
      }
    });

    // Approche plus agressive : chercher par contenu textuel
    const allDivs = document.querySelectorAll('div');
    allDivs.forEach(div => {
      const text = div.textContent || '';
      const html = div.innerHTML || '';
      
      if (
        text.includes('Route') ||
        text.includes('Static') ||
        text.includes('Try Turbopack') ||
        html.includes('nextjs') ||
        (div.style.position === 'fixed' && div.style.bottom && div.style.left)
      ) {
        try {
          if (div.parentNode) {
            div.parentNode.removeChild(div);
          }
        } catch (e) {
          div.style.display = 'none';
          div.style.visibility = 'hidden';
          div.style.opacity = '0';
        }
      }
    });
  }

  // Exécuter immédiatement
  forceRemoveIndicators();

  // Exécuter quand le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forceRemoveIndicators);
  }

  // Exécuter périodiquement
  setInterval(forceRemoveIndicators, 100);

  // Observer les changements DOM
  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(forceRemoveIndicators);
    
    function startObserver() {
      if (document.body) {
        observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['style', 'class']
        });
      } else {
        setTimeout(startObserver, 10);
      }
    }
    
    startObserver();
  }
})();