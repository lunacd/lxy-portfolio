import classNames from "classnames";
import { Payload } from "payload";
import React from "react";
import "server-only";

import { getSpacing } from "@/utils/spacingUtil";

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
    <div
      style={{ marginBottom: getSpacing("xxl") }}
      className="w-single flex flex-col items-center"
    >
      <div className={classNames("paragraph mt-8", props.textColor)}>
        {data.connectionPrompt}
      </div>
      <a
        href="mailto:shirley.lyu.xiaoya@gmail.com"
        className={`${props.textColor}`}
      >
        shirley.lyu.xiaoya@gmail.com
      </a>
    </div>
  );
}
