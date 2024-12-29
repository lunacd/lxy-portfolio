import { ProjectPage } from "@payload-types";
import { Payload } from "payload";

import PayloadImage from "@/components/PayloadImage";

type EqualHeightImagesBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "equalHeightImages" }
> & { payload: Payload };

export default function EqualHeightImagesBlock(
  props: EqualHeightImagesBlockProps,
) {
  return (
    <div>
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
