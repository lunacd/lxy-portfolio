import React, { PropsWithChildren, forwardRef } from "react";

import Spacing from "@/components/Spacing";

interface ScrollerProps {
  bgColor: string;
}

const Scroller = forwardRef<HTMLDivElement, PropsWithChildren<ScrollerProps>>(
  function Scroller(props, ref) {
    return (
      <div
        style={{ backgroundColor: props.bgColor }}
        className="h-screen min-h-[30rem] flex-grow overflow-x-hidden overflow-y-scroll
          xl:min-h-[34rem]"
        ref={ref}
      >
        <div className="flex flex-col items-center">
          {props.children}
          <Spacing size="medium" />
        </div>
      </div>
    );
  },
);

export default Scroller;
