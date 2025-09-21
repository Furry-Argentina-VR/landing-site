export default defineCachedEventHandler(async (event) => {
  const { filename } = (getRouterParams(event));
  const rawData = await useFetchRemoteContent(event, filename);
  return rawData;
});