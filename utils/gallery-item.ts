import { StaticImageData } from "next/image";

class GalleryItem {
  title?: string;
  content?: string[];
  image: string | StaticImageData;

  constructor(
    image: string | StaticImageData,
    title?: string,
    content?: string[] | string,
  ) {
    this.title = title;
    if (typeof content === "string") {
      this.content = [content];
    } else {
      this.content = content;
    }
    this.image = image;
  }
}

export default GalleryItem;
