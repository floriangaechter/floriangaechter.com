import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().min(50).max(160),
    pubDate: z.string().transform((str) => new Date(str)),
    modDate: z.string().transform((str) => new Date(str)),
  }),
});

export const collections = {
  'posts': postsCollection,
};

