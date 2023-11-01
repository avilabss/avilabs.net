import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: { theme: "css-variables", wrap: true },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
});
