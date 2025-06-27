import { ProjectPage } from "@payload-types";
import classNames from "classnames";

import EmphasisText from "@/components/EmphasisText";
import { getSpacing } from "@/utils/spacingUtil";

type NoteBlockProps = Extract<ProjectPage["blocks"][0], { blockType: "note" }>;

export default function NoteBlock(props: NoteBlockProps) {
  return (
    <EmphasisText
      emphasis={props.noteEmoji}
      text={props.text}
      className={classNames({
        "text-white": props.textColor === "light",
        "text-black": props.textColor === "dark",
      })}
      style={{
        marginBottom: getSpacing(props.bottomMargin),
        backgroundColor: props.backgroundColor,
      }}
    ></EmphasisText>
  );
}
