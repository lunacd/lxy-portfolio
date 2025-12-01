import GlobalStateContextProvider from "./GlobalStateContextProvider";
import PageAnimation from "./PageAnimation";
import WalkingDuck from "./WalkingDuck";
import "./global.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import config from "@payload-config";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScrollRestoration } from "next-scroll-restoration";
import { Catamaran } from "next/font/google";
import Image from "next/image";
import { getPayload } from "payload";
import React, { PropsWithChildren } from "react";

import Sidebar from "@/components/Sidebar";
import { stringIsType } from "@/utils/CommonTypes";
import { payloadProjectSlug } from "@/utils/payloadHelpers";

const catamaran = Catamaran({ subsets: ["latin"] });

interface ParamType {
  type: string;
}

export default async function RootLayout(
  props: PropsWithChildren<{ params: Promise<ParamType> }>,
) {
  const { type } = await props.params;
  const payload = await getPayload({
    config,
  });
  if (!stringIsType(type)) {
    throw new Error(`Unknown project type: ${type}`);
  }
  const projects = (
    await payload.find({
      collection: payloadProjectSlug(type),
      pagination: false,
      where: {
        isMainProject: {
          equals: true,
        },
      },
      sort: "order",
    })
  ).docs;
  const projectRoutes = projects.map((project) => {
    return { name: project.name, uri: project.uri };
  });
  const projectNames = projects.map((project) => project.name);
  return (
    <html lang="en">
      <body className={catamaran.className}>
        <div className="hidden flex-col md:flex lg:flex-row">
          <GlobalStateContextProvider projectNames={projectNames}>
            <Sidebar type={type} projectRoutes={projectRoutes} />
            <div className="relative min-h-screen grow overflow-x-hidden">
              <PageAnimation>{props.children}</PageAnimation>
            </div>
          </GlobalStateContextProvider>
        </div>
        <div className="flex flex-col gap-4 p-8 md:hidden">
          <Image
            src="/logo.svg"
            alt="Shirley Lyu Logo"
            height={75}
            width={167}
            unoptimized
            className="max-w-1/2 self-center"
          />
          <WalkingDuck />
          <div className="text-center">
            Please use a larger screen to view this site to ensure best viewing
            experience.
          </div>
        </div>
        <ScrollRestoration />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-26S1RW6P14" />
    </html>
  );
}
