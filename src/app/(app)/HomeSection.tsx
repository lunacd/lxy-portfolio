import Image from "next/image";
import Link from "next/link";
import React from "react";
import "server-only";

import CategoryTag from "@/components/CategoryTag";
import styles from "@/sections/TopDisplay.module.css";
import { ProjectData } from "@/utils/projectData";

interface HomeSectionProps {
  project: ProjectData;
  displayDescriptionOnMobile?: boolean;
}

export default function HomeSection(props: HomeSectionProps) {
  return (
    <>
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
        <div className="absolute left-0 top-0 flex h-full w-full flex-col">
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
                  className="absolute -left-spacing-lg -right-spacing-lg -top-8 xl:-top-24"
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
          <Link
            href={props.project.link}
            className="absolute left-0 top-0 block h-full w-full cursor-pointer"
          ></Link>
        </div>
      </div>
    </>
  );
}
