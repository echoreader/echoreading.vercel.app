import fs from "fs";
import path from "path";

const SITE_URL = "https://wildgreen.blog";
const OUTPUT_PATH = path.resolve("public/sitemap-index.xml");

const sitemaps = [
  "sitemap-post.xml",
  "sitemap-page.xml",
];

const urls = sitemaps.map(file => {
  return `
  <sitemap>
    <loc>${SITE_URL}/${file}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</sitemapindex>`;

fs.writeFileSync(OUTPUT_PATH, xml.trim());
console.log("✅ sitemap-index.xml generated");
