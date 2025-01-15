import rss from "@astrojs/rss";
import { type APIContext } from "astro";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import config from "../config.ts";

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const blog = await getCollection("posts");

  return rss({
    title: config.title,
    description: config.description,
    site: context.site || "https://www.floriangaechter.com",
    stylesheet: "/style.xsl",
    items: blog.map((post: { id: string; body: string; data: any }) => ({
      link: `/posts/${post.id}/`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
      ...post.data,
    })),
  });
}
