import { Project } from "@payload-types";
import Link from "next/link";
import { Payload } from "payload";
import React from "react";
import "server-only";

import CategoryTag from "@/components/CategoryTag";
import FloatUpMotion from "@/components/FloatUpMotion";
import PayloadImage from "@/components/PayloadImage";
import styles from "@/components/TopDisplay.module.css";
import { getProjectLink } from "@/utils/payloadHelpers";

interface HomeSectionProps {
  project: Project;
  payload: Payload;
}

export default async function HomeSection(props: HomeSectionProps) {
  const titleColor =
    props.project.textColor === "light" ? "text-gray-100" : "text-gray-950";
  return (
    <>
      {/* Project image */}
      <div className="relative min-h-0 w-full shrink grow overflow-hidden">
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
        <div className="absolute top-0 left-0 h-full w-full">
          <FloatUpMotion className="flex h-full flex-col">
            {/* Project name */}
            <div
              className={`mx-spacing-lg mt-spacing-lg relative grow self-stretch ${titleColor}`}
            >
              <div className="relative">
                {/* Optional cover color for background */}
                {props.project.imageCover && (
                  <div
                    style={{
                      height: "calc(200% + 48px)",
                      background: `linear-gradient(180deg, white 0%, transparent 100%)`,
                    }}
                    className="-left-spacing-lg -right-spacing-lg absolute -top-8 lg:-top-12 xl:-top-24"
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
                    {props.project.projectSize && (
                      <>, {props.project.projectSize}</>
                    )}
                  </div>
                  <div className="col-span-2 mt-2 flex flex-row flex-wrap gap-2">
                    {props.project.focuses &&
                      props.project.focuses.map((focus, index) => {
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
                  sizes="20vw"
                />
              )}
            </div>
          </FloatUpMotion>

          {/* Link to page */}
          <Link
            href={getProjectLink(props.project.uri, props.project.externalLink)}
            className="absolute top-0 left-0 block h-full w-full cursor-pointer"
          ></Link>
        </div>
      </div>
    </>
  );
}
