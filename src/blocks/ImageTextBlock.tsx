import ImageBlock from "./ImageBlock";
import TextBlock from "./TextBlock";
import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";

import { getSpacing } from "@/utils/spacingUtil";

type ImageTextBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "imageText" }
> & { payload: Payload };

export default function ImageTextBlock(props: ImageTextBlockProps) {
  return (
    <div
      className="gap-spacing grid grid-cols-3 items-end"
      style={{
        marginBottom: getSpacing(props.bottomMargin),
      }}
    >
      <ImageBlock
        blockType="image"
        image={props.image}
        imageSize={67}
        bottomMargin="none"
        payload={props.payload}
        className="col-span-2"
      ></ImageBlock>
      <TextBlock
        blockType="text"
        text={props.text}
        textColor={props.textColor}
        bottomMargin="none"
      ></TextBlock>
    </div>
  );
}
