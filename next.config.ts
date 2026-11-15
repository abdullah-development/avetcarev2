import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"], qualities: [75, 85, 90] },
  // Keep old .html URLs (and their search ranking) working with permanent redirects.
  async redirects() {
    return [
      ["/index.html", "/"],
      ["/aboutus.html", "/about"],
      ["/about-us.html", "/about"],
      ["/contactus.html", "/contact"],
      ["/infondownload.html", "/info-center"],
      ["/cleaninglocation.html", "/cleaning-areas"],
      ["/claraclean.html", "/products/claraclean"],
      ["/claracleanozon.html", "/products/claraclean-ozone"],
      ["/claraclean-ozon.html", "/products/claraclean-ozone"],
      ["/spraymopsysteme.html", "/products/drizz-spray-mop-systems"],
      ["/drizz-spraymoppsysteme.html", "/products/drizz-spray-mop-systems"],
      ["/cleaningtextiles.html", "/products/cleaning-textiles"],
      ["/reinigungstextilien.html", "/products/cleaning-textiles"],
      ["/cleaningtrolley.html", "/products/cleaning-trolley"],
      ["/reinigungswagen.html", "/products/cleaning-trolley"],
      ["/syr.html", "/products/syr"],
      ["/product.html", "/products"],
      ["/cleaningequipments.html", "/products"],
      ["/Videos/avet-video.mp4", "/videos/avetcare.mp4"],
    ].map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
