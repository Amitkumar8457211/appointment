/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  images: {
    domains: ["www.tmpwdirect.com"],
  },
};

module.exports = nextConfig;
