import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";

import InteractiveImage from "@/components/InteractiveImage";
import { getSpacing } from "@/utils/spacingUtil";

type ImageWithTextOverlayBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "interactiveImage" }
> & { payload: Payload };

export default function InteractiveImageBlock(
  props: ImageWithTextOverlayBlockProps,
) {
  return (
    <InteractiveImage
      media={props.image}
      sizes={`${props.imageSize}wv`}
      interactiveBlocks={props.interactiveBlocks}
      payload={props.payload}
      backgroundColor={props.backgroundColor}
      textColor={props.textColor}
      style={{ marginBottom: getSpacing(props.bottomMargin) }}
    ></InteractiveImage>
  );
}
