import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";
import remarkLinkHelper from "./src/utils/remark-link-helper.js";
import { siteUrl } from "./src/utils/site.js";

import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import UnoCSS from 'unocss/astro'

export default defineConfig({
  site: "https://wildgreen.blog",
  trailingSlash: "always",

  markdown: {
    smartypants: false,
    remarkPlugins: [remarkModifiedTime,remarkLinkHelper({ siteUrl }),],
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
      injectReset: true
    }),
    mdx(),
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