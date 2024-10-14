import React, { PropsWithChildren, RefObject } from "react";

import Spacing from "@/components/Spacing";

interface ScrollerProps {
  bgColor: string;
  divRef?: RefObject<HTMLDivElement>;
}

const Scroller: React.FC<PropsWithChildren<ScrollerProps>> = (props) => {
  return (
    <div
      style={{ backgroundColor: props.bgColor }}
      className="h-screen min-h-[30rem] flex-grow overflow-x-hidden overflow-y-scroll
        xl:min-h-[34rem]"
      ref={props.divRef}
    >
      <div className="flex flex-col items-center">
        {props.children}
        <Spacing size="medium" />
      </div>
    </div>
  );
};

export default Scroller;
