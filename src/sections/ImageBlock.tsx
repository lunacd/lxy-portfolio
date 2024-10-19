import { ProjectPage } from "@payload-types";
import { Payload } from "payload";

import PayloadImage from "@/components/PayloadImage";

type ImageBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "image" }
> & { payload: Payload };

export default function ImageBlock(props: ImageBlockProps) {
  return (
    <PayloadImage
      media={props.image}
      payload={props.payload}
      sizes={`${props.imageSize}vw`}
    />
  );
}
