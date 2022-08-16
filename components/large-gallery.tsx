import GalleryRow from "./gallery-row";
import classNames from "classnames";
import React, { useState } from "react";
import { useElementSize, useInterval } from "usehooks-ts";

import { GalleryRowData } from "../utils/gallery-row-data";

interface LargeGalleryProps {
  rows: GalleryRowData[];
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

  return (
    <div
      className={classNames("w-full", {
        "mb-spacing-3lg": props.botSpacing,
        "mb-spacing": !props.botSpacing,
      })}
    >
      <div className="space-y-spacing w-full" ref={containerRef}>
        {props.rows.map((row, index) => (
          <GalleryRow
            row={row}
            description={props.description}
            currentFrame={currentFrame}
            width={width}
            key={index}
          ></GalleryRow>
        ))}
      </div>
    </div>
  );
};

export default LargeGallery;
