import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { routes } from "../routing";

export async function GET(context: APIContext) {
  const articles = await getCollection("articles");

  if (!context.url) {
    throw new Error(`Site configuration is missing!`);
  }

  return rss({
    title: "Avinash's Blog",
    description: "Welcome to my digital playground!",
    site: context.url.origin,
    stylesheet: "/pretty-feed-v3.xsl",
    items: articles
      .filter((article) => !article.data.draft)
      .map((article) => ({
        draft: article.data.draft,
        title: article.data.title,
        pubDate: new Date(article.data.date),
        description: article.data.description,
        link: routes.article(article.slug),
      })),
  });
}
