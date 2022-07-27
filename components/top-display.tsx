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
          <div className="half flex flex-col justify-around space-y-1">
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
          <div className="half flex flex-col justify-around space-y-1">
            <div className={styles.section}>
              <span className={styles.heading}>Project Brief: </span>
              {props.description.brief}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDisplay;
