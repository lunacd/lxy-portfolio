import SlideShowBlock from "./SlideShowBlock";
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
      <SlideShowBlock
        images={props.images}
        blockType="slideShow"
        bottomMargin="none"
        payload={props.payload}
        className="col-span-2"
      ></SlideShowBlock>
      <TextBlock
        blockType="text"
        text={props.text}
        textColor={props.textColor}
        bottomMargin="none"
      ></TextBlock>
    </div>
  );
}
