import PayloadImageInteractive from "./PayloadImageInteractive";
import { Media } from "@payload-types";
import { Payload } from "payload";
import { CSSProperties } from "react";
import "server-only";

import { getMedia } from "@/utils/payloadHelpers";

interface PayloadImageProps {
  media?: Media | number | null;
  payload: Payload;
  className?: string;
  fill?: boolean;
  sizes: string;
  unoptimized?: boolean;
  equalHeight?: boolean;
  style?: CSSProperties;
  canZoom?: boolean | undefined | null;
}

export default async function PayloadImage(props: PayloadImageProps) {
  const media = await getMedia(props.media!, props.payload);
  return (
    <PayloadImageInteractive
      media={media}
      className={props.className}
      fill={props.fill}
      sizes={props.sizes}
      unoptimized={props.unoptimized}
      equalHeight={props.equalHeight}
      style={props.style}
      canZoom={props.canZoom}
    ></PayloadImageInteractive>
  );
}
