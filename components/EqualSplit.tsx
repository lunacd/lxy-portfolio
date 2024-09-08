import classNames from "classnames";
import React, { PropsWithChildren } from "react";

interface EqualSplitProps {
  fill?: boolean;
}

const defaultProps = {
  fill: false,
};

export default function EqualSplit(
  propsIn: PropsWithChildren<EqualSplitProps>,
) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <div
      className={classNames("grid grid-cols-1 gap-spacing md:grid-cols-2", {
        "w-single": !props.fill,
        "w-full": props.fill,
      })}
    >
      {React.Children.map(props.children, (child) => {
        return <div>{child}</div>;
      })}
    </div>
  );
}
