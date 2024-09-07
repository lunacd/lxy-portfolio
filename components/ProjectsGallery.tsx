"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import CategoryTag from "@/components/CategoryTag";
import { useGlobalStateContext } from "@/utils/GlobalStateContext";
import { ProjectDataLean } from "@/utils/projectData";
import { transitionFast } from "@/utils/transitions";

interface ProjectsGalleryProps {
  data: ProjectDataLean[];
  width: number;
  height: number;
}

const ProjectsGallery: React.FC<ProjectsGalleryProps> = (props) => {
  const { dispatch } = useGlobalStateContext();
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
            <a
              onClick={() => {
                dispatch({ type: "changeRoute", newRoute: data.link });
              }}
              className="cursor-pointer"
            >
              <Image
                src={data.smallImage}
                alt={data.name}
                width={props.width}
                height={props.height}
              />
            </a>
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
            {data.focus && (
              <div className="mt-2 flex flex-row flex-wrap space-x-1">
                {data.focus.map((focus, index) => {
                  return (
                    <div className="mb-2" key={index}>
                      <CategoryTag category={focus} />
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectsGallery;
