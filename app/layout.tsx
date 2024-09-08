"use client";

import "./global.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Catamaran } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import {
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";

import PageRoot from "@/components/PageRoot";
import { Sidebar } from "@/sections/Sidebar";
import { getInitialState, stateReducer } from "@/utils/GlobalState";
import GlobalStateContext from "@/utils/GlobalStateContext";

const catamaran = Catamaran({ subsets: ["latin"] });

function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [globalState, dispatch] = useReducer(
    stateReducer,
    pathname,
    getInitialState,
  );
  const providerValue = {
    globalState,
    dispatch,
  };
  const { route } = globalState;
  useEffect(() => {
    router.push(route);
  }, [router, route]);

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
                  layoutId={pathname}
                >
                  <FrozenRouter>{children}</FrozenRouter>
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
