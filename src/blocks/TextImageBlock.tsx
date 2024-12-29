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
              bottomMargin: false,
              bottomMarginNew: "none",
            },
            {
              blockType: "text",
              text: props.text,
              textColor: props.textColor,
              bottomMargin: false,
              bottomMarginNew: "none",
            },
          ],
          bottomMargin: false,
          spacing: "large",
          justify: "center",
          bottomMarginNew: "none",
        },
        {
          blockType: "image",
          image: props.image,
          imageSize: 50,
          bottomMargin: false,
          bottomMarginNew: "none",
        },
      ]}
      spacing="regular"
      bottomMargin={props.bottomMargin}
      blockType="row"
      payload={props.payload}
      bottomMarginNew={props.bottomMargin ? "xxl" : "none"}
    />
  );
}
