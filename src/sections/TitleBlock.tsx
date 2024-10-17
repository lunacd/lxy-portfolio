import { ProjectPage } from "@payload-types";

import FloatUpMotion from "@/components/FloatUpMotion";

type TitleBlock = Extract<ProjectPage["blocks"][0], { blockType: "title" }>;

export default function LegacyTitle(props: TitleBlock) {
  const colorClass = props.color === "light" ? "text-white" : "text-black";
  return (
    <FloatUpMotion>
      <div
        className={`${props.type} ${colorClass} single mx-spacing-lg mb-spacing-lg`}
      >
        {props.text}
      </div>
    </FloatUpMotion>
  );
}
