const normalizeSrc = (src: string) => {
  return src.startsWith("/") ? src.slice(1) : src;
};

export default function cloudflareLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (process.env.NODE_ENV === "development" || process.env.NEXTJS_ENV === "development") {
    // This doesn't actually do anything.
    // This just silences NextJS warnings on loader not respecting width.
    return `${src}?width=${width}`;
  }
  const params = [`width=${width}`, "format=auto"];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(",");
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
}
