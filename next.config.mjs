/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "exuberant-orca-262.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
