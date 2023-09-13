/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  poweredByHeader: false,
  images: {
    domains: [
      "www.tmpwdirect.com",
      "images.pexels.com",
      "www.altruistindia.com",
    ],
    minimumCacheTTL: 60,
  },
};

module.exports = withPWA(nextConfig);
