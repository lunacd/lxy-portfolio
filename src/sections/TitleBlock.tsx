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
        "text-white": props.color === "light",
        "text-black": props.color === "dark",
      })}
    >
      {props.text}
    </div>
  );
}
