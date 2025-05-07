import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://Dobbymin.github.io"
      : "",
};

export default nextConfig;
