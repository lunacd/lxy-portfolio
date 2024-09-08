import React, { PropsWithChildren } from "react";

export default function EqualSplit(props: PropsWithChildren<{}>) {
  return (
    <div className={"grid w-single grid-cols-1 gap-spacing md:grid-cols-2"}>
      {React.Children.map(props.children, (child) => {
        return <div>{child}</div>;
      })}
    </div>
  );
}
