import styles from "./TopDisplay.module.css";
import classNames from "classnames";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import CategoryTag from "@/components/CategoryTag";
import { useGlobalStateContext } from "@/utils/GlobalStateContext";
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
  const { dispatch } = useGlobalStateContext();
  const textSection = useRef<HTMLDivElement>(null);
  const centerRef = useRef(null);
  const inView = useInView(centerRef);
  useEffect(() => {
    dispatch({
      type: "setInView",
      project: props.project.uri,
      isInView: inView,
    });
  }, [dispatch, inView, props.project.uri]);
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
        {/* A div in the center used to detect whether TopDisplay is in view or not. */}
        <div
          className="absolute left-1/2 top-1/2 h-1 w-1"
          ref={centerRef}
        ></div>
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
            {/* Optional cover color for background */}
            {props.project.coverColor && (
              <div
                style={{
                  height: textSection.current
                    ? textSection.current.clientHeight * 2 + 48
                    : 0,
                  background: `linear-gradient(180deg, ${props.project.coverColor} 0%, rgba(0, 0, 0, 0) 100%)`,
                }}
                className="absolute left-0 right-0 top-0"
              ></div>
            )}
            {/* Project name */}
            <div
              className={`single relative mt-8 lg:mt-12 xl:mt-24 ${props.project.titleColor}`}
            >
              <div ref={textSection}>
                <div className="text-3xl">{props.project.name}</div>
                <div
                  className={`${styles.textShadow} mt-2 text-base lg:max-w-[25%]`}
                >
                  {props.project.brief}
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
                <a
                  onClick={() => {
                    dispatch({
                      type: "changeRoute",
                      newRoute: props.project.link,
                    });
                  }}
                  className="absolute left-0 top-0 block h-full w-full cursor-pointer"
                ></a>
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
