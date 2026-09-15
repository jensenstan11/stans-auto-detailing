import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Instagram media/profile CDNs for the live feed strip.
    remotePatterns: [
      { protocol: "https", hostname: "**.cdninstagram.com" },
      { protocol: "https", hostname: "**.fbcdn.net" },
    ],
  },
  // Preserve rankings from the old Squarespace site's URLs.
  async redirects() {
    return [
      { source: "/services-pricing", destination: "/services", permanent: true },
      { source: "/mobile-detailing", destination: "/services", permanent: true },
      { source: "/paint-correction", destination: "/services", permanent: true },
      { source: "/portfolio", destination: "/gallery", permanent: true },
    ];
  },
};

export default nextConfig;
