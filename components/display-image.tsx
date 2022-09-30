import Animatable from "./animatable";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";

import Animation from "../utils/animation";
import ImageData from "../utils/image-data";
import { transitionSlow } from "../utils/transition";

interface DisplayImageProps {
  source: ImageData | Animation;
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
};

const DisplayImage: React.FC<DisplayImageProps> = (propsIn) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const props = { ...defaultProps, ...propsIn };
  return (
    <motion.div
      className={classNames("relative", {
        "mb-spacing-3lg": props.botSpacing,
        "mb-spacing": !props.botSpacing,
        "w-full": !props.xSpacing,
        single: props.xSpacing,
      })}
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
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
          "right-spacing-lg": !props.xSpacing && props.textPosition === "right",
          "pr-4 right-2/3": props.textPosition === "left",
          "pl-4 left-2/3 text-right": props.textPosition === "right",
        })}
      >
        {props.overlayTitle && (
          <div className={`subtitle ${props.textColor}`}>
            {props.overlayTitle}
          </div>
        )}
        {props.overlayText && (
          <div className={`paragraph ${props.textColor}`}>
            {props.overlayText}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default DisplayImage;
