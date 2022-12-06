import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), image(), mdx(), alpinejs(), astroImageTools],
	site: "https://www.floriangaechter.com/",
	trailingSlash: "always",
	markdown: {
		shikiConfig: {
			theme: "nord",
		},
	},
});
