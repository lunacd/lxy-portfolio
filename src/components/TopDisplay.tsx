import styles from "./TopDisplay.module.css";
import { Project } from "@payload-types";
import classNames from "classnames";
import { Payload } from "payload";
import React from "react";
import "server-only";

import CategoryTag from "@/components/CategoryTag";
import PayloadImage from "@/components/PayloadImage";
import ScrollIndicator from "@/components/ScrollIndicator";

export interface TopDisplayProps {
  project: Project;
  absolute?: boolean;
  link?: boolean;
  bottomSpacing?: boolean;
  payload: Payload;
}

const defaultProps = {
  bottomSpacing: true,
};

export default function TopDisplay(propsIn: TopDisplayProps) {
  const props = { ...defaultProps, ...propsIn };
  const titleColor =
    props.project.textColor === "light" ? "text-gray-100" : "text-gray-950";
  return (
    <>
      <div
        style={{
          backgroundColor: props.project.backgroundColor
            ? props.project.backgroundColor
            : undefined,
        }}
        className={classNames("flex h-full min-h-screen w-full flex-col", {
          "absolute left-0 top-0": props.absolute,
          relative: !props.absolute,
          "mb-spacing-2lg": props.bottomSpacing,
        })}
        id={props.project.uri}
      >
        {/* Project image */}
        <div className="relative min-h-0 w-full flex-shrink flex-grow overflow-hidden">
          <PayloadImage
            media={props.project.projectImage}
            payload={props.payload}
            fill
            className="hidden object-cover object-center md:block"
            sizes="100vw"
          />
          <PayloadImage
            media={props.project.mobileProjectImage}
            payload={props.payload}
            fill
            className="object-cover object-center md:hidden"
            sizes="100vw"
          />
          <div className="absolute left-0 top-0 flex h-full w-full justify-center">
            {/* Project name */}
            <div
              className={`relative mx-spacing-lg mt-spacing-lg flex-grow self-stretch ${titleColor}`}
            >
              <div className="relative">
                {/* Optional cover color for background */}
                {props.project.imageCover && (
                  <div
                    style={{
                      height: "calc(200% + 48px)",
                      background: `linear-gradient(180deg, white 0%, transparent 100%)`,
                    }}
                    className="absolute -left-spacing-lg -right-spacing-lg -top-8 lg:-top-12 xl:-top-24"
                  ></div>
                )}
                <div className="relative">
                  <div className="text-3xl">{props.project.name}</div>
                  <div className="mt-2 text-base lg:max-w-[25%]">
                    {props.project.brief}
                  </div>
                </div>
              </div>

              {/* Award image */}
              {props.project.awardImage && (
                <PayloadImage
                  media={props.project.awardImage}
                  payload={props.payload}
                  className="absolute bottom-8 w-40"
                  sizes="20vw"
                />
              )}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 right-4">
              <ScrollIndicator light={true} />
            </div>
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
                {props.project.projectSize && (
                  <>, {props.project.projectSize}</>
                )}
              </div>
              {props.project.focuses && (
                <div className="col-span-2 flex flex-row flex-wrap space-x-2">
                  {props.project.focuses.map((focus, index) => {
                    return <CategoryTag key={index} category={focus.focus} />;
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}