// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import flexokiDark from "./flexoki-dark.json";

// https://astro.build/config
export default defineConfig({
  site: "https://www.floriangaechter.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: {
        name: "flexoki-dark",
        type: "dark",
        settings: flexokiDark.tokenColors,
      },
    },
  },
});
