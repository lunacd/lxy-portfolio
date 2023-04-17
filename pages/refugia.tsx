import Head from "next/head";
import React from "react";

import Button from "../components/button";
import ProjectNavigation from "../components/project-navigation";
import Scroller from "../components/scroller";
import Spacing from "../components/spacing";
import TextImage from "../components/text-image";
import TopDisplay from "../components/top-display";
import { PageProps } from "../utils/page-props";
import { projectData, projects } from "../utils/project-data";
import useScroll from "../utils/use-scroll";

import Manifesto from "../images/refugia/manifesto-half.webp";

const Refugia: React.FC<PageProps> = (props) => {
  const scrollDiv = useScroll(!props.swipeAnimation);
  return (
    <>
      <Head>
        <title>Refugia | Shirley Lyu Portfolio</title>
      </Head>

      <Scroller bgColor="bg-[#EEEAE2]" divRef={scrollDiv}>
        <TopDisplay
          project={projectData[projects.indexOf("refugia")]}
          animation={false}
          displayDescriptionOnMobile={true}
        />

        <TextImage
          title="Project Manifesto"
          content={[
            "Refugia is an urban animal den for audiences to experience from animals' perspectives. It provides a sensory experience of animals' sight and feeling, and shows the adaptation of animals to the urban environment.  It's a good place for people to rethink their relationship with nature.",
          ]}
          image={Manifesto}
          width={960}
          height={620}
        />

        <Button text="View the Project" href="/refugia.pdf" />
        <Spacing size="large" />

        <ProjectNavigation prev="/lyu" />
      </Scroller>
    </>
  );
};

export default Refugia;
