import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { forwardRef } from "react";

import styles from "../styles/TopDisplay.module.css";
import { ProjectData, projectData } from "../utils/project-data";

export interface TopDisplayProps {
  project: ProjectData;
  animation: boolean;
  absolute?: boolean;
  link?: boolean;
}

const TopDisplay = forwardRef<HTMLDivElement, TopDisplayProps>((props, ref) => {
  return (
    <div
      className={classNames(
        "mb-spacing-2lg flex h-screen min-h-[30rem] flex-col xl:min-h-[34rem] w-full",
        {
          [props.project.bgColor]: true,
          "absolute top-0 left-0": props.absolute,
        },
      )}
      ref={ref}
    >
      {/* Project image */}
      <div className="relative min-h-0 w-full flex-shrink flex-grow overflow-hidden">
        <Image
          src={props.project.displayImage}
          alt={props.project.name}
          fill
          className="object-center object-cover"
        />
        <div className="absolute left-0 top-0 flex h-full w-full justify-center">
          {/* Project name */}
          <div
            className={`single ${styles.projectName} ${props.project.titleColor}`}
          >
            {props.project.name}
          </div>

          {/* Link to page */}
          {props.link &&
            (props.project.link.startsWith("https") ? (
              <a
                className="absolute w-full h-full top-0 left-0 block"
                href={props.project.link}
                target="_blank"
                rel="noreferrer"
              ></a>
            ) : (
              <Link
                href={props.project.link}
                className="absolute w-full h-full top-0 left-0 block"
              ></Link>
            ))}
        </div>
      </div>

      {/* Project details */}
      <div className="flex-col items-center hidden lg:flex">
        <div className="single mx-spacing-lg flex flex-row space-x-spacing py-8">
          <div className="half flex flex-col space-y-1 relative">
            <div className={`${styles.detailSection} opacity-0`}>
              <span className={styles.heading}>Duration: </span>
              {projectData.reduce(
                (prev, curr) =>
                  prev.length > curr.duration.length ? prev : curr.duration,
                "",
              )}
            </div>
            <div className={`${styles.detailSection} opacity-0`}>
              <span className={styles.heading}>Category: </span>
              {projectData.reduce(
                (prev, curr) =>
                  prev.length > curr.category.length ? prev : curr.category,
                "",
              )}
            </div>
            <div className={`${styles.detailSection} opacity-0`}>
              <span className={styles.heading}>Project Focus: </span>
              {projectData.reduce(
                (prev, curr) =>
                  prev.length > curr.focus.length ? prev : curr.focus,
                "",
              )}
            </div>
            <div className="absolute left-0 top-0 w-full h-full !mt-0 flex flex-col justify-start space-y-1">
              <div className={styles.detailSection}>
                <span className={styles.heading}>Duration: </span>
                {props.project.duration}
              </div>
              <div className={styles.detailSection}>
                <span className={styles.heading}>Category: </span>
                {props.project.category}
              </div>
              <div className={styles.detailSection}>
                <span className={styles.heading}>Project Focus: </span>
                {props.project.focus}
              </div>
            </div>
          </div>
          <div className="half flex flex-col justify-center relative">
            <div className={`${styles.detailSection} opacity-0`}>
              <span className={styles.heading}>Project Brief: </span>
              {projectData.reduce(
                (prev, curr) =>
                  prev.length > curr.brief.length ? prev : curr.brief,
                "",
              )}
            </div>
            <div className="half flex flex-col absolute left-0 top-0 w-full h-full justify-start">
              <div className={styles.detailSection}>
                <span className={styles.heading}>Project Brief: </span>
                {props.project.brief}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

TopDisplay.displayName = "Top Display";

export default TopDisplay;
