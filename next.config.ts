import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // allowedDevOrigins: ["172.*"],
  // webpack: (config) => {
  //   config.watchOptions = {
  //     poll: 1000,
  //     aggregateTimeout: 300,
  //   };
  //   return config;
  // },
  devIndicators: false,
};

export default nextConfig;
