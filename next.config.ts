// next.config.js
const repo = "zeroglyph";

/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",          // generates static site into /out
  images: { unoptimized: true },
  trailingSlash: true,

  // When deploying (NODE_ENV=production), serve under /zeroglyph
  basePath: process.env.NODE_ENV === "production" ? `/${repo}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repo}/` : "",
};
