import { StaticImageData } from "next/image";

class ImageData {
  src: string | StaticImageData;
  width: number;
  height: number;

  constructor(src: string | StaticImageData, width: number, height: number) {
    this.src = src;
    this.width = width;
    this.height = height;
  }
}

export default ImageData;
