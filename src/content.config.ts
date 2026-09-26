import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const recipes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    situations: z.array(z.string()).default([]),
    time: z.string().optional(),
    difficulty: z.string().optional(),
    image: z.string().optional(),
    pubDate: z.coerce.date(),
    modDate: z.coerce.date().optional(),
  }),
});

export const collections = { recipes };
