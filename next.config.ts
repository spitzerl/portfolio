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
  
  // Désactiver l'indicateur de développement Next.js et les overlays
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
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

  // Variables d'environnement
  env: {
    NODE_ENV: process.env.NODE_ENV || 'development',
  },
};

export default nextConfig;
