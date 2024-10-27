import GlobalStateContextProvider from "./GlobalStateContextProvider";
import PageAnimation from "./PageAnimation";
import { PropsWithChildren } from "react";

import Sidebar from "@/sections/Sidebar";

interface PageScaffoldProps {
  focus?: string;
}

export default function PageScaffold(
  props: PropsWithChildren<PageScaffoldProps>,
) {
  return (
    <div className="flex flex-col lg:flex-row">
      <GlobalStateContextProvider>
        <Sidebar focus={props.focus} />
        <div className="relative min-h-screen flex-grow overflow-x-hidden">
          <PageAnimation>{props.children}</PageAnimation>
        </div>
      </GlobalStateContextProvider>
    </div>
  );
}
