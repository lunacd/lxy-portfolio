import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import { withPayload } from "@payloadcms/next/withPayload";

initOpenNextCloudflareForDev();

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
    loader: "custom",
    loaderFile: "./imageLoader.ts",
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
        source: "/breathe",
        destination: "/breathe.pdf",
      },
      {
        source: "/resume.pdf",
        destination: "/documents/resume",
      },
    ];
  },
});

export default nextConfig;
