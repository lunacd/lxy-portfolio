/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import { importMap } from "./admin/importMap";
import "./custom.scss";
import configPromise from "@payload-config";
import "@payloadcms/next/css";
import { RootLayout } from "@payloadcms/next/layouts";

/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import React from "react";

type Args = {
  children: React.ReactNode;
};

const Layout = ({ children }: Args) => (
  <RootLayout importMap={importMap} config={configPromise}>
    {children}
  </RootLayout>
);

export default Layout;
