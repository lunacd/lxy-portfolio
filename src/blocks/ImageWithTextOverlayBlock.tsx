import TextBlock from "./TextBlock";
import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";

import PayloadImage from "@/components/PayloadImage";
import { getSpacing } from "@/utils/spacingUtil";

type ImageWithTextOverlayBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "imageWithTextOverlay" }
> & { payload: Payload };

export default function ImageWithTextOverlayBlock(
  props: ImageWithTextOverlayBlockProps,
) {
  return (
    <div className="relative flex md:block flex-col-reverse gap-4">
      <PayloadImage
        media={props.image}
        payload={props.payload}
        sizes={`${props.imageSize}vw`}
        style={{ marginBottom: getSpacing(props.bottomMargin) }}
        className="relative h-full w-full"
      />
      <TextBlock
        text={props.textOverlay}
        textColor={props.textColor}
        blockType="text"
        bottomMargin="none"
        className="md:absolute top-0 right-2/3 left-0"
      ></TextBlock>
    </div>
  );
}
