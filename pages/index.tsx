import classNames from "classnames";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { useInterval } from "usehooks-ts";

import PageRoot from "../components/page-root";
import Scroller from "../components/scroller";
import { Sidebar } from "../components/sidebar";
import TopDisplay from "../components/top-display";
import { transitionFast, transitionSlow } from "../utils/transition";

const projects: ("overlap" | "lyu")[] = ["overlap", "lyu"];

const Home: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainDisplay, setMainDisplay] = useState(true);
  const previousIndex =
    currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  const mainIndex = mainDisplay ? currentIndex : previousIndex;
  const alternateIndex = mainDisplay ? previousIndex : currentIndex;

  useInterval(() => {
    setCurrentIndex((orig) => (orig + 1) % projects.length);
    setMainDisplay((orig) => !orig);
  }, 3000);

  return (
    <>
      <Head>
        <title>Portfolio | Shirley Lyu Portfolio</title>
      </Head>
      <PageRoot>
        <Sidebar
          route={projects[currentIndex]}
          prevRoute={projects[previousIndex]}
        />
        <div className="relative flex-grow h-screen overflow-hidden">
          <motion.div
            style={{ opacity: 1 }}
            animate={{ opacity: mainDisplay ? 1 : 0 }}
            transition={transitionSlow}
          >
            <TopDisplay project={projects[mainIndex]} />
          </motion.div>
          <motion.div
            className="absolute left-0 top-0 h-full w-full"
            style={{ opacity: 0 }}
            animate={{ opacity: mainDisplay ? 0 : 1 }}
            transition={transitionSlow}
          >
            <TopDisplay project={projects[alternateIndex]} />
          </motion.div>
        </div>
      </PageRoot>
    </>
  );
};

export default Home;
