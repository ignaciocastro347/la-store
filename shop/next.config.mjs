/** @type {import('next').NextConfig} */
import config from "./next-i18next.config.js";
const { i18n } = config

const nextConfig = {
  reactStrictMode: true,
  i18n,
  experimental: {
    esmExternals: true,
  },
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
  webpack(config, options) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: "graphql-let/loader" }],
    });

    config.module.rules.push({
      test: /\.ya?ml$/,
      type: "json",
      use: "yaml-loader",
    });

    return config;
  },
};

export default nextConfig;
