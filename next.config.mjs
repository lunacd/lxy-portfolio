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
