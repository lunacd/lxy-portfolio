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
        blockType: "slideShow",
        images: item.images,
        bottomMargin: "none",
      },
    ];
    if (item.text) {
      blocks.push({
        blockType: "text",
        text: item.text,
        textColor: props.textColor,
        bottomMargin: "none",
      });
    }
    return blocks;
  }
  return (
    <div className="grid">

    </div>
  );
}
