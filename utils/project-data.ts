import Route from "./route";
import { StaticImageData } from "next/image";

import LyuDisplay from "../images/lyu/display-full.webp";
import LyuDisplayM from "../images/lyu/display-mobile-half.webp";
import TronDisplay from "../images/m-tron/display-full.webp";
import TronDisplayM from "../images/m-tron/display-mobile-half.webp";
import OverlapDisplay from "../images/overlap/display-full.webp";
import OverlapDisplayM from "../images/overlap/display-mobile-half.webp";
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
import SkatesSmall from "../images/projects/skates-half.webp";
import SoulSmall from "../images/projects/soul-half.webp";
import SunriseSmall from "../images/projects/sunrise-half.webp";
import TuraSmall from "../images/projects/tura-half.webp";
import RefugiaDisplay from "../images/refugia/display-full.webp";
import RefugiaDisplayM from "../images/refugia/display-mobile-half.webp";
import SkatesDisplay from "../images/skates/display-full.webp";
import SkatesDisplayM from "../images/skates/display-mobile-half.webp";
import SoulDisplay from "../images/soul/display-full.webp";
import SoulDisplayM from "../images/soul/display-mobile-half.webp";
import SunriseDisplay from "../images/sunrise/display-full.webp";
import SunriseDisplayM from "../images/sunrise/display-mobile-half.webp";

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
  displayImage: StaticImageData;
  displayImageMobile: StaticImageData;
  titleColor: string;
  bgColor: string;

  constructor(
    uri: string,
    name: string,
    duration: string,
    category: string,
    focus: string,
    brief: string,
    displayImage: StaticImageData,
    displayImageMobile: StaticImageData,
    smallImage: StaticImageData,
    titleColor: string,
    bgColor: string,
    link: string,
  ) {
    super(uri, name, category, smallImage, link);
    this.duration = duration;
    this.focus = focus;
    this.brief = brief;
    this.displayImage = displayImage;
    this.displayImageMobile = displayImageMobile;
    this.titleColor = titleColor;
    this.bgColor = bgColor;
  }
}

export const projects: string[] = [
  "soul",
  "skates",
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
    SoulDisplayM,
    SoulSmall,
    "text-gray-100",
    "bg-[#EEEAE2]",
    "/soul",
  ),
  new ProjectData(
    "skates",
    "Skates",
    "14 Weeks, 2022 Fall",
    "Furniture Design",
    "Form Study, Prototyping, Manufacturing",
    "Designing and making furniture that reconfigures the spatial experience for Bernhardt. The design is engendered to meet Bernhardt's  brand identity and manufacturing requirements, as well their use of materials.",
    SkatesDisplay,
    SkatesDisplayM,
    SkatesSmall,
    "text-gray-900",
    "bg-[#F0EBE6]",
    "/skates",
  ),
  new ProjectData(
    "overlap",
    "Overlap",
    "14 Weeks, 2022 Spring",
    "Lifestyle Product Design",
    "Prototyping, Tech Drawing, Model Making, Manufacturing",
    "A range of small and functional objects for Hay, focusing on brand identity, manufacturing techniques, and use of materials.",
    OverlapDisplay,
    OverlapDisplayM,
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
    SunriseDisplayM,
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
    TronDisplayM,
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
    LyuDisplayM,
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
    RefugiaDisplayM,
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

export const sidebarRoutes = [
  new Route("about", "About", "/about", "subtitle"),
  new Route("projects", "Projects", "/projects", "subtitle"),
  new Route("soul", "Soul", "/soul", "paragraph"),
  new Route("skates", "Skates", "/skates", "paragraph"),
  new Route("overlap", "Overlap", "/overlap", "paragraph"),
  new Route("sunrise", "Sunrise Speaker", "/sunrise", "paragraph"),
  new Route("m-tron", "M-Tron", "/m-tron", "paragraph"),
  new Route("lyu", "Lyu", "/lyu", "paragraph"),
  new Route("refugia", "Refugia", "/refugia", "paragraph"),
  new Route("others", "More Work", "/others", "subtitle"),
];
