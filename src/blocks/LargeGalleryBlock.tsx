import ColumnBlock from "./ColumnBlock";
import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";

type LargeGalleryBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "largeGallery" }
> & { payload: Payload };

export default function LargeGalleryBlock(props: LargeGalleryBlockProps) {
  return (
    <ColumnBlock
      blockType="column"
      blocks={props.rows.map((row) => {
        if (row.type === "equalHeight") {
          return {
            blockType: "equalHeightImages",
            items: row.images.map((image) => {
              return {
                image: image.image,
                imageSize: 50,
              };
            }),
            spacing: "regular",
            bottomMargin: "none",
          };
        } else {
          return {
            blockType: "row",
            spacing: "regular",
            bottomMargin: "none",
            alignment: row.alignment,
            blocks: row.images.map((image) => {
              return {
                blockType: "image",
                image: image.image,
                imageSize: 100 / row.images.length,
                bottomMargin: "none",
              };
            }),
          };
        }
      })}
      payload={props.payload}
      spacing="regular"
      justify="center"
      bottomMargin={props.bottomMargin}
    ></ColumnBlock>
  );
}
