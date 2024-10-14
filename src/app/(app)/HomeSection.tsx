import { Project } from "@payload-types";
import Link from "next/link";
import { Payload } from "payload";
import React from "react";
import "server-only";

import CategoryTag from "@/components/CategoryTag";
import PayloadImage from "@/components/PayloadImage";
import styles from "@/sections/TopDisplay.module.css";

interface HomeSectionProps {
  project: Project;
  payload: Payload;
}

export default async function HomeSection(props: HomeSectionProps) {
  const titleColor = props.project.lightTitle
    ? "text-gray-100"
    : "text-gray-950";
  return (
    <>
      {/* Project image */}
      <div className="relative min-h-0 w-full flex-shrink flex-grow overflow-hidden">
        <PayloadImage
          media={props.project.projectImage}
          payload={props.payload}
          fill
          className="hidden object-cover object-center md:block"
        />
        <PayloadImage
          media={props.project.mobileProjectImage}
          payload={props.payload}
          fill
          className="object-cover object-center md:hidden"
        />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col">
          {/* Project name */}
          <div
            className={`relative mx-spacing-lg mt-8 flex-grow self-stretch lg:mt-12 xl:mt-24
              ${titleColor}`}
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
              <div className="relative lg:max-w-[50%] 2xl:max-w-[30%]">
                <div className="text-3xl">{props.project.name}</div>
                <div className={"mt-2 text-base"}>{props.project.brief}</div>

                <div className={`${styles.detailSection} mt-8`}>
                  <span>Duration: </span>
                  {props.project.duration}
                </div>
                <div className={styles.detailSection}>
                  <span>Category: </span>
                  {props.project.category}
                </div>
                <div className="col-span-2 mt-2 flex flex-row flex-wrap gap-2">
                  {props.project.focuses.map((focus, index) => {
                    return (
                      <CategoryTag
                        key={index}
                        category={focus.focus}
                        titleColor={titleColor}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Award image */}
            {props.project.awardImage && (
              <PayloadImage
                media={props.project.awardImage}
                payload={props.payload}
                className="absolute bottom-8 w-40"
              />
            )}
          </div>
          {/* Link to page */}
          <Link
            href={`/${props.project.uri}`}
            className="absolute left-0 top-0 block h-full w-full cursor-pointer"
          ></Link>
        </div>
      </div>
    </>
  );
}
