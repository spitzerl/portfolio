import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
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

  env: {
    CUSTOM_DISABLE_OVERLAY: 'true',
    CUSTOM_DISABLE_BUILD_INDICATOR: 'true',
  },

  output: "export",
};

export default nextConfig;
