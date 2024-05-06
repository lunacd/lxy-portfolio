import { StaticImageData } from "next/image";

interface FrameData {
  src: string | StaticImageData;
  unoptimized?: boolean;
}

export default interface Animation {
  frames: FrameData[];
  width: number;
  height: number;
}
