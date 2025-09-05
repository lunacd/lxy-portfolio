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
        destination: "/designer",
        permanent: true,
      },
      {
        source: "/tesla-service-training",
        destination: "/designer/tesla-service-training",
        permanent: true,
      },
      {
        source: "/polaris",
        destination: "/designer/polaris",
        permanent: true,
      },
      {
        source: "/soul",
        destination: "/designer/soul",
        permanent: true,
      },
      {
        source: "/skates",
        destination: "/designer/skates",
        permanent: true,
      },
      {
        source: "/curiously",
        destination: "/designer/curiously",
        permanent: true,
      },
      {
        source: "/overlap",
        destination: "/designer/overlap",
        permanent: true,
      },
      {
        source: "/m-tron",
        destination: "/designer/m-tron",
        permanent: true,
      },
      {
        source: "/again-from-scratch",
        destination: "/designer/again-from-scratch",
        permanent: true,
      },
      {
        source: "/breathe",
        destination: "/designer/breathe",
        permanent: true,
      },
      {
        source: "/tura",
        destination: "/designer/tura",
        permanent: true,
      },
      {
        source: "/sunrise",
        destination: "/designer/sunrise",
        permanent: true,
      },
      {
        source: "/lamboozled",
        destination: "/designer/lamboozled",
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
