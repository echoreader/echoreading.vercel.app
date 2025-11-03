import { visit } from "unist-util-visit";

export default function remarkLinkHelper({ siteUrl }) {
  return () => (tree) => {
    visit(tree, "paragraph", (node) => {
      node.children = node.children.flatMap((child) => {
        if (child.type === "text") {
          const parts = child.value.split(/({% link ".*?" ".*?" %})/g);
          return parts.map((part) => {
            const match = part.match(/{% link "(.*?)" "(.*?)" %}/);
            if (match) {
              const [, href, text] = match;
              const url = new URL(href, siteUrl).href;
              return {
                type: "html",
                value: `<a href="${url}">${text}</a>`,
              };
            }
            return { type: "text", value: part };
          });
        }
        return child;
      });
    });
  };
}
