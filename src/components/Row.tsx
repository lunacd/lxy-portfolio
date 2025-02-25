import styles from "./Row.module.css";
import classNames from "classnames";
import React from "react";

import { Spacing, getSpacing } from "@/utils/spacingUtil";

type Alignment = "start" | "center" | "end";

interface RowProps {
  alignment: Alignment;
  spacing: Spacing;
  bottomMargin: Spacing;
  length: number;
}

export default function Row(props: React.PropsWithChildren<RowProps>) {
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
          "--column-count": props.length,
        } as React.CSSProperties
      }
    >
      {props.children}
    </div>
  );
}
