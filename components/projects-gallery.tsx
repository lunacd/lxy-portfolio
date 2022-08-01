import Image from "next/image";
import Link from "next/link";
import React from "react";

import ProjectData from "../utils/project-data";

interface ProjectsGalleryProps {
  data: ProjectData[];
  width: number;
  height: number;
}

const ProjectsGallery: React.FC<ProjectsGalleryProps> = (props) => {
  return (
    <div className="single grid grid-cols-3 gap-spacing my-spacing-3lg">
      {props.data.map((data, index) => {
        return (
          <div key={index}>
            <Link href={data.link} passHref>
              <a>
                <Image
                  src={data.smallImage}
                  alt={data.name}
                  layout="responsive"
                  width={props.width}
                  height={props.height}
                />
              </a>
            </Link>
            <div className="mt-2">
              <span className="subtitle">{data.name}</span>
              <span className="paragraph"> - {data.category}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsGallery;
