import Head from "next/head";
import React from "react";

import Scroller from "../components/scroller";
import TopDisplay from "../components/top-display";
import { PageProps } from "../utils/page-props";
import { projectData, projects } from "../utils/project-data";
import useScroll from "../utils/use-scroll";

const Refugia: React.FC<PageProps> = (props) => {
  const scrollDiv = useScroll(!props.swipeAnimation);
  return (
    <>
      <Head>
        <title>Soul | Shirley Lyu Portfolio</title>
      </Head>

      <Scroller bgColor="bg-[#EEEAE2]" divRef={scrollDiv}>
        <TopDisplay
          project={projectData[projects.indexOf("refugia")]}
          animation={false}
        />
      </Scroller>
    </>
  );
};

export default Refugia;
