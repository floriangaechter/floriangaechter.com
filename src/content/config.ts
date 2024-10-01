import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().max(160),
		pubDate: z.string().transform((str) => new Date(str)),
		modDate: z.string().transform((str) => new Date(str)).optional(),
	}),
});

export const collections = {
	'posts': postsCollection,
};

