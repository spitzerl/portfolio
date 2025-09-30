import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Configuration pour production
  env: {
    NODE_ENV: 'production'
  },

  // Désactivation des outils de développement en production
  productionBrowserSourceMaps: false,

  // Configuration pour désactiver le debugger
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Désactiver les overlays d'erreur en production
  experimental: {
    optimizeCss: true,
  }
};

export default nextConfig;
