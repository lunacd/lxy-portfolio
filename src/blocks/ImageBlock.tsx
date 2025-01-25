import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";

import PayloadImage from "@/components/PayloadImage";
import { getSpacing } from "@/utils/spacingUtil";

type ImageBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "image" }
> & { payload: Payload; className?: string };

export default function ImageBlock(props: ImageBlockProps) {
  return (
    <PayloadImage
      media={props.image}
      payload={props.payload}
      sizes={`${props.imageSize}vw`}
      style={{ marginBottom: getSpacing(props.bottomMargin) }}
      className={props.className}
    />
  );
}
