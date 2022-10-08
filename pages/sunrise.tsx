import Head from "next/head";
import React from "react";

import Scroller from "../components/scroller";
import TopDisplay from "../components/top-display";
import { PageProps } from "../utils/page-props";
import { projectData, projects } from "../utils/project-data";
import useScroll from "../utils/use-scroll";

const Sunrise: React.FC<PageProps> = (props) => {
  const scrollDiv = useScroll(!props.swipeAnimation);
  return (
    <>
      <Head>
        <title>Sunrise Speaker | Shirley Lyu Portfolio</title>
      </Head>

      <Scroller bgColor="bg-[#D8D6D4]" divRef={scrollDiv}>
        <TopDisplay
          project={projectData[projects.indexOf("sunrise")]}
          animation={false}
        />
      </Scroller>
    </>
  );
};

export default Sunrise;
