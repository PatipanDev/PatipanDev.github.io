import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
    qualities: [20, 50, 75],
  },
};

export default nextConfig;
