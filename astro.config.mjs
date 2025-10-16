import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://echoreading.vercel.app",
  trailingSlash: "always",

  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },

  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
    ],
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  integrations: [
    mdx(),
    sitemap(),
    pagefind(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
        debug: false,
      },
    }),
    icon({
      include: {
        tabler: ["*"],
      },
    }),
  ],
});
