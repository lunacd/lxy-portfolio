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
            bottomMargin: false,
            bottomMarginNew: "none",
          };
        } else {
          return {
            blockType: "horizontalGallery",
            spacing: "regular",
            bottomMargin: false,
            textColor: "light",
            bottomMarginNew: "none",
            items: row.images.map((image) => {
              return {
                image: image.image,
                text: null,
              };
            }),
          };
        }
      })}
      payload={props.payload}
      spacing="regular"
      justify="center"
      bottomMarginNew={props.bottomMarginNew}
    ></ColumnBlock>
  );
}
