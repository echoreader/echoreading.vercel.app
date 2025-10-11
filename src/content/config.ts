import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    lastModified: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    category: z.array(z.string().optional()),
    tags: z.array(z.string().optional()),
    author: z.string(),
  }),
});

export const collections = { posts };
