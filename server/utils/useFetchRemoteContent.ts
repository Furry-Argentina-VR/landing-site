import type { H3Event } from 'h3';

function b64decode(data: string) {
  return decodeURIComponent(atob(data).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

export default async function(event: H3Event, filename: string) {
  const gh = useRemoteContent(event);
  const data = await gh(filename);
  // @ts-expect-error Data can be any!
  const decodedData = b64decode(data.content);
  return decodedData;
}