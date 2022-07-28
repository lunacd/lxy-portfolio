import Animatable from "./animatable";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

import { GalleryRowConfig, GalleryRowData } from "../utils/gallery-row-data";
import { transitionSlow } from "../utils/transition";

interface GalleryRowProps {
  row: GalleryRowData;
  description: string;
  currentFrame: number;
  width: number;
}

const GalleryRow: React.FC<GalleryRowProps> = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  let rowFactor = props.row.images
    .map((curr) => curr.width / curr.height)
    .reduce((prev, curr) => prev + curr);
  if (props.row.config === GalleryRowConfig.FixedHeight) {
    return (
      <motion.div
        className="flex flex-row space-x-8"
        style={{ y: "3rem" }}
        animate={{ y: isInView ? "0rem" : "3rem" }}
        transition={transitionSlow}
        ref={ref}
      >
        {props.row.images.map((image, innerIndex) => {
          if (props.row.images.length === 1) {
            return (
              <Animatable
                source={image}
                alt={`${props.description} gallery image`}
                frame={props.currentFrame}
                key={innerIndex}
              />
            );
          } else {
            return (
              <Animatable
                source={image}
                alt={`${props.description} gallery image`}
                frame={props.currentFrame}
                adaptiveHeight={true}
                totalWidth={props.width}
                rowCount={props.row.images.length}
                rowFactor={rowFactor}
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
        className={classNames("grid auto-cols-fr grid-flow-col gap-8", {
          "items-start": props.row.config === GalleryRowConfig.EqualWidthStart,
          "items-end": props.row.config === GalleryRowConfig.EqualWidthEnd,
        })}
        style={{ y: "3rem" }}
        animate={{ y: isInView ? "0rem" : "3rem" }}
        transition={transitionSlow}
        ref={ref}
      >
        {props.row.images.map((image, innerIndex) => (
          <Animatable
            source={image}
            alt={`${props.description} gallery image`}
            frame={props.currentFrame}
            key={innerIndex}
          />
        ))}
      </motion.div>
    );
  }
};

export default GalleryRow;
