// next.config.js
const isGH = process.env.GITHUB_ACTIONS === "true";
const repo = "zeroglyph"; // <== your repo name

/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",          // write static files to /out
  distDir: "docs",
  images: { unoptimized: true },
  trailingSlash: true,       // /stories/set-theory/ => .../index.html

  // Only add basePath/assetPrefix on GH Pages builds
  ...(isGH
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
};
