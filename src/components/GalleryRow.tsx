import classNames from "classnames";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

import LegacyAnimatable, { AnimationData } from "@/components/LegacyAnimatable";
import { transitionSlow } from "@/utils/transitions";

export enum GalleryRowLayout {
  FixedHeight,
  EqualWidthStart,
  EqualWidthEnd,
}

interface GalleryRowProps {
  layout?: GalleryRowLayout;
  images: AnimationData[];
  description: string;
  currentFrame: number;
}

export default function GalleryRow(props: GalleryRowProps) {
  const layout = props.layout || GalleryRowLayout.FixedHeight;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  if (layout === GalleryRowLayout.FixedHeight) {
    return (
      <motion.div
        className="space-x-spacing flex flex-row"
        style={{ y: "3rem" }}
        animate={{ y: isInView ? "0rem" : "3rem" }}
        transition={transitionSlow}
        ref={ref}
      >
        {props.images.map((image, innerIndex) => {
          if (props.images.length === 1) {
            return (
              <LegacyAnimatable
                source={image}
                alt={`${props.description} gallery image`}
                frame={props.currentFrame}
                key={innerIndex}
              />
            );
          } else {
            return (
              <LegacyAnimatable
                source={image}
                alt={`${props.description} gallery image`}
                frame={props.currentFrame}
                key={innerIndex}
              />
            );
          }
        })}
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className={classNames(
          "space-x-spacing grid auto-cols-fr grid-flow-col",
          {
            "items-start": layout === GalleryRowLayout.EqualWidthStart,
            "items-end": layout === GalleryRowLayout.EqualWidthEnd,
          },
        )}
        style={{ y: "3rem" }}
        animate={{ y: isInView ? "0rem" : "3rem" }}
        transition={transitionSlow}
        ref={ref}
      >
        {props.images.map((image, innerIndex) => (
          <LegacyAnimatable
            source={image}
            alt={`${props.description} gallery image`}
            frame={props.currentFrame}
            key={innerIndex}
          />
        ))}
      </motion.div>
    );
  }
}
