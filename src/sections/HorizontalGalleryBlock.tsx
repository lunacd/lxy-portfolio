import { ProjectPage } from "@payload-types";
import { Payload } from "payload";

import RowBlock from "@/sections/RowBlock";

type HorizontalGalleryBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "horizontalGallery" }
> & { payload: Payload };

export default function HorizontalGalleryBlock(
  props: HorizontalGalleryBlockProps,
) {
  return (
    <RowBlock
      blocks={props.items.map((item) => {
        return {
          blockType: "column",
          blocks: [
            {
              blockType: "image",
              image: item.image,
              imageSize: 100 / props.items.length,
              bottomMargin: false,
            },
            { blockType: "text", text: item.text },
          ],
          spacing: "small",
          bottomMargin: false,
        };
      })}
      spacing={props.spacing}
      bottomMargin={props.bottomMargin}
      blockType="row"
      payload={props.payload}
    />
  );
}
