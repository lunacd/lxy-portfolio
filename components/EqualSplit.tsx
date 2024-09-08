import { PropsWithChildren } from "react";

export default function EqualSplit(props: PropsWithChildren<{}>) {
  return (
    <div className={"grid w-single grid-cols-1 gap-spacing md:grid-cols-2"}>
      {props.children}
    </div>
  );
}
