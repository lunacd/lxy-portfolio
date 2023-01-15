import { NextPage } from "next";
import Head from "next/head";

import Button from "../components/button";
import ProjectNavigation from "../components/project-navigation";
import Scroller from "../components/scroller";
import Spacing from "../components/spacing";
import TextImage from "../components/text-image";
import TopDisplay from "../components/top-display";
import { PageProps } from "../utils/page-props";
import { projectData, projects } from "../utils/project-data";
import useScroll from "../utils/use-scroll";

import Manifesto from "../images/skates/manifesto-half.webp";

const Skates: NextPage<PageProps> = (props) => {
  const scrollDiv = useScroll(!props.swipeAnimation);
  return (
    <>
      <Head>
        <title>Skates | Shirley Lyu Portfolio</title>
      </Head>

      <Scroller bgColor="bg-[#F0EBE6]" divRef={scrollDiv}>
        <TopDisplay
          project={projectData[projects.indexOf("skates")]}
          animation={false}
        />

        <TextImage
          title="Project Manifesto"
          content={[
            "A versatile chair designed for shared open spaces. “Skates” refers to its special affordances to dance around different needs and environments. It has two elegant “skating blades” and a multipurpose surface. It is designed to be casually shared, easily moved, and artfully arranged into any ad-hoc working space.",
          ]}
          image={Manifesto}
          width={960}
          height={620}
        />

        <Button text="View the Project" href="/skates_booklet.pdf" />
        <Spacing size="medium" />
        <div className="text-center text-xs">
          This is a project sponsored by Bernhardt.
        </div>
        <Spacing size="medium" />

        <ProjectNavigation prev="/soul" next="/overlap" />
      </Scroller>
    </>
  );
};

export default Skates;
