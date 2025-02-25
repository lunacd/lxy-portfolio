import SlideShowBlock from "./SlideShowBlock";
import TextBlock from "./TextBlock";
import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";

import Row from "@/components/Row";
import { getSpacing } from "@/utils/spacingUtil";

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
          <SlideShowBlock
            images={item.images}
            bottomMargin="none"
            sizes={`${100 / props.items.length}vw`}
            payload={props.payload}
            blockType="slideShow"
          ></SlideShowBlock>
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
