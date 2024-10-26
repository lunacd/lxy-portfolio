import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";

import RowBlock from "@/sections/RowBlock";

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
            },
            {
              blockType: "text",
              text: props.text,
              textColor: props.textColor,
              bottomMargin: false,
            },
          ],
          bottomMargin: false,
          spacing: "large",
          justify: "center",
        },
        {
          blockType: "image",
          image: props.image,
          imageSize: 50,
          bottomMargin: false,
        },
      ]}
      spacing="regular"
      bottomMargin={props.bottomMargin}
      blockType="row"
      payload={props.payload}
    />
  );
}
