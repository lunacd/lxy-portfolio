import Image, { StaticImageData } from "next/image";
import React from "react";

import styles from "../styles/TopDisplay.module.css";
import ProjectDescription from "../utils/project-description";

import LyuDisplay from "../images/lyu/display-full.webp";
import OverlapDisplay from "../images/overlap/display-full.webp";

interface TopDisplayProps {
  project: "overlap" | "lyu";
}

const projectDisplay = {
  overlap: OverlapDisplay,
  lyu: LyuDisplay,
};

const projectDescriptions = {
  overlap: new ProjectDescription(
    "Overlap",
    "14 Weeks",
    "Lifestyle Product Design",
    "Prototype, Tech Drawing, Model Making, Manufacture",
    "Designing and making a line of accessories for Hay. The design will include a range of small and functional objects, which fits the brand identity and considers the company’s manufacturing techniques, as well their use of materials.",
  ),
  lyu: new ProjectDescription(
    "Lyu",
    "2 Weeks Daily",
    "Soft Goods",
    "Craft, Tech Drawing, Manufacture",
    "2-week daily course provided practical knowledge of leather footwear and leather bag making in a factory setting.",
  ),
};

const titleColors = {
  overlap: "text-gray-900",
  lyu: "text-gray-100",
};

const bgColors = {
  overlap: "bg-[#FDF9F1]",
  lyu: "bg-[#EFF2F3]",
};

const TopDisplay: React.FC<TopDisplayProps> = (props) => {
  const description = projectDescriptions[props.project];
  return (
    <div
      className={`mb-spacing-3lg flex h-screen min-h-[30rem] flex-col xl:min-h-[34rem] w-full ${
        bgColors[props.project]
      }`}
    >
      <div className="relative min-h-0 w-full flex-shrink flex-grow overflow-hidden">
        <Image
          src={projectDisplay[props.project]}
          alt={description.name}
          objectPosition="center center"
          objectFit="cover"
          layout="fill"
          placeholder="blur"
        />
        <div className="absolute left-0 top-0 flex h-full w-full justify-center">
          <div
            className={`single mt-12 xl:mt-24 text-3xl ${
              titleColors[props.project]
            }`}
          >
            {description.name}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="single mx-spacing-lg flex flex-row space-x-spacing py-8">
          <div className="half flex flex-col space-y-1 relative">
            <div className={`${styles.section} opacity-0`}>
              <span className={styles.heading}>Duration: </span>
              14 Weeks
            </div>
            <div className={`${styles.section} opacity-0`}>
              <span className={styles.heading}>Category: </span>
              Lifestyle Product Design
            </div>
            <div className={`${styles.section} opacity-0`}>
              <span className={styles.heading}>Project Focus: </span>
              Prototype, Tech Drawing, Model Making, Manufacture
            </div>
            <div className="absolute left-0 top-0 w-full h-full !mt-0 flex flex-col justify-start space-y-1">
              <div className={styles.section}>
                <span className={styles.heading}>Duration: </span>
                {description.duration}
              </div>
              <div className={styles.section}>
                <span className={styles.heading}>Category: </span>
                {description.category}
              </div>
              <div className={styles.section}>
                <span className={styles.heading}>Project Focus: </span>
                {description.focus}
              </div>
            </div>
          </div>
          <div className="half flex flex-col justify-center relative">
            <div className={`${styles.section} opacity-0`}>
              <span className={styles.heading}>Project Brief: </span>
              Designing and making a line of accessories for Hay. The design
              will include a range of small and functional objects, which fits
              the brand identity and considers the company&apos;s manufacturing
              techniques, as well their use of materials.
            </div>
            <div className="half flex flex-col absolute left-0 top-0 w-full h-full justify-start">
              <div className={styles.section}>
                <span className={styles.heading}>Project Brief: </span>
                {description.brief}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDisplay;
