import Animatable from "./animatable";
import classNames from "classnames";
import React, { useRef, useState } from "react";
import { useElementSize, useInterval } from "usehooks-ts";

import { GalleryRow, GalleryRowConfig } from "../utils/gallery-row";

interface LargeGalleryProps {
  rows: GalleryRow[];
  description: string;
  botSpacing?: boolean;
}

const defaultProps = {
  botSpacing: true,
};

const LargeGallery: React.FC<LargeGalleryProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  const [containerRef, { width }] = useElementSize();
  const [currentFrame, setCurrentFrame] = useState(0);
  useInterval(() => {
    setCurrentFrame((orig) => orig + 1);
  }, 1500);
  let rowFactors = props.rows.map((row) =>
    row.images
      .map((curr) => curr.width / curr.height)
      .reduce((prev, curr) => prev + curr),
  );

  return (
    <div
      className={classNames("space-y-spacing w-full", {
        "mb-spacing-3lg": props.botSpacing,
        "mb-spacing": !props.botSpacing,
      })}
      ref={containerRef}
    >
      {props.rows.map((row, index) => {
        if (row.config === GalleryRowConfig.FixedHeight) {
          return (
            <div className="flex flex-row space-x-8" key={index}>
              {row.images.map((image, innerIndex) => {
                if (row.images.length === 1) {
                  return (
                    <Animatable
                      source={image}
                      alt={`${props.description} gallery image`}
                      frame={currentFrame}
                      key={innerIndex}
                    />
                  );
                } else {
                  return (
                    <Animatable
                      source={image}
                      alt={`${props.description} gallery image`}
                      frame={currentFrame}
                      adaptiveHeight={true}
                      totalWidth={width}
                      rowCount={row.images.length}
                      rowFactor={rowFactors[index]}
                      key={innerIndex}
                    />
                  );
                }
              })}
            </div>
          );
        } else {
          return (
            <div
              className={classNames("grid auto-cols-fr grid-flow-col gap-8", {
                "items-start": row.config === GalleryRowConfig.EqualWidthStart,
                "items-end": row.config === GalleryRowConfig.EqualWidthEnd,
              })}
              key={index}
            >
              {row.images.map((image, innerIndex) => (
                <Animatable
                  source={image}
                  alt={`${props.description} gallery image`}
                  frame={currentFrame}
                  key={innerIndex}
                />
              ))}
            </div>
          );
        }
      })}
    </div>
  );
};

export default LargeGallery;
