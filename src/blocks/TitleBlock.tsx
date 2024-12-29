import { ProjectPage } from "@payload-types";
import classNames from "classnames";
import "server-only";

type TitleBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "title" }
>;

export default function TitleBlock(props: TitleBlockProps) {
  return (
    <div
      className={classNames(`${props.type}`, {
        "mb-spacing-lg": props.bottomMargin,
        "text-white": props.textColor === "light",
        "text-black": props.textColor === "dark",
      })}
    >
      {props.text}
    </div>
  );
}
