import rss from "@astrojs/rss";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getContainerRenderer as getMDXRenderer } from "@astrojs/mdx";
import { loadRenderers } from "astro:container";
import { getCollection } from "astro:content";
import { type APIContext } from "astro";

export async function GET(context: APIContext) {
	const renderers = await loadRenderers([getMDXRenderer()]);
	const container = await AstroContainer.create({ renderers });
	const posts = await getCollection("posts");
	const items = [];

	for (const post of posts) {
		const { Content } = await post.render();
		const content = await container.renderToString(Content);
		const link = new URL(`/posts/${post.slug}`, context.url.origin).toString();

		items.push({ ...post.data, link, content });
	}

	return rss({
		title: "Florian Gächter’s Blog",
		description:
			"Developer Advocate at Frontify sharing tips, tricks, and learnings about technology and software development. Based in Switzerland.",
		site: context.site,
		stylesheet: "/rss/styles.xsl",
		items,
	});
}
