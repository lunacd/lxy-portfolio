import { ProjectPage } from "@payload-types";
import classNames from "classnames";
import { Payload } from "payload";
import "server-only";

import PayloadImage from "@/components/PayloadImage";
import { getSpacing } from "@/utils/spacingUtil";

type HorizontalScrollBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "horizontalScroll" }
> & { payload: Payload };

export default function HorizontalScrollBlock(
  props: HorizontalScrollBlockProps,
) {
  return (
    <>
      <div
        className={classNames("paragraph mb-8 w-full", {
          "text-white": props.textColor === "light",
          "text-black": props.textColor === "dark",
        })}
      >
        {props.scrollPrompt}
      </div>
      <div
        className="mb-spacing-3lg w-full overflow-x-scroll"
        style={{
          marginBottom: getSpacing(props.bottomMargin),
        }}
      >
        <div style={{ width: `${props.width}%` }}>
          <PayloadImage
            media={props.image}
            payload={props.payload}
            sizes={`${props.width}%`}
            unoptimized
          />
        </div>
      </div>
    </>
  );
}
