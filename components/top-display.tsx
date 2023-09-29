import classNames from "classnames";
import Image from "next/image";
import React, { forwardRef } from "react";

import styles from "../styles/TopDisplay.module.css";
import { ProjectData, projectData } from "../utils/project-data";

export interface TopDisplayProps {
  project: ProjectData;
  animation: boolean;
  onLink?: (link: string) => void;
  absolute?: boolean;
  link?: boolean;
  displayDescriptionOnMobile?: boolean;
}

const TopDisplay = forwardRef<HTMLDivElement, TopDisplayProps>((props, ref) => {
  return (
    <>
      <div
        className={classNames(
          `mb-spacing-2lg flex h-full min-h-screen w-full flex-col ${props.project.bgColor}`,
          {
            "absolute left-0 top-0": props.absolute,
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
            className="hidden object-cover object-center md:block"
          />
          <Image
            src={props.project.displayImageMobile}
            alt={props.project.name}
            fill
            className="object-cover object-center md:hidden"
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
                  className="absolute left-0 top-0 block h-full w-full"
                  href={props.project.link}
                  target="_blank"
                  rel="noreferrer"
                ></a>
              ) : (
                <a
                  onClick={() => {
                    props.onLink!(props.project.link);
                  }}
                  className="absolute left-0 top-0 block h-full w-full cursor-pointer"
                ></a>
              ))}
          </div>
        </div>

        {/* Project details */}
        <div className="flex flex-col items-center">
          <div className="single mx-spacing-lg flex flex-row space-x-spacing py-8">
            {/* Left column */}
            <div className={`${styles.detailColumn} flex`}>
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
              <div className="absolute left-0 top-0 !mt-0 flex h-full w-full flex-col justify-start space-y-1">
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
                {props.displayDescriptionOnMobile && (
                  <div className={`${styles.detailSection} md:hidden`}>
                    <span className={styles.heading}>Project Brief: </span>
                    {props.project.brief}
                  </div>
                )}
              </div>
            </div>

            {/* Right column */}
            <div className={`${styles.detailColumn} hidden md:flex`}>
              <div className={`${styles.detailSection} opacity-0`}>
                <span className={styles.heading}>Project Brief: </span>
                {projectData.reduce(
                  (prev, curr) =>
                    prev.length > curr.brief.length ? prev : curr.brief,
                  "",
                )}
              </div>
              <div className="half absolute left-0 top-0 h-full w-full flex-col justify-start">
                <div className={styles.detailSection}>
                  <span className={styles.heading}>Project Brief: </span>
                  {props.project.brief}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.displayDescriptionOnMobile && (
        <div className={`${styles.detailSection} opacity-0 md:hidden`}>
          <span className={styles.heading}>Project Brief: </span>
          {props.project.brief}
        </div>
      )}
    </>
  );
});

TopDisplay.displayName = "Top Display";

export default TopDisplay;
