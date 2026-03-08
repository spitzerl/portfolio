import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
  },

  poweredByHeader: false,
  
  devIndicators: false,

  turbopack: {
    // configuration turbopack
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  productionBrowserSourceMaps: false,

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

  env: {
    CUSTOM_DISABLE_OVERLAY: 'true',
    CUSTOM_DISABLE_BUILD_INDICATOR: 'true',
  },

  output: "standalone",
};

export default nextConfig;
