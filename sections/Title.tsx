import React from "react";

import FloatUpMotion from "@/components/FloatUpMotion";

interface TitleProps {
  title: string;
  textColor?: string;
}

const defaultProps = {
  textColor: "text-black",
};

const Title: React.FC<TitleProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  return (
    <FloatUpMotion>
      <div
        className={`title single mx-spacing-lg mb-spacing-lg ${props.textColor}`}
      >
        {props.title}
      </div>
    </FloatUpMotion>
  );
};

export default Title;
