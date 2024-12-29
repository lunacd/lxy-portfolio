import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";
import RowBlock from "src/blocks/RowBlock";

type TextImageBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "textImage" }
> & { payload: Payload };

export default function TextImageBlock(props: TextImageBlockProps) {
  return (
    <RowBlock
      blocks={[
        {
          blockType: "column",
          blocks: [
            {
              blockType: "title",
              text: props.title,
              textColor: props.textColor,
              type: "title",
              bottomMarginNew: "none",
            },
            {
              blockType: "text",
              text: props.text,
              textColor: props.textColor,
              bottomMarginNew: "none",
            },
          ],
          spacing: "large",
          justify: "center",
          bottomMarginNew: "none",
        },
        {
          blockType: "image",
          image: props.image,
          imageSize: 50,
          bottomMarginNew: "none",
        },
      ]}
      spacing="regular"
      blockType="row"
      payload={props.payload}
      bottomMarginNew={props.bottomMarginNew}
    />
  );
}
