import { ProjectPage } from "@payload-types";
import "server-only";

type TitleBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "title" }
>;

export default function TitleBlock(props: TitleBlockProps) {
  const colorClass = props.color === "light" ? "text-white" : "text-black";
  return (
    <div className={`${props.type} ${colorClass} mb-spacing-lg`}>
      {props.text}
    </div>
  );
}
