import GlobalStateContextProvider from "./GlobalStateContextProvider";
import PageAnimation from "./PageAnimation";
import "./global.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import config from "@payload-config";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Catamaran } from "next/font/google";
import { getPayload } from "payload";
import React, { PropsWithChildren } from "react";

import Sidebar from "@/components/Sidebar";

const catamaran = Catamaran({ subsets: ["latin"] });

export default async function RootLayout(props: PropsWithChildren) {
  const payload = await getPayload({
    config,
  });
  const projects = (
    await payload.find({
      collection: "projects",
      pagination: false,
      where: {
        isMainProject: {
          equals: true,
        },
      },
      sort: "order",
    })
  ).docs;
  const projectNames = projects.map((project) => project.name);
  return (
    <html lang="en">
      <body className={catamaran.className}>
        <div className="flex flex-col lg:flex-row">
          <GlobalStateContextProvider projectNames={projectNames}>
            <Sidebar />
            <div className="relative min-h-screen grow overflow-x-hidden">
              <PageAnimation>{props.children}</PageAnimation>
            </div>
          </GlobalStateContextProvider>
        </div>
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-26S1RW6P14" />
    </html>
  );
}
