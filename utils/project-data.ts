import { StaticImageData } from "next/image";

import LyuDisplay from "../images/lyu/display-full.webp";
import TronDisplay from "../images/m-tron/display-full.webp";
import OverlapDisplay from "../images/overlap/display-full.webp";
import LyuSmall from "../images/projects/lyu-half.webp";
import TronSmall from "../images/projects/m-tron-half.webp";
import OverlapSmall from "../images/projects/overlap-half.webp";
import RefugiaSmall from "../images/projects/refugia-half.webp";
import SoulSmall from "../images/projects/soul-half.webp";
import SunriseSmall from "../images/projects/sunrise-half.webp";
import RefugiaDisplay from "../images/refugia/display-full.webp";
import SoulDisplay from "../images/soul/display-full.webp";
import SunriseDisplay from "../images/sunrise/display-full.webp";

class ProjectData {
  uri: string;
  name: string;
  duration: string;
  category: string;
  focus: string;
  brief: string;
  displayImage: string | StaticImageData;
  smallImage: string | StaticImageData;
  titleColor: string;
  bgColor: string;
  link: string;

  constructor(
    uri: string,
    name: string,
    duration: string,
    category: string,
    focus: string,
    brief: string,
    displayImage: string | StaticImageData,
    smallImage: string | StaticImageData,
    titleColor: string,
    bgColor: string,
    link: string,
  ) {
    this.uri = uri;
    this.name = name;
    this.duration = duration;
    this.category = category;
    this.focus = focus;
    this.brief = brief;
    this.displayImage = displayImage;
    this.smallImage = smallImage;
    this.titleColor = titleColor;
    this.bgColor = bgColor;
    this.link = link;
  }
}

export const projects: string[] = [
  "overlap",
  "refugia",
  "lyu",
  "soul",
  "sunrise",
  "m-tron",
];

export const projectData = [
  new ProjectData(
    "overlap",
    "Overlap",
    "14 Weeks, 2022 Spring",
    "Lifestyle Product Design",
    "Prototyping, Tech Drawing, Model Making, Manufacture",
    "A range of small and functional objects for Hay, focusing on brand identity, manufacturing techniques, and use of materials.",
    OverlapDisplay,
    OverlapSmall,
    "text-gray-900",
    "bg-[#FDF9F1]",
    "/overlap",
  ),
  new ProjectData(
    "refugia",
    "Refugia",
    "14 Weeks, 2022 Summer",
    "Spatial Experience Design",
    "Sustainability, Model making",
    "See through their eyes; hear through their ears; sense through their senses. Learn and feel animals' adaptation to the urban environment.",
    RefugiaDisplay,
    RefugiaSmall,
    "text-gray-100",
    "bg-[#E0E4E0]",
    "/refugia",
  ),
  new ProjectData(
    "lyu",
    "Lyu",
    "2 Weeks Daily, 2022 Spring",
    "Soft Goods",
    "Craft, Tech Drawing, Manufacture",
    "2-week daily course provided practical knowledge of leather footwear and leather bag making in a factory setting.",
    LyuDisplay,
    LyuSmall,
    "text-gray-100",
    "bg-[#EFF2F3]",
    "/lyu",
  ),
  new ProjectData(
    "soul",
    "Soul",
    "14 Weeks, 2022 Spring",
    "Lux lifestyle Product Set",
    "Brand Research, Form Study, 3D Modeling",
    "To propose a new product category for Rolls-Royce by designing a unified collection of objects.",
    SoulDisplay,
    SoulSmall,
    "text-gray-100",
    "bg-[#EEEAE2]",
    "/soul",
  ),
  new ProjectData(
    "sunrise",
    "Sunrise Speaker",
    "14 Weeks , 2021 Fall",
    "Electronic Product",
    "Form Study, Prototyping, Model Making, Manufacture",
    "Reverse-engineered a speaker and put all parts back together in personal designed product for Yamaha.",
    SunriseDisplay,
    SunriseSmall,
    "text-gray-100",
    "bg-[#F2F2F2]",
    "https://www.shirleylyu.com/sunrisespeaker",
  ),
  new ProjectData(
    "tron",
    "M-Tron",
    "5 Weeks , 2021 Spring",
    "Transportation",
    "3D Modeling, Rendering",
    "A shared semi-automatic scooter inside Walt Disney World for both kids and adult to transport between different rides.",
    TronDisplay,
    TronSmall,
    "text-gray-100",
    "bg-[#E4F2F5]",
    "https://www.shirleylyu.com/m-tron",
  ),
];

export default ProjectData;
