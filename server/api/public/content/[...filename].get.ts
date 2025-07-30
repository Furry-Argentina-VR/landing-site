export default defineEventHandler(async (event) => {
  const filename = (getRouterParams(event)).filename;
  const data = await useFetchRemoteContent(event, filename);
  setResponseHeader(event, 'content-type', 'text/markdown');
  return data;
});