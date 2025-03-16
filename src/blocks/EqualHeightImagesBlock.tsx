import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";

import SlideShow from "@/components/SlideShow";
import { getMedia, unwrapImages } from "@/utils/payloadHelpers";
import { getSpacing } from "@/utils/spacingUtil";

type EqualHeightImagesBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "equalHeightImages" }
> & { payload: Payload };

export default async function EqualHeightImagesBlock(
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
      {await Promise.all(
        props.items.map(async (item, index) => {
          const firstImage = await getMedia(
            item.images[0].image,
            props.payload,
          );
          return (
            <SlideShow
              style={{
                marginBottom: getSpacing(props.bottomMargin),
                flex: firstImage.width / firstImage.height,
                minWidth: 0,
              }}
              key={index}
              payload={props.payload}
              images={item.images.map(unwrapImages)}
              sizes={`${item.imageSize}vw`}
            />
          );
        }),
      )}
    </div>
  );
}
