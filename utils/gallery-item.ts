import { StaticImageData } from "next/image";

class GalleryItem {
  title: string;
  content?: string[];
  image: string | StaticImageData;

  constructor(
    image: string | StaticImageData,
    title: string,
    content?: string[],
  ) {
    this.title = title;
    this.content = content;
    this.image = image;
  }
}

export default GalleryItem;
