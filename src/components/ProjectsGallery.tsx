"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Link from "next/link"

import CategoryTag from "@/components/CategoryTag";
import { ProjectDataLean } from "@/utils/projectData";
import { transitionFast } from "@/utils/transitions";

interface ProjectsGalleryProps {
  data: ProjectDataLean[];
  width: number;
  height: number;
}

const ProjectsGallery: React.FC<ProjectsGalleryProps> = (props) => {
  return (
    <div className="single mt-spacing-lg mb-spacing-3lg grid grid-cols-2 gap-spacing lg:grid-cols-3">
      {props.data.map((data, index) => {
        return (
          <motion.div
            key={index}
            style={{ y: "0rem" }}
            whileHover={{ y: "-1rem" }}
            transition={transitionFast}
          >
            <Link
              href={data.link}
              className="cursor-pointer"
            >
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
