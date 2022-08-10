import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";

import { transitionSlow } from "../utils/transition";

interface OverlayImageProps {
  title: string;
  content: string;
  image: string | StaticImageData;
  width: number;
  height: number;
  fullScreen?: boolean;
  botSpacing?: boolean;
  lightText?: boolean;
}

const defaultProps = {
  fullScreen: false,
  botSpacing: true,
  lightText: false,
};

const OverlayImage: React.FC<OverlayImageProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className={classNames("relative mb-spacing-3lg", {
        "single mx-spacing-lg": !props.fullScreen,
        "w-full": props.fullScreen,
        "mb-spacing-3lg": props.botSpacing,
        "mb-spacing": !props.botSpacing,
      })}
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      <Image
        src={props.image}
        alt={props.title}
        className="w-full"
        layout="responsive"
        width={props.width}
        height={props.height}
        placeholder="blur"
      />
      <div
        className={classNames("absolute right-2/3 bottom-2/3 pr-4", {
          "top-0 left-0": !props.fullScreen,
          "top-4 left-spacing-lg": props.fullScreen,
        })}
      >
        <div
          className={classNames("subtitle", {
            "text-white": props.lightText,
          })}
        >
          {props.title}
        </div>
        <div
          className={classNames("paragraph", {
            "text-white": props.lightText,
          })}
        >
          {props.content}
        </div>
      </div>
    </motion.div>
  );
};

export default OverlayImage;
