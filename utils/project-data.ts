import { StaticImageData } from "next/image";

import LyuDisplay from "../images/lyu/display-full.webp";
import TronDisplay from "../images/m-tron/display-full.webp";
import OverlapDisplay from "../images/overlap/display-full.webp";
import ErgoSmall from "../images/projects/ergo-half.webp";
import ItoSmall from "../images/projects/ito-half.webp";
import LissSmall from "../images/projects/liss-half.webp";
import LyuSmall from "../images/projects/lyu-half.webp";
import TronSmall from "../images/projects/m-tron-half.webp";
import ModeSmall from "../images/projects/mode-half.webp";
import MumSmall from "../images/projects/mum-half.webp";
import OverlapSmall from "../images/projects/overlap-half.webp";
import PlantSmall from "../images/projects/plant-half.webp";
import RefugiaSmall from "../images/projects/refugia-half.webp";
import SaturnSmall from "../images/projects/saturn-half.webp";
import SoulSmall from "../images/projects/soul-half.webp";
import SunriseSmall from "../images/projects/sunrise-half.webp";
import TuraSmall from "../images/projects/tura-half.webp";
import RefugiaDisplay from "../images/refugia/display-full.webp";
import SoulDisplay from "../images/soul/display-full.webp";
import SunriseDisplay from "../images/sunrise/display-full.webp";

export class ProjectDataLean {
  uri: string;
  name: string;
  category: string;
  smallImage: string | StaticImageData;
  link: string;

  constructor(
    uri: string,
    name: string,
    category: string,
    smallImage: string | StaticImageData,
    link: string,
  ) {
    this.uri = uri;
    this.name = name;
    this.category = category;
    this.smallImage = smallImage;
    this.link = link;
  }
}

export class ProjectData extends ProjectDataLean {
  duration: string;
  focus: string;
  brief: string;
  displayImage: string | StaticImageData;
  titleColor: string;
  bgColor: string;

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
    super(uri, name, category, smallImage, link);
    this.duration = duration;
    this.focus = focus;
    this.brief = brief;
    this.displayImage = displayImage;
    this.titleColor = titleColor;
    this.bgColor = bgColor;
  }
}

export const projects: string[] = [
  "soul",
  "overlap",
  "sunrise",
  "m-tron",
  "lyu",
  "refugia",
];

export const projectData = [
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
    "overlap",
    "Overlap",
    "14 Weeks, 2022 Spring",
    "Lifestyle Product Design",
    "Prototyping, Tech Drawing, Model Making, Manufacturing",
    "A range of small and functional objects for Hay, focusing on brand identity, manufacturing techniques, and use of materials.",
    OverlapDisplay,
    OverlapSmall,
    "text-gray-900",
    "bg-[#FDF9F1]",
    "/overlap",
  ),
  new ProjectData(
    "sunrise",
    "Sunrise Speaker",
    "14 Weeks , 2021 Fall",
    "Consumer Electronics",
    "Form Study, Prototyping, Model Making, Manufacturing",
    "Reverse-engineered a speaker and put all parts back together in personal designed product for Yamaha.",
    SunriseDisplay,
    SunriseSmall,
    "text-gray-900",
    "bg-[#D8D6D4]",
    "/sunrise",
  ),
  new ProjectData(
    "m-tron",
    "M-Tron",
    "5 Weeks , 2021 Spring",
    "Transportation",
    "3D Modeling, Rendering",
    "A shared semi-automatic scooter inside Walt Disney World for both kids and adult to transport between different rides.",
    TronDisplay,
    TronSmall,
    "text-gray-100",
    "bg-[#E4F2F5]",
    "/m-tron",
  ),
  new ProjectData(
    "lyu",
    "Lyu",
    "2 Weeks Daily, 2022 Spring",
    "Soft Goods",
    "Craft, Tech Drawing, Manufacturing",
    "2-week daily course provided practical knowledge of leather footwear and leather bag making in a factory setting.",
    LyuDisplay,
    LyuSmall,
    "text-gray-100",
    "bg-[#EFF2F3]",
    "/lyu",
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
];

export const otherProjectsData = [
  new ProjectDataLean(
    "mode",
    "Mode Bag",
    "Soft Goods",
    ModeSmall,
    "https://shirleylyu.wixsite.com/shirley-portfolio/mode",
  ),
  new ProjectDataLean(
    "liss",
    "Liss",
    "Hard Goods",
    LissSmall,
    "https://shirleylyu.wixsite.com/shirley-portfolio/liss",
  ),
  new ProjectDataLean(
    "saturn",
    "Saturn",
    "Pet Furniture",
    SaturnSmall,
    "https://shirleylyu.wixsite.com/shirley-portfolio/saturn",
  ),
  new ProjectDataLean(
    "ergo",
    "Ergo Care",
    "Consumer Electronics",
    ErgoSmall,
    "https://shirleylyu.wixsite.com/shirley-portfolio/ergo-care",
  ),
  new ProjectDataLean(
    "ito",
    "Ito Suitcase",
    "Hard Goods",
    ItoSmall,
    "https://shirleylyu.wixsite.com/shirley-portfolio/ito",
  ),
  new ProjectDataLean(
    "tura",
    "Tura",
    "UI/UX Design",
    TuraSmall,
    "https://shirleylyu.wixsite.com/shirley-portfolio/tura",
  ),
  new ProjectDataLean(
    "plant",
    "Plant Phone",
    "Consumer Electronics",
    PlantSmall,
    "https://shirleylyu.wixsite.com/shirley-portfolio/plantphone",
  ),
  new ProjectDataLean(
    "mum",
    "Mum",
    "Soft Goods",
    MumSmall,
    "https://shirleylyu.wixsite.com/shirley-portfolio/mum",
  ),
];
