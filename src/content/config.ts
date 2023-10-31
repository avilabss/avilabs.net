import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const articlesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string(),
      tags: z.array(z.string()),
      draft: z.boolean().default(false),
      banner: image(),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
    articles: articlesCollection,
}
