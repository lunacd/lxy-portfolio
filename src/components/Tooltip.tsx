import styles from "./Tooltip.module.css";
import React from "react";

interface TopTipProps {
  tip: string;
}

export default function ToolTip(props: React.PropsWithChildren<TopTipProps>) {
  return (
    <div className={styles.content}>
      {props.children}
      <div className={styles.tooltip}>{props.tip}</div>
    </div>
  );
}
