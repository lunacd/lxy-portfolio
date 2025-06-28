import { ProjectPage } from "@payload-types";
import classNames from "classnames";

import EmphasisText from "@/components/EmphasisText";
import { getSpacing } from "@/utils/spacingUtil";

type EmphasisTextBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "emphasisText" }
>;

export default function EmphasisTextBlock(props: EmphasisTextBlockProps) {
  return (
    <EmphasisText
      emphasis={props.emphasis}
      text={props.text}
      className={classNames({
        "text-white": props.textColor === "light",
        "text-black": props.textColor === "dark",
        "rounded-2xl p-8": props.useBackground,
      })}
      style={{
        marginBottom: getSpacing(props.bottomMargin),
        backgroundColor:
          props.backgroundColor && props.useBackground
            ? props.backgroundColor
            : undefined,
        boxShadow: props.useBackground
          ? "-1rem 1rem 0px 0px rgba(0,0,0,0.6)"
          : undefined,
      }}
    ></EmphasisText>
  );
}
