import type Animation from "./animation";
import type Image from "./image-data";

export enum GalleryRowConfig {
  FixedHeight,
  EqualWidthStart,
  EqualWidthEnd,
}

export class GalleryRow {
  config: GalleryRowConfig;
  images: (Image | Animation)[];

  constructor(
    images: (Image | Animation)[],
    config = GalleryRowConfig.FixedHeight,
  ) {
    this.config = config;
    this.images = images;
  }
}
