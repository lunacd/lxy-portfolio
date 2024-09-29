"use client";

import classNames from "classnames";
import { AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import CategoryTag from "@/components/CategoryTag";
import ConnectPrompt from "@/components/ConnectPrompt";
import Scroller from "@/components/Scroller";
import styles from "@/sections/TopDisplay.module.css";
import { useGlobalStateContext } from "@/utils/GlobalStateContext";
import { ProjectData, projectsData } from "@/utils/projectData";

interface HomeSectionProps {
  project: ProjectData;
  displayDescriptionOnMobile?: boolean;
}

function HomeSection(props: HomeSectionProps) {
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
          `relative flex h-full min-h-screen w-full flex-col ${props.project.bgColor}`,
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
              <div ref={textSection} className="lg:max-w-[50%] 2xl:max-w-[30%]">
                <div className="text-3xl">{props.project.name}</div>
                <div className={"mt-2 text-base"}>{props.project.brief}</div>

                <div className={`${styles.detailSection} mt-8`}>
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
                <div className="col-span-2 mt-2 flex flex-row flex-wrap gap-2">
                  {props.project.focus.map((focus, index) => {
                    return (
                      <CategoryTag
                        key={index}
                        category={focus}
                        titleColor={props.project.titleColor}
                      />
                    );
                  })}
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
            <a
              onClick={() => {
                dispatch({
                  type: "changeRoute",
                  newRoute: props.project.link,
                });
              }}
              className="absolute left-0 top-0 block h-full w-full cursor-pointer"
            ></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default function HomeClient() {
  const { dispatch } = useGlobalStateContext();

  // Start rolling on page load
  useEffect(() => {
    dispatch({ type: "setDisplayAnimation", displayAnimation: true });
  }, [dispatch]);

  return (
    <Scroller bgColor="bg-white">
      <AnimatePresence initial={false}>
        {Object.values(projectsData).map((project) => {
          return <HomeSection project={project} key={project.uri} />;
        })}
      </AnimatePresence>
      <ConnectPrompt />
    </Scroller>
  );
}
