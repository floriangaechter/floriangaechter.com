import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
  schema: z.object({
    draft: z.boolean().optional(),
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    modDate: z.coerce.date().optional(),
  }),
});

export const collections = { posts };
