import { ProjectPage } from "@payload-types";
import classNames from "classnames";

import { getSpacing } from "@/utils/spacingUtil";

type TitleBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "title" }
>;

export default function TitleBlock(props: TitleBlockProps) {
  return (
    <div
      className={classNames(`${props.type}`, {
        "text-white": props.textColor === "light",
        "text-black": props.textColor === "dark",
      })}
      style={{ marginBottom: getSpacing(props.bottomMargin) }}
    >
      {props.text}
    </div>
  );
}
