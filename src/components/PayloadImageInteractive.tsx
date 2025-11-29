"use client";

import classNames from "classnames";
import { motion } from "motion/react";
import Image from "next/image";
import { CSSProperties, useState } from "react";

import { NonOptionalMedia } from "@/utils/payloadHelpers";

interface PayloadInteractiveImageProps {
  media: NonOptionalMedia;
  className?: string;
  fill?: boolean;
  sizes: string;
  unoptimized?: boolean;
  equalHeight?: boolean;
  style?: CSSProperties;
}

const MotionImage = motion(Image);

export default function PayloadImageInteractive(
  props: PayloadInteractiveImageProps,
) {
  const [isZoomed, setIsZoomed] = useState(false);
  return (
    <div
      className={isZoomed ? "fixed inset-0 z-50 bg-black/80" : ""}
      onClick={() => {
        setIsZoomed((orig) => !orig);
      }}
    >
      <MotionImage
        layoutId={props.media.url}
        src={props.media.url}
        alt={props.media.alt}
        width={props.fill ? undefined : props.media.width}
        height={props.fill ? undefined : props.media.height}
        className={classNames(props.className, {
          "absolute top-1/2 -translate-y-1/2": isZoomed,
        })}
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
        // unoptimized={props.unoptimized}
        unoptimized
      ></MotionImage>
    </div>
  );
}
