import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration des images pour le SEO et performance
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
  },

  // Optimisations de base (swcMinify supprimé car deprecated dans Next.js 15)
  poweredByHeader: false,
  
  // Désactiver COMPLÈTEMENT l'indicateur de développement Next.js
  devIndicators: false,

  // Configuration Turbopack (corrigée pour Next.js 15)
  turbopack: {
    // Configuration Turbopack si nécessaire
  },

  // Configuration du compilateur
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Désactivation des outils de développement en production
  productionBrowserSourceMaps: false,

  // Headers de sécurité de base pour le SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ];
  },

  // Variables d'environnement personnalisées (NODE_ENV supprimé car interdit)
  env: {
    CUSTOM_DISABLE_OVERLAY: 'true',
    CUSTOM_DISABLE_BUILD_INDICATOR: 'true',
  },
};

export default nextConfig;
