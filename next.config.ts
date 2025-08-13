import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow Next/Image to optimize YouTube thumbnail images used in the docs video playlist
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
