module.exports = {
  reactStrictMode: true,
  swcMinify: true,
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
};
