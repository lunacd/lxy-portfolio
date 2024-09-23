import React from "react";

interface ConnectPromptProps {
  textColor?: string;
}

const defaultProps = {
  textColor: "text-black",
};

export default function ConnectPrompt(propsIn: ConnectPromptProps) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <>
      <div className={`mt-8 text-lg ${props.textColor}`}>
        Let&#39;s connect!
      </div>
      <a
        href="mailto:shirley.lyu.xiaoya@gmail.com"
        className={`${props.textColor}`}
      >
        shirley.lyu.xiaoya@gmail.com
      </a>
    </>
  );
}
