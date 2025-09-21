import type { H3Event } from 'h3';

export default function(event: H3Event) {
  const runtime = useRuntimeConfig(event);
  const cmsKvs = runtime.csm;
  cmsKvs.org = cmsKvs.org.trim().length ? cmsKvs.org : process.env.NUXT_CMS_ORG as string;
  cmsKvs.repo = cmsKvs.repo.trim().length ? cmsKvs.repo : process.env.NUXT_CMS_REPO as string;
  cmsKvs.token = cmsKvs.token.trim().length ? cmsKvs.token : process.env.NUXT_CMS_TOKEN as string;

  if (!cmsKvs.org.length || !cmsKvs.repo.length || !cmsKvs.token.length) {
    throw new Error('CMS configuration is missing. Please set CMS environment variables.');
  }
  const ghClient = $fetch.create({
    baseURL: `https://api.github.com/repos/${cmsKvs.org}/${cmsKvs.repo}/contents/content/`,
    headers: {
      Authorization: 'Bearer ' + cmsKvs.token,
      Accept: 'application/vnd.github+json',
      'No-Cache': '1'
    }
  });
  return ghClient;
}