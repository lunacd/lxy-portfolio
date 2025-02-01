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
              bottomMargin: "none",
            },
            {
              blockType: "text",
              text: props.text,
              textColor: props.textColor,
              bottomMargin: "none",
            },
          ],
          spacing: "large",
          justify: "center",
          bottomMargin: "none",
        },
        {
          blockType: "image",
          image: props.image,
          imageSize: 50,
          bottomMargin: "none",
        },
      ]}
      spacing="regular"
      blockType="row"
      alignment="start"
      payload={props.payload}
      bottomMargin={props.bottomMargin}
    />
  );
}
