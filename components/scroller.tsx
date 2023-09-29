import Spacing from "./spacing";
import React, { PropsWithChildren, RefObject } from "react";

interface ScrollerProps {
  bgColor: string;
  divRef?: RefObject<HTMLDivElement>;
}

const Scroller: React.FC<PropsWithChildren<ScrollerProps>> = (props) => {
  return (
    <div
      className={`flex-grow ${props.bgColor} h-screen min-h-[30rem] overflow-x-hidden overflow-y-scroll xl:min-h-[34rem]`}
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
