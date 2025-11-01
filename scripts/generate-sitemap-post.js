import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://wildgreen.blog";
const POSTS_DIR = path.resolve("src/content/posts");
const OUTPUT_PATH = path.resolve("public/sitemap-post.xml");

console.log("📦 Generating sitemap-post.xml...");
console.log("📁 Reading from:", POSTS_DIR);
console.log("📤 Writing to:", OUTPUT_PATH);

try {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith(".md"));

  const urls = files
    .map(file => {
      const content = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data } = matter(content);

      const slug = file.replace(/\.md$/, "");
      const rawDate = data.pubDate;
      const date = rawDate && !isNaN(Date.parse(rawDate))
        ? new Date(rawDate)
        : new Date();

      return {
        slug,
        date,
        xml: `
  <url>
    <loc>${SITE_URL}/${slug}/</loc>
    <lastmod>${date.toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>`
      };
    })
    .sort((a, b) => b.date - a.date); // ✅ Sort descending

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => u.xml).join("\n")}
</urlset>`;

  fs.writeFileSync(OUTPUT_PATH, xml.trim());
  console.log("✅ sitemap-post.xml generated successfully.");
} catch (err) {
  console.error("❌ Sitemap generation failed:", err.message);
}
