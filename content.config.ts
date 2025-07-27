import { defineContentConfig, defineCollection } from '@nuxt/content';
import * as z from 'zod';

const StaffSchema = z.object({
  name: z.string(),
  role: z.string(),
  twitter_handler: z.string().optional(),
  picture: z.string().optional()
})

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    staff: defineCollection({
      type: 'data',
      schema: StaffSchema,
      source: 'staff/*.md'
    })
  }
});