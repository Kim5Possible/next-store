/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  assetPrefix: isProd ? "/next-store" : "",
  basePath: isProd ? "/next-store" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
