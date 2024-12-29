import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";

import PayloadImage from "@/components/PayloadImage";

type LargeGalleryBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "largeGallery" }
> & { payload: Payload };

export default function LargeGalleryBlock(props: LargeGalleryBlockProps) {
  return props.rows.map((row, index) => {
    if (row.type === "equalWidth") {
      return (
        <div
          key={index}
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${row.images.length}, minmax(0, 1fr))`,
          }}
        >
          {row.images.map((image, index) => {
            return (
              <PayloadImage
                key={index}
                payload={props.payload}
                media={image.image}
                sizes={`${100 / row.images.length}vw`}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div key={index} className="flex flex-row">
          {row.images.map((image, index) => {
            return (
              <PayloadImage
                key={index}
                payload={props.payload}
                media={image.image}
                sizes="50vw"
              />
            );
          })}
        </div>
      );
    }
  });
}
