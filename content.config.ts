import { defineContentConfig, defineCollection } from '@nuxt/content';
import * as z from 'zod';

const StaffSchema = z.object({
  name: z.string(),
  role: z.string(),
  twitter_handler: z.string().optional(),
  avatar_url: z.string().optional()
});

export default defineContentConfig({
  collections: {
    local: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    content: defineCollection({
      type: 'page',
      source: {
        repository: process.env.NUXT_REMOTE_LANDING_CSM_ORIGIN,
        authToken: process.env.NUXT_REMOTE_LANDING_CSM_TOKEN,
        include: 'content/*.md'
      }
    }),
    staff: defineCollection({
      type: 'data',
      schema: StaffSchema,
      source: {
        repository: process.env.NUXT_REMOTE_LANDING_CSM_ORIGIN,
        authToken: process.env.NUXT_REMOTE_LANDING_CSM_TOKEN,
        include: 'content/staff/*.md'
      }
    })
  }
});