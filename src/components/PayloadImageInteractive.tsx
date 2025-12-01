"use client";

import classNames from "classnames";
import { motion } from "motion/react";
import Image from "next/image";
import { CSSProperties } from "react";

import { useGlobalStateContext } from "@/utils/GlobalStateContext";
import { NonOptionalMedia } from "@/utils/payloadHelpers";

interface PayloadInteractiveImageProps {
  media: NonOptionalMedia;
  className?: string;
  fill?: boolean;
  sizes: string;
  unoptimized?: boolean;
  equalHeight?: boolean;
  style?: CSSProperties;
  canZoom?: boolean | undefined | null;
}

const MotionImage = motion.create(Image);

export default function PayloadImageInteractive(
  props: PayloadInteractiveImageProps,
) {
  const { dispatch } = useGlobalStateContext();
  return (
    <MotionImage
      src={props.media.url}
      alt={props.media.alt}
      width={props.fill ? undefined : props.media.width}
      height={props.fill ? undefined : props.media.height}
      className={classNames(props.className)}
      style={{
        ...props.style,
        ...{
          flex: props.equalHeight
            ? props.media.width / props.media.height
            : undefined,
          minWidth: props.equalHeight ? 0 : undefined,
        },
      }}
      fill={props.fill}
      sizes={props.sizes}
      onClick={() => {
        if (props.canZoom) {
          dispatch({
            type: "setZoomImage",
            src: props.media.url,
            alt: props.media.alt,
            width: props.media.width,
            height: props.media.height,
          });
        }
      }}
      unoptimized
    ></MotionImage>
  );
}
