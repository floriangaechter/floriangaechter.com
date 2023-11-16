import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: string; }) {
	const posts = await getCollection('posts');
	console.log(posts);

	return rss({
		title: 'Florian Gächter’s Blog',
		description: 'Developer Advocate at Frontify sharing tips, tricks, and learnings about technology and software development. Based in Switzerland.',
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/posts/${post.slug}`,
		})),
	});
}

