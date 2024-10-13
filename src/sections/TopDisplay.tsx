import styles from "./TopDisplay.module.css";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "server-only";

import CategoryTag from "@/components/CategoryTag";
import { ProjectData } from "@/utils/projectData";

export interface TopDisplayProps {
  project: ProjectData;
  absolute?: boolean;
  link?: boolean;
  displayDescriptionOnMobile?: boolean;
  bottomSpacing?: boolean;
}

const defaultProps = {
  bottomSpacing: true,
};

export default function TopDisplay(propsIn: TopDisplayProps) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <>
      <div
        className={classNames(
          `flex h-full min-h-screen w-full flex-col ${props.project.bgColor}`,
          {
            "absolute left-0 top-0": props.absolute,
            relative: !props.absolute,
            "mb-spacing-2lg": props.bottomSpacing,
          },
        )}
        id={props.project.uri}
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
              className={`relative mx-spacing-lg mt-8 flex-grow self-stretch lg:mt-12 xl:mt-24
                ${props.project.titleColor}`}
            >
              <div className="relative">
                {/* Optional cover color for background */}
                {props.project.coverColor && (
                  <div
                    style={{
                      height: "calc(200% + 48px)",
                      background: `linear-gradient(180deg, ${props.project.coverColor} 0%, rgba(0, 0, 0, 0) 100%)`,
                    }}
                    className="absolute -left-spacing-lg -right-spacing-lg -top-8 lg:-top-12 xl:-top-24"
                  ></div>
                )}
                <div className="relative">
                  <div className="text-3xl">{props.project.name}</div>
                  <div
                    className={`${styles.textShadow} mt-2 text-base lg:max-w-[25%]`}
                  >
                    {props.project.brief}
                  </div>
                </div>
              </div>

              {/* Award image */}
              {props.project.awardImage && (
                <Image
                  src={props.project.awardImage}
                  alt="Award"
                  className="absolute bottom-8 w-40"
                />
              )}
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
                <Link
                  href={props.project.link}
                  className="absolute left-0 top-0 block h-full w-full cursor-pointer"
                ></Link>
              ))}
          </div>
        </div>

        {/* Project details */}
        <div className="flex flex-col items-center">
          <div className="single mx-spacing-lg flex flex-row space-x-spacing py-8">
            <div className="grid w-full grid-cols-2 gap-2">
              <div className={styles.detailSection}>
                <span>Duration: </span>
                {props.project.duration}
              </div>
              <div className={styles.detailSection}>
                <span>Category: </span>
                {props.project.category}
                {props.project.categoryTail && (
                  <span>, {props.project.categoryTail}</span>
                )}
              </div>
              <div className="col-span-2 flex flex-row flex-wrap space-x-2">
                {props.project.focus.map((focus, index) => {
                  return <CategoryTag key={index} category={focus} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.displayDescriptionOnMobile && (
        <div className={`${styles.detailSection} opacity-0 md:hidden`}>
          <span>Project Brief: </span>
          {props.project.brief}
        </div>
      )}
    </>
  );
}
