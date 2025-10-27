import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://wildgreen.blog";
const POSTS_DIR = path.resolve("src/content/posts");
const OUTPUT_PATH = path.resolve("public/sitemap-post.xml");

const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith(".md"));

const urls = files.map(file => {
  const content = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data } = matter(content);
  const slug = file.replace(/\.md$/, "");
  const date = data.date || new Date().toISOString();

  return `
  <url>
    <loc>${SITE_URL}/${slug}</loc>
    <lastmod>${new Date(date).toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

fs.writeFileSync(OUTPUT_PATH, xml.trim());
console.log("✅ sitemap-post.xml generated");
