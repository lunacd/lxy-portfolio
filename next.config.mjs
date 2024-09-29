import { withPayload } from "@payloadcms/next/withPayload";
const nextConfig = withPayload({
  reactStrictMode: true,
  trailingSlash: true,
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
        source: "/breathe",
        destination: "/breathe.pdf",
      },
    ];
  },
});

export default nextConfig;
