import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import React from "react";
import "server-only";

interface ConnectPromptProps {
  textColor?: string;
}

const defaultProps = {
  textColor: "text-black",
};

export default async function ConnectPrompt(propsIn: ConnectPromptProps) {
  const props = { ...defaultProps, ...propsIn };
  const payload = await getPayloadHMR({
    config,
  });
  const data = await payload.findGlobal({
    slug: "global",
  });
  return (
    <>
      <div className={`mt-8 text-lg ${props.textColor}`}>
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
