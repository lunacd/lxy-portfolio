import TextBlock from "./TextBlock";
import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";

import Row from "@/components/Row";
import SlideShow from "@/components/SlideShow";
import { unwrapImages } from "@/utils/payloadHelpers";

type HorizontalGalleryBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "horizontalGallery" }
> & { payload: Payload };

export default function HorizontalGalleryBlock(
  props: HorizontalGalleryBlockProps,
) {
  return (
    <Row
      alignment="start"
      spacing={props.spacing}
      bottomMargin={props.bottomMargin}
      length={props.items.length}
    >
      {props.items.map((item, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <SlideShow
            images={item.images.map(unwrapImages)}
            sizes={`${100 / props.items.length}vw`}
            payload={props.payload}
          />
          {item.text && (
            <TextBlock
              text={item.text}
              textColor={props.textColor}
              bottomMargin="none"
              blockType="text"
            ></TextBlock>
          )}
        </div>
      ))}
    </Row>
  );
}
