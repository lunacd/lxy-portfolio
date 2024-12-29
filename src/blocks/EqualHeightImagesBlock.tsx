import { ProjectPage } from "@payload-types";
import { Payload } from "payload";

import PayloadImage from "@/components/PayloadImage";
import { getSpacing } from "@/utils/spacingUtil";

type EqualHeightImagesBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "equalHeightImages" }
> & { payload: Payload };

export default function EqualHeightImagesBlock(
  props: EqualHeightImagesBlockProps,
) {
  return (
    <div
      className="flex w-full flex-row"
      style={{
        gap: `${getSpacing(props.spacing)}`,
      }}
    >
      {props.items.map((item, index) => (
        <PayloadImage
          key={index}
          payload={props.payload}
          media={item.image}
          sizes={`${item.imageSize}vw`}
        ></PayloadImage>
      ))}
    </div>
  );
}
