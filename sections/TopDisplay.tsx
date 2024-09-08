import "./TopDisplay.css";
import classNames from "classnames";
import Image from "next/image";
import React, { forwardRef } from "react";

import CategoryTag from "@/components/CategoryTag";
import { useGlobalStateContext } from "@/utils/GlobalStateContext";
import { ProjectData } from "@/utils/projectData";

export interface TopDisplayProps {
  project: ProjectData;
  animation: boolean;
  absolute?: boolean;
  link?: boolean;
  displayDescriptionOnMobile?: boolean;
}

const TopDisplay = forwardRef<HTMLDivElement, TopDisplayProps>((props, ref) => {
  const { dispatch } = useGlobalStateContext();
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
              className={`single relative mt-8 lg:mt-12 xl:mt-24 ${props.project.titleColor}`}
            >
              <div className="text-3xl">{props.project.name}</div>
              <div className="topDisplay_textShadow mt-2 text-base lg:max-w-[25%]">
                {props.project.brief}
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
              <div className="topDisplay_detailSection">
                <span>Duration: </span>
                {props.project.duration}
              </div>
              <div className="topDisplay_detailSection">
                <span>Category: </span>
                {props.project.category}
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
        <div className="topDisplay_detailSection opacity-0 md:hidden">
          <span>Project Brief: </span>
          {props.project.brief}
        </div>
      )}
    </>
  );
});

TopDisplay.displayName = "Top Display";

export default TopDisplay;
