import { Payload } from "payload";
import React from "react";
import "server-only";

interface ConnectPromptProps {
  textColor?: string;
  payload: Payload;
}

const defaultProps = {
  textColor: "text-black",
};

export default async function ConnectPrompt(propsIn: ConnectPromptProps) {
  const props = { ...defaultProps, ...propsIn };
  const data = await props.payload.findGlobal({
    slug: "global",
    depth: 0,
  });
  return (
    <>
      <div className={`paragraph mt-8 ${props.textColor}`}>
        {data.connectionPrompt}
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
