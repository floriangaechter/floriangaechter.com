import * as cheerio from "cheerio";

export default function convertHtml(html: string) {
  const $ = cheerio.load(html);
  $("img")
    .unwrap() // Remove P tags
    .replaceWith((i, e) => {
      const { src, alt, title, width, height } = e.attribs;
      // If img has title
      if (title)
        return `<figure>
          <img
            src=${src}
            alt=${alt}
            loading="lazy"
            title=${title}
            width=${width}
            height=${height}
            decoding="auto"
           />
          <figcaption>${title}</figcaption>
          </figure>`;
      // if img doesn't has title
      return `<img
          src=${src}
          alt=${alt}
          loading="lazy"
          width=${width}
          height=${height} 
          decoding="auto"
          />`;
    });

  return $.html();
}
