import ProjectsGallery from "./ProjectsGallery";
import { Project } from "@payload-types";
import { Payload } from "payload";

import TitleBlock from "@/blocks/TitleBlock";

interface RelatedWorkProps {
  projects: (Project | number)[];
  payload: Payload;
}

export default function RelatedWork(props: RelatedWorkProps) {
  return (
    <>
      <div className="w-single">
        <TitleBlock
          text="Related Works"
          blockType="title"
          bottomMargin="regular"
          textColor="dark"
          type="title"
        />
      </div>
      <ProjectsGallery projects={props.projects} payload={props.payload} />
    </>
  );
}
