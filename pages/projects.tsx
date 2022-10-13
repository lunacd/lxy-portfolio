import { NextPage } from "next";
import Head from "next/head";

import ProjectsGallery from "../components/projects-gallery";
import Scroller from "../components/scroller";
import { projectData } from "../utils/project-data";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects | Shirley Lyu Portfolio</title>
      </Head>

      <Scroller bgColor="bg-[#FDF9F1]">
        <ProjectsGallery data={projectData} width={3217} height={2659} />
      </Scroller>
    </>
  );
};

export default Projects;
