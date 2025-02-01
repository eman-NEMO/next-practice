/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"], // Add allowed image domains
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

module.exports = nextConfig;
