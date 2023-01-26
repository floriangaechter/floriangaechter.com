import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import type { APIContext } from "astro";

export const get = async (context: APIContext) => {
	return rss({
		title: "Florian Gächters’s Blog",
		description:
			"Personal blog of Florian Gächter. These are a couple of things I’ve come across so far…",
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob("./posts/**/*.{md,mdx}")),
		customData: `<language>en-us</language>`,
		stylesheet: "/rss/pretty-feed-v3.xsl",
	});
};
