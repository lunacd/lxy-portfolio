import { ProjectPage } from "@payload-types";
import classNames from "classnames";
import { Payload } from "payload";
import React from "react";
import "server-only";
import Block from "src/blocks/Block";

import { getSpacing } from "@/utils/spacingUtil";

export type ColumnBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "column" }
> & { payload: Payload };

export default function ColumnBlock(props: ColumnBlockProps) {
  return (
    <div
      className={classNames("flex flex-col", {
        "justify-start": props.justify === "start",
        "justify-center": props.justify === "center",
        "justify-end": props.justify === "end",
      })}
      style={{
        gap: getSpacing(props.spacing),
        marginBottom: getSpacing(props.bottomMarginNew),
      }}
    >
      {props.blocks.map((block, index) => (
        <Block key={index} block={block} payload={props.payload} />
      ))}
    </div>
  );
}
