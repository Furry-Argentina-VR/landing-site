export default defineCachedEventHandler(async (event) => {
  const filename = (getRouterParams(event)).filename;
  const data = await useFetchRemoteContent(event, filename);
  setResponseHeader(event, 'content-type', 'text/markdown');
  return data;
}, {
  maxAge: 60 * 60,
});