import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { loadTheme } from 'shiki-themes';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx()],
	markdown: {
		shikiConfig: { theme: loadTheme("./src/assets/flexoki-color-scheme.json") },
	},
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});

