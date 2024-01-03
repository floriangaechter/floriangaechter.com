import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context: { site: string; }) {
  const posts = await getCollection("posts");

  return rss({
    title: "Florian Gächter’s Blog",
    description: "Developer Advocate at Frontify sharing tips, tricks, and learnings about technology and software development. Based in Switzerland.",
    site: context.site,
    stylesheet: "/rss/styles.xsl",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
  });
}
