// const withExportImages = require("next-export-optimize-images");

module.exports = {
  images: {
    deviceSizes: [640, 960, 1280, 1600, 1920],
  },
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
};
