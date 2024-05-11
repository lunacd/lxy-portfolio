import { StaticImageData } from "next/image";

export default interface GalleryItem {
  title: string;
  content?: string[];
  image: string | StaticImageData;
}
