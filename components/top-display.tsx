import Image, { StaticImageData } from "next/image";
import React from "react";

import styles from "../styles/TopDisplay.module.css";
import ProjectDescription from "../utils/project-description";

interface TopDisplayProps {
  image: string | StaticImageData;
  description: ProjectDescription;
  titleColor: string;
}

const TopDisplay: React.FC<TopDisplayProps> = (props) => {
  return (
    <div className="mb-spacing-3lg flex h-screen min-h-[30rem] flex-col xl:min-h-[34rem] w-full">
      <div className="relative min-h-0 w-full flex-shrink flex-grow overflow-hidden">
        <Image
          src={props.image}
          alt={props.description.name}
          objectPosition="center center"
          objectFit="cover"
          layout="fill"
          placeholder="blur"
        />
        <div className="absolute left-0 top-0 flex h-full w-full justify-center">
          <div className={`single mt-12 xl:mt-24 text-3xl ${props.titleColor}`}>
            {props.description.name}
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
                {props.description.duration}
              </div>
              <div className={styles.section}>
                <span className={styles.heading}>Category: </span>
                {props.description.category}
              </div>
              <div className={styles.section}>
                <span className={styles.heading}>Project Focus: </span>
                {props.description.focus}
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
                {props.description.brief}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDisplay;
