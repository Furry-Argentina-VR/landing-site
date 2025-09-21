import type { H3Event } from 'h3';

export default function(event: H3Event) {
  const runtime = useRuntimeConfig(event);
  const ghClient = $fetch.create({
    baseURL: `https://api.github.com/repos/${runtime.cms.org}/${runtime.cms.repo}/contents/content/`,
    headers: {
      Authorization: 'Bearer ' + runtime.cms.token,
      Accept: 'application/vnd.github+json',
      'No-Cache': '1'
    }
  });
  return ghClient;
}