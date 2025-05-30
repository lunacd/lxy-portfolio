/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */

/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import { importMap } from "./admin/importMap.js";
import "./custom.scss";
import config from "@payload-config";
import "@payloadcms/next/css";
import { RootLayout, handleServerFunctions } from "@payloadcms/next/layouts";
import type { ServerFunctionClient } from "payload";
import React from "react";

type Args = {
  children: React.ReactNode;
};

const serverFunctions: ServerFunctionClient = async function (args) {
  "use server";
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  });
};

const Layout = ({ children }: Args) => (
  <RootLayout
    config={config}
    importMap={importMap}
    serverFunction={serverFunctions}
  >
    {children}
  </RootLayout>
);

export default Layout;
