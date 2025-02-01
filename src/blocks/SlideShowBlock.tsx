import { ProjectPage } from "@payload-types";
import classNames from "classnames";
import { Payload } from "payload";
import React from "react";
import "server-only";

import PayloadImage from "@/components/PayloadImage";
import SlideShowAnimation from "@/components/SlideShowAnimation";
import { getMedia } from "@/utils/payloadHelpers";
import { getSpacing } from "@/utils/spacingUtil";

type SlideShowBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "slideShow" }
> & {
  payload: Payload;
  className?: string;
  sizes?: string;
  fill?: boolean;
  equalHeight?: boolean;
};

export default async function SlideShowBlock(props: SlideShowBlockProps) {
  if (props.images.length === 0) {
    return <></>;
  }
  const firstImage = await getMedia(props.images[0].image, props.payload);
  return (
    <>
      <SlideShowAnimation
        style={{
          marginBottom: getSpacing(props.bottomMargin),
          flex: props.equalHeight ? firstImage.width / firstImage.height : 0,
          minWidth: 0,
        }}
        className={props.className ? props.className : ""}
      >
        {props.images.map((image, index) => (
          <PayloadImage
            payload={props.payload}
            sizes={props.sizes ? props.sizes : "100vw"}
            media={image.image}
            fill={props.fill}
            className={classNames("h-full w-full", {
              "absolute top-0 left-0": index > 0,
            })}
            key={index}
          />
        ))}
      </SlideShowAnimation>
    </>
  );
}
