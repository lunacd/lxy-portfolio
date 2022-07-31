import { NextPage } from "next";
import Head from "next/head";

import PageRoot from "../components/page-root";
import Scroller from "../components/scroller";
import { Sidebar } from "../components/sidebar";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Overlap | Shirley Lyu Portfolio</title>
      </Head>

      <PageRoot>
        <Sidebar route="" prevRoute="" />
        <Scroller bgColor="bg-[#FDF9F1]"></Scroller>
      </PageRoot>
    </>
  );
};

export default Projects;
