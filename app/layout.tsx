"use client";

import "./global.css";
import PageRoot from "@/components/page-root";
import { Sidebar } from "@/components/sidebar";
import {
  GlobalState,
  GlobalStateAction,
  initialState,
  stateReducer,
} from "@/utils/globalState";
import GlobalStateContext from "@/utils/globalStateContext";
import { projects } from "@/utils/project-data";
import { GoogleAnalytics } from "@next/third-parties/google";
import { AnimatePresence, motion } from "framer-motion";
import { Catamaran } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useReducer, useState } from "react";
import { useInterval } from "usehooks-ts";

const catamaran = Catamaran({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [globalState, dispatch] = useReducer(stateReducer, initialState);
  const pathname = usePathname();
  const providerValue = {
    globalState,
    dispatch,
  };

  return (
    <html lang="en">
      <body className={catamaran.className}>
        <PageRoot>
          <GlobalStateContext.Provider value={providerValue}>
            <Sidebar />
            <div className="relative min-h-screen flex-grow overflow-x-hidden">
              <AnimatePresence initial={false}>
                <motion.div
                  className="absolute left-0 top-0 z-0 h-full w-full"
                  initial={{ x: globalState.swipeAnimation ? "100%" : "0%" }}
                  animate={{ x: "0%" }}
                  exit={{ x: globalState.swipeAnimation ? "-100%" : "0%" }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                  key={pathname}
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </div>
          </GlobalStateContext.Provider>
        </PageRoot>
      </body>
      <GoogleAnalytics gaId="G-26S1RW6P14" />
    </html>
  );
}
