import fs from "fs";
import path from "path";

const SITE_URL = "https://wildgreen.blog";
const OUTPUT_PATH = path.resolve("public/sitemap-page.xml");

const staticPages = [
  { path: "/", priority: 1.0 },
  { path: "/blog", priority: 0.7 },
  { path: "/about", priority: 0.6 },
];

const today = new Date().toISOString();

const urls = staticPages.map(page => {
  return `
  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${page.priority}</priority>
  </url>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

fs.writeFileSync(OUTPUT_PATH, xml.trim());
console.log("✅ sitemap-page.xml generated");
