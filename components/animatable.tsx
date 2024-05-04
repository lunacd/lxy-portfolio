import Animation from "@/utils/animation";
import ImageData from "@/utils/image-data";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

interface AnimatableProps {
  source: Animation | ImageData;
  alt: string;
  frame?: number;
}

const defaultProps = {
  frame: 0,
};

const Animatable: React.FC<AnimatableProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  const images =
    props.source instanceof Animation
      ? props.source.frames
      : [props.source.src];

  return (
    <div
      className="relative w-full"
      style={{
        flex: props.source.width / props.source.height,
      }}
    >
      <div
        className={classNames("transition-opacity duration-700 ease-linear", {
          "opacity-0": props.frame ? props.frame % images.length !== 0 : false,
        })}
      >
        <Image
          src={images[0]}
          alt={props.alt}
          width={props.source.width}
          height={props.source.height}
          placeholder="blur"
        />
      </div>
      {images.map((image, index) => {
        if (index !== 0) {
          return (
            <div
              className={classNames(
                "absolute left-0 top-0 w-full transition-opacity duration-700 ease-linear",
                {
                  "opacity-0": props.frame % images.length !== index,
                },
              )}
              key={index}
            >
              <Image
                src={image}
                alt={props.alt}
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
