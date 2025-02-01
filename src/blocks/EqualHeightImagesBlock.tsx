import SlideShowBlock from "./SlideShowBlock";
import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";

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
        gap: getSpacing(props.spacing),
        marginBottom: getSpacing(props.bottomMargin),
      }}
    >
      {props.items.map((item, index) => (
        <SlideShowBlock
          key={index}
          blockType="slideShow"
          payload={props.payload}
          images={item.images}
          bottomMargin="none"
          sizes={`${item.imageSize}vw`}
          equalHeight={true}
        />
      ))}
    </div>
  );
}
