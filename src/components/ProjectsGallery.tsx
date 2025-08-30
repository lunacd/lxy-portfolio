import { EdtechProject, ProductProject, UiuxProject } from "@payload-types";
import { Payload } from "payload";
import "server-only";

import SmallGalleryBlock from "@/blocks/SmallGalleryBlock";
import { PortfolioType } from "@/utils/CommonTypes";
import { getProject } from "@/utils/payloadHelpers";

interface ProjectsGalleryProps {
  type: PortfolioType;
  projects: (UiuxProject | EdtechProject | ProductProject | number)[];
  color: "dark" | "light";
  payload: Payload;
}

export default async function ProjectsGallery(props: ProjectsGalleryProps) {
  return (
    <SmallGalleryBlock
      items={await Promise.all(
        props.projects.map(async (rawProject) => {
          const project = await getProject(
            props.type,
            rawProject,
            props.payload,
          );
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
                    children: [{ type: "text", text: project.name, format: 1 }],
                  },
                ],
              },
            },
            link:
              project.externalLink && project.externalLink.length !== 0
                ? project.externalLink
                : `/${project.uri}`,
          };
        }),
      )}
      textColor={props.color}
      payload={props.payload}
      blockType="smallGallery"
      bottomMargin="xxl"
    />
  );
}
