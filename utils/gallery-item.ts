import { StaticImageData } from "next/image";

class GalleryItem {
  title?: string;
  description?: string;
  image: string | StaticImageData;

  constructor(
    image: string | StaticImageData,
    title?: string,
    description?: string,
  ) {
    this.title = title;
    this.description = description;
    this.image = image;
  }
}

export default GalleryItem;
