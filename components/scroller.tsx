import Spacing from "./spacing";
import React, { PropsWithChildren } from "react";

interface ScrollerProps {
  bgColor: string;
}

const Scroller: React.FC<PropsWithChildren<ScrollerProps>> = (props) => {
  return (
    <div
      className={`flex-grow ${props.bgColor} h-screen min-h-[30rem] xl:min-h-[34rem] overflow-x-hidden overflow-y-scroll`}
    >
      <div className="flex flex-col items-center">
        {props.children}
        <Spacing />
      </div>
    </div>
  );
};

export default Scroller;
