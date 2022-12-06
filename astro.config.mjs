import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/functions";
import alpinejs from "@astrojs/alpinejs";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), image(), mdx(), alpinejs(), astroImageTools],
	site: "https://www.floriangaechter.com/",
	markdown: {
		shikiConfig: {
			theme: "nord",
		},
	},
});
