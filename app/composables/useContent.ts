import { parseMarkdown } from '@nuxtjs/mdc/runtime'

export async function useContent(
  filename: string
) {
  const data = await $fetch(`/api/public/content/${filename}`);
  return await parseMarkdown(data);
}