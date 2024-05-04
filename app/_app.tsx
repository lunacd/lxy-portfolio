import PageRoot from "@/components/page-root";
import { Sidebar } from "@/components/sidebar";
import { PageProps } from "@/utils/page-props";
import { projects } from "@/utils/project-data";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";

import "../styles/globals.css";

const isProject = (link: string) => {
  if (!link.startsWith("/")) {
    return false;
  }
  const linkName = link.slice(1);
  for (const project of projects) {
    if (linkName.startsWith(project)) {
      return true;
    }
  }
  return false;
};

const hamburgerColors = [
  "text-white", // soul
  "text-black", // skates
  "text-black", // overlap
  "text-black", // sunrise
  "text-white", // m-tron
  "text-black", // lyu
];

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  // Routing
  const router = useRouter();
  const [displayAnimation, setDisplayAnimation] = useState(true);
  const [swipeAnimation, setSwipeAnimation] = useState(true);
  const onLink = (link: string) => {
    setDisplayAnimation(false);
    const currentPageIsProject = isProject(router.pathname);
    const targetPageIsProject = isProject(link);
    if (
      (router.pathname === "/" || currentPageIsProject) &&
      targetPageIsProject
    ) {
      setSwipeAnimation(false);
    } else {
      setSwipeAnimation(true);
    }
    // noinspection JSIgnoredPromiseFromCall
    router.push(link);
  };

  // Main page cycling
  const [hamburgerColor, setHamburgerColor] = useState("text-black");
  const [counter, setCounter] = useState(0);
  const [interval, setInterval] = useState<number | null>(3000);
  useEffect(() => {
    setHamburgerColor(hamburgerColors[counter % hamburgerColors.length]);
  }, [counter]);
  const hoverEnter = (route: string) => {
    setInterval(null);
    setCounter(projects.indexOf(route));
  };
  const hoverLeave = () => {
    setInterval(3000);
    setCounter((orig) => orig + 1);
  };
  useInterval(() => {
    setCounter((orig) => orig + 1);
  }, interval);
  pageProps.displayProject = counter % projects.length;
  pageProps.displayAnimation = displayAnimation;
  pageProps.swipeAnimation = swipeAnimation;
  pageProps.onLink = onLink;

  // Get current route
  const [currentRoute, setCurrentRoute] = useState("");
  const [useCounter, setUseCounter] = useState(false);

  useEffect(() => {
    if (router.pathname === "/") {
      setUseCounter(true);
      setDisplayAnimation(true);
    } else {
      setUseCounter(false);
      setCurrentRoute(router.pathname.slice(1));
      setDisplayAnimation(false);
    }
  }, [router.pathname]);

  return (
    <>
      <PageRoot>
        <Sidebar
          route={
            useCounter ? projects[counter % projects.length] : currentRoute
          }
          hoverEnter={hoverEnter}
          hoverLeave={hoverLeave}
          onLink={onLink}
          hamburgerColor={useCounter ? hamburgerColor : "text-black"}
        />
        <div className="relative min-h-screen flex-grow overflow-x-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              className="absolute left-0 top-0 z-0 h-full w-full"
              initial={{ x: swipeAnimation ? "100%" : "0%" }}
              animate={{ x: "0%" }}
              exit={{ x: swipeAnimation ? "-100%" : "0%" }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              key={router.pathname}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </div>
      </PageRoot>
    </>
  );
}

export default MyApp;
