import classNames from "classnames";
import React, { useState } from "react";
import { useInterval } from "usehooks-ts";

import { AnimationData } from "@/components/LegacyAnimatable";
import GalleryRow, { GalleryRowLayout } from "@/components/GalleryRow";

interface GalleryRowData {
  layout?: GalleryRowLayout;
  images: AnimationData[];
}

interface LargeGalleryProps {
  rows: GalleryRowData[];
  description: string;
  botSpacing?: boolean;
  xSpacing?: boolean;
}

const defaultProps = {
  botSpacing: true,
  xSpacing: false,
};

const LargeGallery: React.FC<LargeGalleryProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };

  const [currentFrame, setCurrentFrame] = useState(0);
  useInterval(() => {
    setCurrentFrame((orig) => orig + 1);
  }, 1500);

  return (
    <div
      className={classNames({
        "mb-spacing-3lg": props.botSpacing,
        "mb-spacing": !props.botSpacing,
        "w-full": !props.xSpacing,
        single: props.xSpacing,
      })}
    >
      <div className="w-full space-y-spacing">
        {props.rows.map((row, index) => (
          <GalleryRow
            layout={row.layout}
            images={row.images}
            description={props.description}
            currentFrame={currentFrame}
            key={index}
          ></GalleryRow>
        ))}
      </div>
    </div>
  );
};

export default LargeGallery;
