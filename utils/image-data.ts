import { StaticImageData } from "next/image";

export default interface ImageData {
  src: string | StaticImageData;
  width: number;
  height: number;
  unoptimized?: boolean;
}
