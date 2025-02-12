import styles from "./RowBlock.module.css";
import { ProjectPage } from "@payload-types";
import classNames from "classnames";
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
      className={classNames(`grid ${styles.row}`, {
        "items-start": props.alignment === "start",
        "items-center": props.alignment === "center",
        "items-end": props.alignment === "end",
      })}
      style={
        {
          gap: getSpacing(props.spacing),
          marginBottom: getSpacing(props.bottomMargin),
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
