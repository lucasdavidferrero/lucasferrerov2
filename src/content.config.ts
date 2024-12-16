// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/project" }),
    schema: z.object({
        code: z.string(),
        title: z.string(),
        description: z.string(),
        imagePath: z.string(),
        websiteURL: z.string(),
        teamMembers: z.string(),
        slug: z.string(),
        year: z.number().int().positive(),
        publishDate: z.date()
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };
