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
          "absolute top-0 left-0": props.absolute,
          relative: !props.absolute,
          "mb-spacing-2lg": props.bottomSpacing,
        })}
        id={props.project.uri}
      >
        {/* Project image */}
        <div className="relative min-h-0 w-full shrink grow overflow-hidden">
          <PayloadImage
            media={props.project.projectImage}
            payload={props.payload}
            fill
            className="hidden object-cover object-center md:block"
            sizes="100vw"
          />
          <div
            className="absolute top-0 left-0 flex h-full w-full flex-row
              justify-center"
          >
            {/* Project name */}
            <div className={`w-single mt-spacing-lg relative ${titleColor}`}>
              <div className="relative">
                {/* Optional cover color for background */}
                {props.project.imageOverlayType !== "none" && (
                  <div
                    style={{
                      height: "calc(200% + 48px)",
                      background:
                        props.project.imageOverlayType === "light"
                          ? "linear-gradient(180deg, white 0%, transparent 100%)"
                          : "linear-gradient(180deg, black 0%, transparent 100%)",
                      left: "calc((-100vw + var(--single)) / 2)",
                      right: "calc((-100vw + var(--single)) / 2)",
                    }}
                    className="absolute -top-8 lg:-top-12 xl:-top-24"
                  ></div>
                )}
                <div className="relative">
                  <div className="title">{props.project.name}</div>
                  <div className="paragraph mt-2 lg:max-w-[25%]">
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
            <div className="absolute right-4 bottom-4">
              <ScrollIndicator light={true} />
            </div>
          </div>
        </div>

        {/* Project details */}
        <div
          className={classNames("flex flex-col items-center", {
            "text-white": props.project.bannerTextColor === "light",
            "text-black": props.project.bannerTextColor === "dark",
          })}
        >
          <div
            className="single mx-spacing-lg space-x-spacing flex flex-row py-8"
          >
            <div className="paragraph grid w-full grid-cols-2 gap-2">
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
                    return (
                      <CategoryTag
                        key={index}
                        category={focus.focus}
                        textColor={props.project.bannerTextColor}
                      />
                    );
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
