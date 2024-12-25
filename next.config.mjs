/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  assetPrefix: "/next-store",
  basePath: "/next-store",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
