import { ProjectPage } from "@payload-types";
import classNames from "classnames";
import { Payload } from "payload";
import "server-only";

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
      className={classNames({
        "mb-spacing-3lg": props.bottomMargin,
      })}
    />
  );
}
