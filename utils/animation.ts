import { StaticImageData } from "next/image";

class Animation {
  frames: (string | StaticImageData)[];
  width: number;
  height: number;

  constructor(
    frames: (string | StaticImageData)[],
    width: number,
    height: number,
  ) {
    this.frames = frames;
    this.width = width;
    this.height = height;
  }
}

export default Animation;
