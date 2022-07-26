export class Animation {
  frames: string[];
  width: number;
  height: number;

  constructor(frames: string[], width: number, height: number) {
    this.frames = frames;
    this.width = width;
    this.height = height;
  }
}
