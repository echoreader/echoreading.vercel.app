// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "Echo Reader";
export const SITE_TITLE = "Echo Reader";
export const SITE_DESCRIPTION = "Echo Reader, a dedicated Multi-Niche Writer and the curator of a vast, knowledge-driven blog network.";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "Echo Reader - All Tags";
export const Tags_DESCRIPTION =
  "Echo Reader - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string = "unknown") {
  return {
    title: `All articles on '${tag}' tag in Echo Reader`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in Echo Reader`,
    description: `Browse all articles under the ${category} category in Echo Reader`,
  };
}

// Header Links, src/components/Header.astro
/*export const HeaderLinks = [
  { href: "/category/One/1/", title: "One" },
  { href: "/category/Two/1/", title: "Two" },
  { href: "/category/Three/1/", title: "Three" },
];*/
export const HeaderLinks = [
  { href: "/", title: "Home" },
  { href: "/blog/", title: "Blog" },
  { href: "/about/", title: "About" },
];
// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://x.com/echo_reader",
    icon: "tabler:brand-twitter",
    label: "Twitter",
  },
  {
    href: "https://github.com/echoreader",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
