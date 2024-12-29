import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import React from "react";
import "server-only";
import Block from "src/blocks/Block";

import { getSpacing } from "@/utils/spacingUtil";

export type RowBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "row" }
> & {
  payload: Payload;
};

export default function RowBlock(props: RowBlockProps) {
  return (
    <div
      style={
        {
          gap: getSpacing(props.spacing),
          marginBottom: getSpacing(props.spacing),
          "--column-count": props.blocks.length,
        } as React.CSSProperties
      }
    >
      {props.blocks.map((block, index) => (
        <Block key={index} block={block} payload={props.payload} />
      ))}
    </div>
  );
}
