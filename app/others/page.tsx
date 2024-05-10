import ProjectsGallery from "@/components/projects-gallery";
import Scroller from "@/components/scroller";
import { otherProjectsData } from "@/utils/project-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Projects | Shirley Lyu",
};

export default function Others() {
  return (
    <Scroller bgColor="bg-[#FDF9F1]">
      <ProjectsGallery data={otherProjectsData} width={960} height={793} />
    </Scroller>
  );
}
