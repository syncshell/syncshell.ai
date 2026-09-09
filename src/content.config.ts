import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { docsLoader } from "@astrojs/starlight/loaders"
import { docsSchema } from "@astrojs/starlight/schema"

const screenshot = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
})
const video = z.object({
  src: z.string(),
  poster: z.string(),
  title: z.string(),
  description: z.string(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
})
const interfaceFields = z.object({
  order: z.number().int(),
  summary: z.string(),
  availability: z.enum(["Available", "Included", "Planned"]),
  statusNote: z.string().optional(),
  sourceUrl: z.url().optional(),
  releaseUrl: z.url().optional(),
  screenshots: z.array(screenshot).optional(),
  videos: z.array(video).optional(),
})
const pageFields = interfaceFields.partial().extend({ order: z.undefined().optional() })

export type Screenshot = z.infer<typeof screenshot>
export type Video = z.infer<typeof video>
export type InterfaceData = z.infer<typeof interfaceFields>

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: z.union([interfaceFields, pageFields]) }),
  }),
}
