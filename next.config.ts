import type { NextConfig } from "next";
import createMDX from "@next/mdx";
const nextConfig: NextConfig = {
  images: {
    domains: ["i.pinimg.com", "via.placeholder.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};
const withMDX = createMDX({});

export default withMDX(nextConfig);
