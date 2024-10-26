import classNames from "classnames";
import Image from "next/image";
import { StaticImageData } from "next/image";
import React from "react";

interface FrameData {
  src: StaticImageData;
  unoptimized?: boolean;
  unblurred?: boolean;
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
  fill?: boolean;
}

const defaultProps = {
  frame: 0,
  fill: false,
};

const LegacyAnimatable: React.FC<AnimatableProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };

  return (
    <div
      className="relative h-full w-full"
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
          width={props.fill ? undefined : props.source.width}
          height={props.fill ? undefined : props.source.height}
          unoptimized={props.source.frames[0].unoptimized}
          placeholder={props.source.frames[0].unblurred ? "blur" : undefined}
          fill={props.fill}
          className={classNames({ "object-cover": props.fill })}
        />
      </div>
      {props.source.frames.map((image, index) => {
        if (index !== 0) {
          return (
            <div
              className={classNames(
                "absolute left-0 top-0 h-full w-full transition-opacity duration-700 ease-linear",
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
                width={props.fill ? undefined : props.source.width}
                height={props.fill ? undefined : props.source.height}
                unoptimized={image.unoptimized}
                placeholder="blur"
                fill={props.fill}
                className={classNames({ "object-cover": props.fill })}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default LegacyAnimatable;
