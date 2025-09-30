import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration pour Docker - génère une version standalone
  output: 'standalone',

  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Configuration pour production
  env: {
    NODE_ENV: 'production'
  },

  // Optimisation pour Docker
  experimental: {
    // Améliore les performances dans les conteneurs
    outputFileTracingRoot: process.cwd(),
  }
};

export default nextConfig;
