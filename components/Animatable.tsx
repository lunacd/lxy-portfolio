import classNames from "classnames";
import Image from "next/image";
import { StaticImageData } from "next/image";
import React from "react";

interface FrameData {
  src: string | StaticImageData;
  unoptimized?: boolean;
}

export interface AnimationData {
  frames: FrameData[];
  width: number;
  height: number;
}

interface AnimatableProps {
  source: AnimationData;
  alt: string;
  frame?: number;
}

const defaultProps = {
  frame: 0,
};

const Animatable: React.FC<AnimatableProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };

  return (
    <div
      className="relative w-full"
      style={{
        flex: props.source.width / props.source.height,
      }}
    >
      <div
        className={classNames("transition-opacity duration-700 ease-linear", {
          "opacity-0": props.frame
            ? props.frame % props.source.frames.length !== 0
            : false,
        })}
      >
        <Image
          src={props.source.frames[0].src}
          alt={props.alt}
          width={props.source.width}
          height={props.source.height}
          unoptimized={props.source.frames[0].unoptimized}
          placeholder="blur"
        />
      </div>
      {props.source.frames.map((image, index) => {
        if (index !== 0) {
          return (
            <div
              className={classNames(
                "absolute left-0 top-0 w-full transition-opacity duration-700 ease-linear",
                {
                  "opacity-0":
                    props.frame % props.source.frames.length !== index,
                },
              )}
              key={index}
            >
              <Image
                src={image.src}
                alt={props.alt}
                width={props.source.width}
                height={props.source.height}
                unoptimized={image.unoptimized}
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
