import classNames from "classnames";
import { StaticImageData } from "next/image";

import Animatable, { AnimationData } from "@/components/Animatable";
import FloatUpMotion from "@/components/FloatUpMotion";

interface DisplayImageProps {
  source: AnimationData;
  alt: string;
  xSpacing?: boolean;
  botSpacing?: boolean;
  frame?: number;
  overlayTitle?: string;
  overlayText?: string;
  textPosition?: "left" | "right";
  textColor?: string;
}

const defaultProps = {
  botSpacing: true,
  xSpacing: false,
  textColor: "text-black",
  textPosition: "left",
};

export default function DisplayImage(propsIn: DisplayImageProps) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <FloatUpMotion>
      <div
        className={classNames("relative", {
          "mb-spacing-3lg": props.botSpacing,
          "mb-spacing": !props.botSpacing,
          "w-full": !props.xSpacing,
          single: props.xSpacing,
        })}
      >
        <Animatable
          source={props.source}
          alt={props.alt}
          frame={props.frame}
        ></Animatable>
        <div
          className={classNames("absolute bottom-2/3", {
            "top-0": props.xSpacing,
            "top-4": !props.xSpacing,
            "left-0": props.xSpacing && props.textPosition === "left",
            "left-spacing-lg": !props.xSpacing && props.textPosition === "left",
            "right-0": props.xSpacing && props.textPosition === "right",
            "right-spacing-lg":
              !props.xSpacing && props.textPosition === "right",
            "right-2/3 pr-4": props.textPosition === "left",
            "left-2/3 pl-4 text-right": props.textPosition === "right",
          })}
        >
          {props.overlayTitle && (
            <div className={`subtitle ${props.textColor}`}>
              {props.overlayTitle}
            </div>
          )}
          {props.overlayText && (
            <div className={`paragraph ${props.textColor} hidden md:block`}>
              {props.overlayText}
            </div>
          )}
        </div>
      </div>
    </FloatUpMotion>
  );
}

interface StaticDisplayImageProps {
  src: StaticImageData;
  width: number;
  height: number;
  alt: string;
  xSpacing?: boolean;
  botSpacing?: boolean;
  frame?: number;
  overlayTitle?: string;
  overlayText?: string;
  textPosition?: "left" | "right";
  textColor?: string;
}

export function StaticDisplayImage(props: StaticDisplayImageProps) {
  return (
    <DisplayImage
      source={{
        frames: [{ src: props.src }],
        height: props.height,
        width: props.width,
      }}
      alt={props.alt}
      xSpacing={props.xSpacing}
      botSpacing={props.botSpacing}
      overlayTitle={props.overlayTitle}
      overlayText={props.overlayText}
      textPosition={props.textPosition}
      textColor={props.textColor}
    />
  );
}
