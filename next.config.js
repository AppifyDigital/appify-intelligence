/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`;
    return config;
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
