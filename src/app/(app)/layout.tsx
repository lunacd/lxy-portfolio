import GlobalStateContextProvider from "./GlobalStateContextProvider";
import PageAnimation from "./PageAnimation";
import "./global.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Catamaran } from "next/font/google";
import React, { PropsWithChildren } from "react";

import Sidebar from "@/components/Sidebar";

const catamaran = Catamaran({ subsets: ["latin"] });

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={catamaran.className}>
        <div className="flex flex-col lg:flex-row">
          <GlobalStateContextProvider>
            <Sidebar />
            <div className="relative min-h-screen flex-grow overflow-x-hidden">
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
