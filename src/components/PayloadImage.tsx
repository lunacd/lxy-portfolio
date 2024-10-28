import { Media } from "@payload-types";
import Image from "next/image";
import { Payload } from "payload";
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
        flex: props.equalHeight ? media.width / media.height : 0,
      }}
      fill={props.fill}
      sizes={props.sizes}
      unoptimized={props.unoptimized}
    ></Image>
  );
}
