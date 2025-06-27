import { ProjectPage } from "@payload-types";
import classNames from "classnames";
import { Payload } from "payload";
import "server-only";

import Row from "@/components/Row";
import SlideShow from "@/components/SlideShow";
import Text from "@/components/Text";
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
            <Text
              text={item.text}
              className={classNames({
                "text-white": props.textColor === "light",
                "text-black": props.textColor === "dark",
              })}
            ></Text>
          )}
        </div>
      ))}
    </Row>
  );
}
