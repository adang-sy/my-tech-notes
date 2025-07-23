import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemapPlugin from "@astrojs/sitemap";
import rss from "@astrojs/rss";

export default defineConfig({
  integrations: [tailwind(), mdx(), sitemapPlugin(), rss()],
  site: 'https://your-domain.vercel.app',
});