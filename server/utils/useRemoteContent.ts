import type { H3Event } from 'h3';

export default function(event: H3Event) {
  const runtime = useRuntimeConfig(event);
  const { org, repo, token } = runtime.cms;
  
  const ghClient = $fetch.create({
    baseURL: `https://api.github.com/repos/${org}/${repo}/contents/content/`,
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/vnd.github+json',
      'No-Cache': '1'
    }
  });
  return ghClient;
}