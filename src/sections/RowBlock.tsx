import { ProjectPage } from "@payload-types";
import classNames from "classnames";

import Block from "@/sections/Block";
import { getSpacing } from "@/utils/spacingUtil";

type RowBlockProps = Extract<ProjectPage["blocks"][0], { blockType: "row" }>;

export default function RowBlock(props: RowBlockProps) {
  return (
    <div
      className={classNames("grid", { "mb-spacing-3lg": props.bottomMargin })}
      style={{
        gridTemplateColumns: `repeat(${props.blocks.length}, minmax(0, 1fr))`,
        gap: `${getSpacing(props.spacing)}`,
      }}
    >
      {props.blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </div>
  );
}
