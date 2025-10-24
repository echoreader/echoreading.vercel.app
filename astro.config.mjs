import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://wildgreen.blog", // ✅ pastikan ini domain utama kamu
  trailingSlash: "always",        // ✅ konsisten URL di sitemap

  markdown: {
    remarkPlugins: [remarkModifiedTime], // ✅ inject modified date ke frontmatter
  },

  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com", // ✅ remote image whitelist
      },
    ],
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport", // ✅ UX boost
  },

  integrations: [
    mdx(),
    sitemap({
      exclude: ["/posts/*", "/search", "/tags/*"], // ✅ buang duplikat dan noise
      changefreq: "weekly",                        // ✅ crawl hint
      priority: 0.7,                               // ✅ crawl priority
    }),
    pagefind(), // ✅ search indexing
    tailwind(), // ✅ styling
    partytown({
      config: {
        forward: ["dataLayer.push"],
        debug: false,
      },
    }),
    icon({
      include: {
        tabler: ["*"], // ✅ icon whitelist
      },
    }),
  ],
});
