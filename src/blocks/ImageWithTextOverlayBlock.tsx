import { ProjectPage } from "@payload-types";
import classNames from "classnames";
import { Payload } from "payload";
import "server-only";

import PayloadImage from "@/components/PayloadImage";
import Text from "@/components/Text";
import { getSpacing } from "@/utils/spacingUtil";

type ImageWithTextOverlayBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "imageWithTextOverlay" }
> & { payload: Payload };

export default function ImageWithTextOverlayBlock(
  props: ImageWithTextOverlayBlockProps,
) {
  return (
    <div className="relative flex flex-col-reverse gap-4 md:block">
      <PayloadImage
        media={props.image}
        payload={props.payload}
        sizes={`${props.imageSize}vw`}
        style={{ marginBottom: getSpacing(props.bottomMargin) }}
        className="relative h-full w-full"
      />
      <Text
        text={props.textOverlay}
        className={classNames("top-0 right-2/3 left-0 md:absolute", {
          "text-white": props.textColor === "light",
          "text-black": props.textColor === "dark",
        })}
      ></Text>
    </div>
  );
}
