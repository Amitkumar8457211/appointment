/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  images: {
    domains: [
      "www.tmpwdirect.com",
      "images.pexels.com",
      "www.altruistindia.com",
    ],
  },
};

module.exports = nextConfig;
