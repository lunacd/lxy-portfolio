import { ProjectPage } from "@payload-types";
import classNames from "classnames";
import { Payload } from "payload";
import React from "react";
import "server-only";

import PayloadImage from "@/components/PayloadImage";
import SlideShowAnimation from "@/components/SlideShowAnimation";
import { getSpacing } from "@/utils/spacingUtil";

type SlideShowBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "slideShow" }
> & { payload: Payload; className?: string };

export default function SlideShowBlock(props: SlideShowBlockProps) {
  return (
    <>
      <SlideShowAnimation
        style={{
          marginBottom: getSpacing(props.bottomMargin),
        }}
        className={props.className}
      >
        {props.images.map((image, index) => (
          <div
            className={classNames(
              "w-full transition-opacity duration-700 ease-linear",
              {
                "absolute top-0 left-0 h-full": index > 0,
              },
            )}
            key={index}
          >
            <PayloadImage
              payload={props.payload}
              sizes="100vw"
              media={image.image}
            />
          </div>
        ))}
      </SlideShowAnimation>
    </>
  );
}
