import FloatUpMotion from "./FloatUpMotion";
import { Project } from "@payload-types";
import { Payload } from "payload";
import React from "react";
import "server-only";
import SmallGallerBlock from "src/blocks/SmallGalleryBlock";

import { getProjectLink } from "@/utils/payloadHelpers";

interface ProjectsGalleryProps {
  projects: Project[];
  payload: Payload;
}

export default async function ProjectsGallery(props: ProjectsGalleryProps) {
  return (
    <FloatUpMotion>
      <SmallGallerBlock
        items={props.projects.map((project) => {
          return {
            image: project.projectGalleryImage,
            text: {
              root: {
                direction: "ltr",
                type: "root",
                version: 0,
                format: "",
                indent: 0,
                children: [
                  {
                    type: "paragraph",
                    version: 0,
                    children: [
                      { type: "text", text: project.name, format: "bold" },
                      { type: "text", text: ` - ${project.category}` },
                    ],
                  },
                ],
              },
            },
            link: getProjectLink(project.uri, project.externalLink),
          };
        })}
        blockType="smallGallery"
        payload={props.payload}
        bottomMarginNew="xxl"
      />
    </FloatUpMotion>
  );
}
