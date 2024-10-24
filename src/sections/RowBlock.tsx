import styles from "./RowBlock.module.css";
import { ProjectPage } from "@payload-types";
import classNames from "classnames";
import { Payload } from "payload";
import React from "react";
import "server-only";

import Block from "@/sections/Block";
import { getSpacing } from "@/utils/spacingUtil";

type RowBlockProps = Extract<ProjectPage["blocks"][0], { blockType: "row" }> & {
  payload: Payload;
};

export default function RowBlock(props: RowBlockProps) {
  return (
    <div
      className={classNames(`grid ${styles.row}`, {
        "mb-spacing-3lg": props.bottomMargin,
      })}
      style={
        {
          gap: `${getSpacing(props.spacing)}`,
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
