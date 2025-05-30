import React, { PropsWithChildren, forwardRef } from "react";

import LegacySpacing from "@/components/LegacySpacing";

interface ScrollerProps {
  bgColor?: string | null;
}

const Scroller = forwardRef<HTMLDivElement, PropsWithChildren<ScrollerProps>>(
  function Scroller(props, ref) {
    return (
      <div
        style={{ backgroundColor: props.bgColor ? props.bgColor : undefined }}
        className="h-screen min-h-[30rem] grow overflow-x-hidden overflow-y-scroll xl:min-h-[34rem]"
        ref={ref}
      >
        <div className="flex flex-col items-center">
          {props.children}
          <LegacySpacing size="medium" />
        </div>
      </div>
    );
  },
);

export default Scroller;
