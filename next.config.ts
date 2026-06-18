import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [{ pathname: "/images/**" }, { pathname: "/fonts/**" }],
  },
};

export default nextConfig;
