/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pickbazarlaravel.s3.ap-southeast-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "pixarlaravel.s3.ap-southeast-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "pickbazar-react.vercel.app",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
