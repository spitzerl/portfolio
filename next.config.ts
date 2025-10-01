import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration des images pour le SEO et performance
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
  },

  // Optimisations de base
  swcMinify: true,
  poweredByHeader: false,
  
  // Désactiver COMPLÈTEMENT l'indicateur de développement Next.js
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },

  // Désactiver Turbopack indicator si utilisé
  experimental: {
    turbo: {
      rules: {},
    },
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

  // Variables d'environnement pour désactiver les indicateurs
  env: {
    NODE_ENV: process.env.NODE_ENV || 'development',
    __NEXT_DISABLE_OVERLAY: 'true',
    __NEXT_DISABLE_BUILD_INDICATOR: 'true',
  },


};

export default nextConfig;
