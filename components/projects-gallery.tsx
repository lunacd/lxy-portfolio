import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ProjectDataLean } from "../utils/project-data";
import { transitionFast } from "../utils/transition";

interface ProjectsGalleryProps {
  data: ProjectDataLean[];
  width: number;
  height: number;
}

const ProjectsGallery: React.FC<ProjectsGalleryProps> = (props) => {
  return (
    <div className="single my-spacing-3lg grid grid-cols-2 gap-spacing lg:grid-cols-3">
      {props.data.map((data, index) => {
        return (
          <motion.div
            key={index}
            style={{ y: "0rem" }}
            whileHover={{ y: "-1rem" }}
            transition={transitionFast}
          >
            <Link href={data.link}>
              <Image
                src={data.smallImage}
                alt={data.name}
                width={props.width}
                height={props.height}
              />
            </Link>
            <div className="mt-2">
              <span className="subtitle">{data.name}</span>
              <span className="paragraph hidden lg:inline">
                {" "}
                - {data.category}
              </span>
              <span className="paragraph relative -top-1 lg:hidden">
                <br />
                {data.category}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectsGallery;
