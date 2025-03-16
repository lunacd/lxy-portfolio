import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import React from "react";
import "server-only";

import SlideShow from "@/components/SlideShow";
import { unwrapImages } from "@/utils/payloadHelpers";
import { getSpacing } from "@/utils/spacingUtil";

type SlideShowBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "slideShow" }
> & {
  payload: Payload;
};

export default async function SlideShowBlock(props: SlideShowBlockProps) {
  if (props.images.length === 0) {
    return <></>;
  }
  return (
    <>
      <SlideShow
        images={props.images.map(unwrapImages)}
        sizes={`${props.imageSize}vw`}
        payload={props.payload}
        style={{ marginBottom: getSpacing(props.bottomMargin) }}
      ></SlideShow>
    </>
  );
}
