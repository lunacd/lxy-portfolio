import ProjectsGallery from "@/components/ProjectsGallery";
import Scroller from "@/components/Scroller";
import { otherProjectsData } from "@/utils/projectData";
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
