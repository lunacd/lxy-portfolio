import { StaticImageData } from "next/image";

import { TextContent } from "@/components/TextSection";

export default interface GalleryItem {
  title: string;
  content?: TextContent[];
  image: string | StaticImageData;
}
