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
  canZoom?: boolean | undefined | null;
  objectFit?: string | undefined;
  objectPosition?: string | undefined;
}

const MotionImage = motion.create(Image);

export default function PayloadImageInteractive(
  props: PayloadInteractiveImageProps,
) {
  const [isZoomed, setIsZoomed] = useState(false);
  return (
    <div
      style={{
        ...props.style,
        ...{
          aspectRatio: props.fill
            ? undefined
            : props.media.width / props.media.height,
        },
      }}
      className={props.className}
    >
      <motion.div
        className={isZoomed ? "fixed inset-0 z-50" : "h-full w-full"}
        onClick={() => {
          if (props.canZoom === true) {
            setIsZoomed((orig) => !orig);
          }
        }}
        animate={
          isZoomed
            ? { background: "rgba(0, 0, 0, 0.8)" }
            : { background: "rgba(0, 0, 0, 0)" }
        }
      >
        <MotionImage
          layoutId={props.canZoom ? props.media.url : undefined}
          src={props.media.url}
          alt={props.media.alt}
          width={props.fill ? undefined : props.media.width}
          height={props.fill ? undefined : props.media.height}
          className={classNames({
            [`absolute top-1/2 left-1/2 max-h-full max-w-full -translate-x-1/2
            -translate-y-1/2`]: isZoomed,
            "w-full": !isZoomed
          })}
          style={{
            flex: props.equalHeight
              ? props.media.width / props.media.height
              : undefined,
            minWidth: props.equalHeight ? 0 : undefined,
          }}
          fill={props.fill}
          sizes={props.sizes}
          unoptimized
          objectFit={isZoomed ? "contain" : props.objectFit}
          objectPosition={isZoomed ? undefined : props.objectPosition}
        ></MotionImage>
      </motion.div>
    </div>
  );
}
