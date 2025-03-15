import ProjectsGallery from "./ProjectsGallery";
import { Project } from "@payload-types";
import classNames from "classnames";
import { Payload } from "payload";

import TitleBlock from "@/blocks/TitleBlock";

interface RelatedWorkProps {
  projects: (Project | number)[];
  color: "dark" | "light";
  payload: Payload;
}

export default function RelatedWork(props: RelatedWorkProps) {
  return (
    <>
      <div
        className={classNames("border-b", {
          "border-black": props.color === "dark",
          "border-white": props.color === "light",
        })}
      ></div>
      <div className="w-single">
        <TitleBlock
          text="Related Works"
          blockType="title"
          bottomMargin="regular"
          textColor={props.color}
          type="title"
        />
      </div>
      <ProjectsGallery projects={props.projects} payload={props.payload} />
    </>
  );
}
