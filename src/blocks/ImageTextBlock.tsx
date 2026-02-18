import TextBlock from "./TextBlock";
import { ProjectPage } from "@payload-types";
import classNames from "classnames";
import { Payload } from "payload";
import "server-only";

import SlideShow from "@/components/SlideShow";
import Text from "@/components/Text";
import { unwrapImages } from "@/utils/payloadHelpers";
import { getSpacing } from "@/utils/spacingUtil";

type ImageTextBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "imageText" }
> & { payload: Payload };

export default function ImageTextBlock(props: ImageTextBlockProps) {
  return (
    <div
      className="gap-spacing row-start-2 grid grid-cols-3 items-end md:row-auto"
      style={{
        marginBottom: getSpacing(props.bottomMargin),
      }}
    >
      <SlideShow
        images={props.images.map(unwrapImages)}
        payload={props.payload}
        className="col-span-3 md:col-span-2"
        sizes="67vw"
      />
      <Text
        className={classNames(
          "col-span-3 row-start-1 md:col-span-1 md:row-auto",
          {
            "text-white": props.textColor === "light",
            "text-black": props.textColor === "dark",
          },
        )}
        style={{ marginBottom: getSpacing(props.bottomMargin) }}
        text={props.text}
      ></Text>
    </div>
  );
}
