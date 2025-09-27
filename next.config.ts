import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Configuration pour Infomaniak - utilise la variable PORT
  experimental: {
    serverComponentsExternalPackages: []
  }
};

export default nextConfig;
