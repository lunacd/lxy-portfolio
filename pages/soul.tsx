import { NextPage } from "next";
import Head from "next/head";

import Scroller from "../components/scroller";
import TextImage from "../components/text-image";
import TopDisplay from "../components/top-display";
import { PageProps } from "../utils/page-props";
import { projectData, projects } from "../utils/project-data";
import useScroll from "../utils/use-scroll";

import ManifestoImage from "../images/soul/manifesto-half.webp";

const Soul: NextPage<PageProps> = (props) => {
  const scrollDiv = useScroll(!props.swipeAnimation);

  return (
    <>
      <Head>
        <title>Soul | Shirley Lyu Portfolio</title>
      </Head>

      <Scroller bgColor="bg-[#EEEAE2]" divRef={scrollDiv}>
        <TopDisplay
          project={projectData[projects.indexOf("soul")]}
          animation={false}
        />

        {/* Manifesto */}
        <TextImage
          title="Project Manifesto"
          content={[
            "Regularly meditating with Rolls-Royce Meditation sets you up forever to better yourself every day. Accompanying the Rolls-Royce meditation set, you could easily fall into peace and clarity through your senses: sight, smell, and sound.",
          ]}
          image={ManifestoImage}
          width={2560}
          height={1599}
        />

        <div className="text-center text-xl font-semibold">
          Work in progress. Stay tuned!
        </div>
      </Scroller>
    </>
  );
};

export default Soul;
