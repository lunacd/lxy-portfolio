import classNames from "classnames";
import Image from "next/image";
import React from "react";

import Animation from "../utils/animation";
import ImageData from "../utils/image-data";

interface AnimatableProps {
  source: Animation | ImageData;
  alt?: string;
  frame?: number;
  adaptiveHeight?: boolean;
  totalWidth?: number;
  rowCount?: number;
  rowFactor?: number;
}

const defaultProps = {
  frame: 0,
  adaptiveHeight: false,
  totalWidth: 0,
  rowCount: 0,
  rowFactor: 0,
};

const Animatable: React.FC<AnimatableProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  const images =
    props.source instanceof Animation
      ? props.source.frames
      : [props.source.src];

  return (
    <div className="relative w-full">
      <div
        style={
          props.adaptiveHeight
            ? {
                width: `calc((${props.totalWidth}px - ${
                  (props.rowCount - 1) * 2
                }rem)/${props.rowFactor}*${props.source.width}/${
                  props.source.height
                }`,
              }
            : {}
        }
        className={classNames("transition-opacity duration-700 ease-linear", {
          "max-w-full": props.adaptiveHeight,
          "opacity-0": props.frame ? props.frame % images.length !== 0 : false,
        })}
      >
        <Image
          src={images[0]}
          alt={props.alt}
          layout="responsive"
          width={props.source.width}
          height={props.source.height}
          placeholder="blur"
        />
      </div>
      {images.map((image, index) => {
        if (index !== 0) {
          return (
            <div
              style={
                props.adaptiveHeight
                  ? {
                      height: `calc((${props.totalWidth}px - ${
                        (props.rowCount - 1) * 2
                      }rem)/${props.rowFactor}`,
                    }
                  : {}
              }
              className={classNames(
                "absolute left-0 top-0 w-full transition-opacity duration-700 ease-linear",
                {
                  "max-w-full": props.adaptiveHeight,
                  "opacity-0": props.frame % images.length !== index,
                },
              )}
              key={index}
            >
              <Image
                src={image}
                alt={props.alt}
                layout="responsive"
                width={props.source.width}
                height={props.source.height}
                placeholder="blur"
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Animatable;
