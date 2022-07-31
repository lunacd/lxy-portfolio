import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "../styles/TopDisplay.module.css";
import ProjectDescription from "../utils/project-description";

import LyuDisplay from "../images/lyu/display-full.webp";
import ModeDisplay from "../images/mode/display-full.webp";
import OverlapDisplay from "../images/overlap/display-full.webp";
import SoulDisplay from "../images/soul/display-full.webp";
import SunriseDisplay from "../images/sunrise/display-full.webp";
import TronDisplay from "../images/tron/display-full.webp";

interface TopDisplayProps {
  project: "overlap" | "lyu" | "soul" | "sunrise" | "mode" | "tron";
  link?: boolean;
}

const projectDisplay = {
  overlap: OverlapDisplay,
  lyu: LyuDisplay,
  soul: SoulDisplay,
  sunrise: SunriseDisplay,
  mode: ModeDisplay,
  tron: TronDisplay,
};

const projectDescriptions = {
  overlap: new ProjectDescription(
    "Overlap",
    "14 Weeks",
    "Lifestyle Product Design",
    "Prototyping, Tech Drawing, Model Making, Manufacture",
    "A range of small and functional objects for Hay, focusing on brand identity, manufacturing techniques, and use of materials.",
  ),
  lyu: new ProjectDescription(
    "Lyu",
    "2 Weeks Daily",
    "Soft Goods",
    "Craft, Tech Drawing, Manufacture",
    "2-week daily course provided practical knowledge of leather footwear and leather bag making in a factory setting.",
  ),
  soul: new ProjectDescription(
    "Soul",
    "14 Weeks, 2022 Spring",
    "Lux lifestyle Product Set",
    "Brand Research, Form Study, 3D Modeling",
    "To propose a new product category for Rolls-Royce by designing a unified collection of objects.",
  ),
  sunrise: new ProjectDescription(
    "Sunrise Speaker",
    "14 Weeks , 2021 Fall",
    "Electronic Product",
    "Form Study, Prototyping, Model Making, Manufacture",
    "Reverse-engineered a speaker and put all parts back together in personal designed product for Yamaha.",
  ),
  mode: new ProjectDescription(
    "Mode Bag",
    "14 Weeks , 2021 Fall",
    "Soft Goods",
    "Design Research, Prototyping, Concept development, 3D Modeling",
    "To create new concepts that relate to EDC (Everyday Carry) products for Benchmade by designing a new EDC product and related services.",
  ),
  tron: new ProjectDescription(
    "M-Tron",
    "5 Weeks , 2021 Spring",
    "Transportation",
    "3D Modeling, Rendering",
    "A shared semi-automatic scooter inside Walt Disney World for both kids and adult to transport between different rides.",
  ),
};

const projectLinks = {
  overlap: "/overlap?autoscroll=true",
  lyu: "/lyu?autoscroll=true",
  soul: "/soul?autoscroll=true",
  sunrise: "https://www.shirleylyu.com/sunrisespeaker",
  mode: "https://www.shirleylyu.com/mode",
  tron: "https://www.shirleylyu.com/m-tron",
};

const titleColors = {
  overlap: "text-gray-900",
  lyu: "text-gray-100",
  soul: "text-gray-100",
  sunrise: "text-gray-100",
  mode: "text-gray-100",
  tron: "text-gray-100",
};

const bgColors = {
  overlap: "bg-[#FDF9F1]",
  lyu: "bg-[#EFF2F3]",
  soul: "bg-[#EEEAE2]",
  sunrise: "bg-[#F2F2F2]",
  mode: "bg-[#ECF4F0]",
  tron: "bg-[#E4F2F5]",
};

const TopDisplay: React.FC<TopDisplayProps> = (props) => {
  const description = projectDescriptions[props.project];
  return (
    <div
      className={`mb-spacing-2lg flex h-screen min-h-[30rem] flex-col xl:min-h-[34rem] w-full ${
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
          {props.link &&
            (projectLinks[props.project].startsWith("https") ? (
              <a
                className="absolute w-full h-full top-0 left-0 block"
                href={projectLinks[props.project]}
                target="_blank"
                rel="noreferrer"
              ></a>
            ) : (
              <Link href={projectLinks[props.project]} passHref>
                <a className="absolute w-full h-full top-0 left-0 block"></a>
              </Link>
            ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="single mx-spacing-lg flex flex-row space-x-spacing py-8">
          <div className="half flex flex-col space-y-1 relative">
            <div className={`${styles.section} opacity-0`}>
              <span className={styles.heading}>Duration: </span>
              {Object.values(projectDescriptions).reduce(
                (prev, curr) =>
                  prev.length > curr.duration.length ? prev : curr.duration,
                "",
              )}
            </div>
            <div className={`${styles.section} opacity-0`}>
              <span className={styles.heading}>Category: </span>
              {Object.values(projectDescriptions).reduce(
                (prev, curr) =>
                  prev.length > curr.category.length ? prev : curr.category,
                "",
              )}
            </div>
            <div className={`${styles.section} opacity-0`}>
              <span className={styles.heading}>Project Focus: </span>
              {Object.values(projectDescriptions).reduce(
                (prev, curr) =>
                  prev.length > curr.focus.length ? prev : curr.focus,
                "",
              )}
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
              {Object.values(projectDescriptions).reduce(
                (prev, curr) =>
                  prev.length > curr.brief.length ? prev : curr.brief,
                "",
              )}
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
