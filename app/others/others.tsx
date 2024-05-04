import ProjectsGallery from "@/components/projects-gallery";
import Scroller from "@/components/scroller";
import { PageProps } from "@/utils/page-props";
import { otherProjectsData } from "@/utils/project-data";
import { NextPage } from "next";
import Head from "next/head";

const Others: NextPage<PageProps> = () => {
  return (
    <>
      <Head>
        <title>Other Projects | Shirley Lyu Portfolio</title>
      </Head>

      <Scroller bgColor="bg-[#FDF9F1]">
        <ProjectsGallery data={otherProjectsData} width={960} height={793} />
      </Scroller>
    </>
  );
};

export default Others;
