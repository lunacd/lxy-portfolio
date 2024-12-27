import { ProjectPage } from "@payload-types";
import classNames from "classnames";
import { Payload } from "payload";
import React from "react";
import "server-only";

import Block from "@/sections/Block";
import { getSpacing } from "@/utils/spacingUtil";

export type ColumnBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "column" }
> & { payload: Payload };

export default function ColumnBlock(props: ColumnBlockProps) {
  return (
    <div
      className={classNames("flex flex-col", {
        "mb-spacing-3lg": props.bottomMargin,
        "justify-start": props.justify === "start",
        "justify-center": props.justify === "center",
        "justify-end": props.justify === "end",
      })}
      style={{
        gap: `${getSpacing(props.spacing)}`,
      }}
    >
      {props.blocks.map((block, index) => (
        <Block key={index} block={block} payload={props.payload} />
      ))}
    </div>
  );
}
