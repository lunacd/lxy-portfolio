import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";
import type { RowBlockProps } from "src/blocks/RowBlock";
import RowBlock from "src/blocks/RowBlock";

type HorizontalGalleryBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "horizontalGallery" }
> & { payload: Payload };

type NestedColumnBlocks = Extract<
  RowBlockProps["blocks"][0],
  { blockType: "column" }
>["blocks"];

export default function HorizontalGalleryBlock(
  props: HorizontalGalleryBlockProps,
) {
  function makeItemBlocks(item: (typeof props.items)[0]): NestedColumnBlocks {
    const blocks: NestedColumnBlocks = [
      {
        blockType: "image",
        image: item.image,
        imageSize: 100 / props.items.length,
        bottomMargin: false,
      },
    ];
    if (item.text) {
      blocks.push({
        blockType: "text",
        text: item.text,
        bottomMargin: false,
        textColor: props.textColor,
      });
    }
    return blocks;
  }
  return (
    <RowBlock
      blocks={props.items.map((item) => {
        return {
          blockType: "column",
          blocks: makeItemBlocks(item),
          spacing: "small",
          bottomMargin: false,
          justify: "start",
        };
      })}
      spacing={props.spacing}
      bottomMargin={props.bottomMargin}
      blockType="row"
      payload={props.payload}
    />
  );
}
