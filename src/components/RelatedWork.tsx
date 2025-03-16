import ProjectsGallery from "./ProjectsGallery";
import { Project } from "@payload-types";
import classNames from "classnames";
import { Payload } from "payload";

import TitleBlock from "@/blocks/TitleBlock";
import { getSpacing } from "@/utils/spacingUtil";

interface RelatedWorkProps {
  projects: (Project | number)[];
  color: "dark" | "light";
  payload: Payload;
}

export default function RelatedWork(props: RelatedWorkProps) {
  return (
    <>
      <div
        className={classNames("w-single border-b", {
          "border-black": props.color === "dark",
          "border-white": props.color === "light",
        })}
        style={{ marginBottom: getSpacing("regular") }}
      ></div>
      <div className="w-single">
        <TitleBlock
          text="Related Works"
          blockType="title"
          bottomMargin="regular"
          textColor={props.color}
          titleType="title"
        />
      </div>
      <ProjectsGallery
        projects={props.projects}
        payload={props.payload}
        color={props.color}
      />
    </>
  );
}
