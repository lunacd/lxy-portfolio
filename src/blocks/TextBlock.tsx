import { ProjectPage } from "@payload-types";
import classNames from "classnames";

import Text from "@/components/Text";
import { getSpacing } from "@/utils/spacingUtil";

type TextBlockProps = Extract<ProjectPage["blocks"][0], { blockType: "text" }>;

export default function TextBlock(props: TextBlockProps) {
  return (
    <Text
      className={classNames({
        "text-white": props.textColor === "light",
        "text-black": props.textColor === "dark",
      })}
      style={{ marginBottom: getSpacing(props.bottomMargin) }}
      text={props.text}
    ></Text>
  );
}
