import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig = withPayload({
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r2.lunacd.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "r2-dev.lunacd.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/graphic.design",
        destination: "/graphic-design",
        permanent: true,
      },
      {
        source: "/",
        destination: "/product-designer",
        permanent: true,
      },
      {
        source: "/tesla-service-training",
        destination: "/product-designer/tesla-service-training",
        permanent: true,
      },
      {
        source: "/polaris",
        destination: "/product-designer/polaris",
        permanent: true,
      },
      {
        source: "/soul",
        destination: "/product-designer/soul",
        permanent: true,
      },
      {
        source: "/skates",
        destination: "/product-designer/skates",
        permanent: true,
      },
      {
        source: "/curiously",
        destination: "/product-designer/curiously",
        permanent: true,
      },
      {
        source: "/overlap",
        destination: "/product-designer/overlap",
        permanent: true,
      },
      {
        source: "/m-tron",
        destination: "/product-designer/m-tron",
        permanent: true,
      },
      {
        source: "/again-from-scratch",
        destination: "/product-designer/again-from-scratch",
        permanent: true,
      },
      {
        source: "/breathe",
        destination: "/product-designer/breathe",
        permanent: true,
      },
      {
        source: "/tura",
        destination: "/product-designer/tura",
        permanent: true,
      },
      {
        source: "/sunrise",
        destination: "/product-designer/sunrise",
        permanent: true,
      },
      {
        source: "/lamboozled",
        destination: "/product-designer/lamboozled",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/resume.pdf",
        destination: "/documents/resume",
      },
    ];
  },
});

export default nextConfig;
