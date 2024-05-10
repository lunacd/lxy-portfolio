import ProjectsGallery from "@/components/projects-gallery";
import Scroller from "@/components/scroller";
import { projectsData } from "@/utils/project-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Shirley Lyu",
};

export default function Projects() {
  return (
    <Scroller bgColor="bg-[#FDF9F1]">
      <ProjectsGallery
        data={Object.values(projectsData)}
        width={3217}
        height={2659}
      />
    </Scroller>
  );
}
