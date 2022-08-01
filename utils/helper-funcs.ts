export const appendQueryToInternalLinks = (link: string, query: string) => {
  if (!link.startsWith("http")) {
    return link.includes("?") ? link + "&" + query : link + "?" + query;
  }
  return link;
};
