import { StaticImageData } from "next/image";

import { TextContent } from "@/components/LegacyTextSection";

export default interface GalleryItem {
  title: string;
  content?: TextContent[];
  image: string | StaticImageData;
}
