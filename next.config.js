module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/tura",
        destination: "https://shirleylyu.wixsite.com/shirley-portfolio/tura",
        permanent: true,
      },
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
