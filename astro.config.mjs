import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";
import remarkLinkHelper from "./src/utils/remark-link-helper.js";
import { siteUrl } from "./src/utils/site.js";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import UnoCSS from 'unocss/astro'

//echoreading.vercel.app > wildgreen.blog 
export default defineConfig({
  site: "https://wildgreen.blog",
  trailingSlash: "always",

  markdown: {
    smartypants: false,
    remarkPlugins: [remarkModifiedTime,remarkLinkHelper({ siteUrl }),],
    // 🔥 Ini yang bikin <a> dari plugin bisa dirender
  // Tanpa ini, node type "html" akan diabaikan
  // dan tampil sebagai teks literal
  rehypePlugins: [],
  syntaxHighlight: false,
  dangerouslyAllowHtml: true,
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
    UnoCSS({
      injectReset: true // or a path to the reset file
    }),
    mdx(),
    //sitemap({
      //changefreq: 'weekly',
      //priority: 0.7,
      //lastmod: new Date(),
    //}),
    pagefind(),
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
