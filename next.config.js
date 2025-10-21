/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`;
    return config;
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.appifyintelligence.com" }],
        destination: "https://appifyintelligence.com/:path*",
        permanent: true,
      },
      // Redirect .co.uk -> .com
      {
        source: "/:path*",
        has: [{ type: "host", value: "appifyintelligence.co.uk" }],
        destination: "https://appifyintelligence.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.appifyintelligence.co.uk" }],
        destination: "https://appifyintelligence.com/:path*",
        permanent: true,
      },
    ];
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
