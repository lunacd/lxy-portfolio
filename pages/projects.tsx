import { NextPage } from "next";
import Head from "next/head";

import ProjectsGallery from "../components/projects-gallery";
import Scroller from "../components/scroller";
import { projectData, projects } from "../utils/project-data";
import usePrev from "../utils/use-prev";

const Projects: NextPage = () => {
  let prevRoute = usePrev();
  if (!projects.includes(prevRoute)) {
    prevRoute = "";
  }
  return (
    <>
      <Head>
        <title>Overlap | Shirley Lyu Portfolio</title>
      </Head>

      <Scroller bgColor="bg-[#FDF9F1]">
        <ProjectsGallery data={projectData} width={3217} height={2659} />
      </Scroller>
    </>
  );
};

export default Projects;
