import classNames from "classnames";
import { StaticImageData } from "next/image";

import FloatUpMotion from "@/components/FloatUpMotion";
import LegacyAnimatable, { AnimationData } from "@/components/LegacyAnimatable";

interface DisplayImageProps {
  source: AnimationData;
  alt: string;
  xSpacing?: boolean;
  botSpacing?: boolean;
  frame?: number;
  overlayTitle?: string;
  overlayText?: string;
  textColor?: string;
}

const defaultProps = {
  botSpacing: true,
  xSpacing: false,
  textColor: "text-black",
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
        <LegacyAnimatable
          source={props.source}
          alt={props.alt}
          frame={props.frame}
        ></LegacyAnimatable>
        <div
          className={classNames("absolute right-2/3 bottom-2/3 pr-4", {
            "top-0": props.xSpacing,
            "top-4": !props.xSpacing,
            "left-0": props.xSpacing,
            "left-spacing-lg": !props.xSpacing,
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
  textColor?: string;
}

export function LegacyStaticDisplayImage(props: StaticDisplayImageProps) {
  return (
    <DisplayImage
      {...props}
      source={{
        frames: [{ src: props.src }],
        height: props.height,
        width: props.width,
      }}
    />
  );
}
