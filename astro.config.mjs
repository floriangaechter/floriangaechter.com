// @ts-check
import { defineConfig } from "astro/config";
import flexokiDark from "./flexoki-dark.json";
import flexokiLight from "./flexoki-light.json";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.floriangaechter.com",

  markdown: {
    shikiConfig: {
      themes: {
        dark: {
          name: "flexoki-dark",
          type: "dark",
          settings: flexokiDark.tokenColors,
        },
        light: {
          name: "flexoki-light",
          type: "light",
          settings: flexokiLight.tokenColors,
        },
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});

