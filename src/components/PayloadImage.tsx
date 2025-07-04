import { Media } from "@payload-types";
import Image from "next/image";
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
}

export default async function PayloadImage(props: PayloadImageProps) {
  const media = await getMedia(props.media!, props.payload);
  return (
    <Image
      src={media.url}
      alt={media.alt}
      width={props.fill ? undefined : media.width}
      height={props.fill ? undefined : media.height}
      className={props.className}
      style={{
        ...props.style,
        ...{
          flex: props.equalHeight ? media.width / media.height : undefined,
          minWidth: props.equalHeight ? 0 : undefined,
        },
      }}
      fill={props.fill}
      sizes={props.sizes}
      // unoptimized={props.unoptimized}
      unoptimized
    ></Image>
  );
}
