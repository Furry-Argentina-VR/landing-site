import { parseMarkdown } from '@nuxtjs/mdc/runtime'

export async function useContent(
  filename: string
) {
  const data = await $fetch(`/api/public/content/${filename}`);
  if (filename.endsWith('.json')) return JSON.parse(data);
  return await parseMarkdown(data);
}