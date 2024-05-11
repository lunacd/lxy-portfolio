import classNames from "classnames";
import React from "react";

interface SpacingProps {
  size: "small" | "medium" | "large";
}

const Spacing: React.FC<SpacingProps> = (props) => {
  return (
    <div
      className={classNames({
        "pt-spacing": props.size === "small",
        "pt-spacing-lg": props.size === "medium",
        "pt-spacing-3lg": props.size === "large",
      })}
    />
  );
};

export default Spacing;
