import React, { PropsWithChildren, forwardRef } from "react";

import { getSpacing } from "@/utils/spacingUtil";

interface ScrollerProps {
  bgColor?: string | null;
  restoreId?: string;
}

const Scroller = forwardRef<HTMLDivElement, PropsWithChildren<ScrollerProps>>(
  function Scroller(props, ref) {
    return (
      <div
        style={{ backgroundColor: props.bgColor ? props.bgColor : undefined }}
        className="h-screen min-h-[30rem] grow overflow-x-hidden overflow-y-scroll xl:min-h-[34rem]"
        ref={ref}
        data-scroll-restoration-id={props.restoreId}
      >
        <div
          className="flex flex-col items-center"
          style={{ marginBottom: getSpacing("medium") }}
        >
          {props.children}
        </div>
      </div>
    );
  },
);

export default Scroller;
