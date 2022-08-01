import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";

import PageRoot from "../components/page-root";
import ProjectsGallery from "../components/projects-gallery";
import Scroller from "../components/scroller";
import { Sidebar } from "../components/sidebar";
import TopDisplay from "../components/top-display";
import { projectData, projects } from "../utils/project-data";
import { transitionSlow } from "../utils/transition";
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

      <PageRoot>
        <Sidebar route="projects" prevRoute={prevRoute} />
        <div className="relative flex-grow h-0">
          {prevRoute.length > 0 && (
            <motion.div
              style={{ x: "0%" }}
              animate={{ x: prevRoute.length > 0 ? "-100%" : "0%" }}
              transition={transitionSlow}
              className="flex-grow absolute top-0 left-0 -z-10"
            >
              <TopDisplay project={projectData[projects.indexOf(prevRoute)]} />
            </motion.div>
          )}
          <motion.div
            style={{ x: prevRoute.length > 0 ? "100%" : "0%" }}
            animate={{ x: "0%" }}
            transition={transitionSlow}
          >
            <Scroller bgColor="bg-[#FDF9F1]">
              <ProjectsGallery data={projectData} width={3217} height={2659} />
            </Scroller>
          </motion.div>
        </div>
      </PageRoot>
    </>
  );
};

export default Projects;
