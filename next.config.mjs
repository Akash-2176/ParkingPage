/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  compiler: {
    removeConsole: isProd ? { exclude: ["error"] } : false,
  },
};

export default nextConfig;