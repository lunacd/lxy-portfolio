import { Project } from "@payload-types";
import Link from "next/link";
import { Payload } from "payload";
import React from "react";
import "server-only";

import CategoryTag from "@/components/CategoryTag";
import PayloadImage from "@/components/PayloadImage";

interface ProjectsGalleryProps {
  projects: Project[];
  payload: Payload;
}

export default async function ProjectsGallery(props: ProjectsGalleryProps) {
  return (
    <div className="single mb-spacing-3lg mt-spacing-lg grid grid-cols-2 gap-spacing lg:grid-cols-3">
      {props.projects.map((project, index) => {
        return (
          <div
            key={index}
            className="transition-transform duration-200 ease-out hover:-translate-y-4"
          >
            <Link href={`/${project.uri}`} className="cursor-pointer">
              <PayloadImage
                media={project.projectGalleryImage}
                payload={props.payload}
                sizes="33vw"
              />
            </Link>
            <div className="mt-2">
              <span className="subtitle">{project.name}</span>
              <span className="paragraph hidden lg:inline">
                {" "}
                - {project.category}
              </span>
              <span className="paragraph relative -top-1 lg:hidden">
                <br />
                {project.category}
              </span>
            </div>
            {project.focuses && project.isMainProject && (
              <div className="mt-2 flex flex-row flex-wrap gap-1">
                {project.focuses.map((focus, index) => {
                  return (
                    <div className="mb-2" key={index}>
                      <CategoryTag category={focus.focus} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
