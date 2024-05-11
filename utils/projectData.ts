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
import SkatesDisplay from "../images/skates/display-full.webp";
import SkatesDisplayM from "../images/skates/display-mobile-half.webp";
import SoulDisplay from "../images/soul/display-full.webp";
import SoulDisplayM from "../images/soul/display-mobile-half.webp";
import SunriseDisplay from "../images/sunrise/display-full.webp";
import SunriseDisplayM from "../images/sunrise/display-mobile-half.webp";

export interface ProjectDataLean {
  uri: string;
  name: string;
  category: string;
  smallImage: string | StaticImageData;
  link: string;
}

export interface ProjectData extends ProjectDataLean {
  duration: string;
  focus: string;
  brief: string;
  displayImage: StaticImageData;
  displayImageMobile: StaticImageData;
  titleColor: string;
  hamburgerColorLight: boolean;
  bgColor: string;
}

export const projects: string[] = [
  "soul",
  "skates",
  "overlap",
  "sunrise",
  "m-tron",
  "lyu",
];

export const projectsData: { [name: string]: ProjectData } = {
  soul: {
    uri: "soul",
    name: "Soul",
    duration: "14 Weeks, 2022 Spring",
    category: "Lux lifestyle Product Set",
    focus: "Brand Research, Form Study, 3D Modeling",
    brief:
      "To propose a new product category for Rolls-Royce by designing a unified collection of objects.",
    displayImage: SoulDisplay,
    displayImageMobile: SoulDisplayM,
    smallImage: SoulSmall,
    titleColor: "text-gray-100",
    hamburgerColorLight: true,
    bgColor: "bg-[#EEEAE2]",
    link: "/soul",
  },
  skates: {
    uri: "skates",
    name: "Skates",
    duration: "14 Weeks, 2022 Fall",
    category: "Furniture Design",
    focus: "Form Study, Prototyping, Manufacturing",
    brief:
      "Designing and making furniture that reconfigures the spatial experience for Bernhardt. The design is engendered to meet Bernhardt's  brand identity and manufacturing requirements, as well their use of materials.",
    displayImage: SkatesDisplay,
    displayImageMobile: SkatesDisplayM,
    smallImage: SkatesSmall,
    titleColor: "text-gray-900",
    hamburgerColorLight: false,
    bgColor: "bg-[#F0EBE6]",
    link: "/skates",
  },
  overlap: {
    uri: "overlap",
    name: "Overlap",
    duration: "14 Weeks, 2022 Spring",
    category: "Lifestyle Product Design",
    focus: "Prototyping, Tech Drawing, Model Making, Manufacturing",
    brief:
      "A range of small and functional objects for Hay, focusing on brand identity, manufacturing techniques, and use of materials.",
    displayImage: OverlapDisplay,
    displayImageMobile: OverlapDisplayM,
    smallImage: OverlapSmall,
    titleColor: "text-gray-900",
    hamburgerColorLight: false,
    bgColor: "bg-[#FDF9F1]",
    link: "/overlap",
  },
  sunrise: {
    uri: "sunrise",
    name: "Sunrise Speaker",
    duration: "14 Weeks , 2021 Fall",
    category: "Consumer Electronics",
    focus: "Form Study, Prototyping, Model Making, Manufacturing",
    brief:
      "Reverse-engineered a speaker and put all parts back together in personal designed product for Yamaha.",
    displayImage: SunriseDisplay,
    displayImageMobile: SunriseDisplayM,
    smallImage: SunriseSmall,
    titleColor: "text-gray-900",
    hamburgerColorLight: false,
    bgColor: "bg-[#D8D6D4]",
    link: "/sunrise",
  },
  "m-tron": {
    uri: "m-tron",
    name: "M-Tron",
    duration: "5 Weeks , 2021 Spring",
    category: "Transportation",
    focus: "3D Modeling, Rendering",
    brief:
      "A shared semi-automatic scooter inside Walt Disney World for both kids and adult to transport between different rides.",
    displayImage: TronDisplay,
    displayImageMobile: TronDisplayM,
    smallImage: TronSmall,
    titleColor: "text-gray-100",
    hamburgerColorLight: true,
    bgColor: "bg-[#E4F2F5]",
    link: "/m-tron",
  },
  lyu: {
    uri: "lyu",
    name: "Lyu",
    duration: "2 Weeks Daily, 2022 Spring",
    category: "Soft Goods",
    focus: "Craft, Tech Drawing, Manufacturing",
    brief:
      "2-week daily course provided practical knowledge of leather footwear and leather bag making in a factory setting.",
    displayImage: LyuDisplay,
    displayImageMobile: LyuDisplayM,
    smallImage: LyuSmall,
    titleColor: "text-gray-100",
    hamburgerColorLight: true,
    bgColor: "bg-[#EFF2F3]",
    link: "/lyu",
  },
};

export const otherProjectsData = [
  {
    uri: "refugia",
    name: "Refugia",
    category: "Spatial Experience Design",
    smallImage: RefugiaSmall,
    link: "https://www.shirleylyu.com/refugia",
  },
  {
    uri: "mode",
    name: "Mode Bag",
    category: "Soft Goods",
    smallImage: ModeSmall,
    link: "https://shirleylyu.wixsite.com/shirley-portfolio/mode",
  },
  {
    uri: "liss",
    name: "Liss",
    category: "Hard Goods",
    smallImage: LissSmall,
    link: "https://shirleylyu.wixsite.com/shirley-portfolio/liss",
  },
  {
    uri: "saturn",
    name: "Saturn",
    category: "Pet Furniture",
    smallImage: SaturnSmall,
    link: "https://shirleylyu.wixsite.com/shirley-portfolio/saturn",
  },
  {
    uri: "ergo",
    name: "Ergo Care",
    category: "Consumer Electronics",
    smallImage: ErgoSmall,
    link: "https://shirleylyu.wixsite.com/shirley-portfolio/ergo-care",
  },
  {
    uri: "ito",
    name: "Ito Suitcase",
    category: "Hard Goods",
    smallImage: ItoSmall,
    link: "https://shirleylyu.wixsite.com/shirley-portfolio/ito",
  },
  {
    uri: "tura",
    name: "Tura",
    category: "UI/UX Design",
    smallImage: TuraSmall,
    link: "https://shirleylyu.wixsite.com/shirley-portfolio/tura",
  },
  {
    uri: "plant",
    name: "Plant Phone",
    category: "Consumer Electronics",
    smallImage: PlantSmall,
    link: "https://shirleylyu.wixsite.com/shirley-portfolio/plantphone",
  },
  {
    uri: "mum",
    name: "Mum",
    category: "Soft Goods",
    smallImage: MumSmall,
    link: "https://shirleylyu.wixsite.com/shirley-portfolio/mum",
  },
];

interface Route {
  uri: string;
  name: string;
  link: string;
  typeClass: string;
}

export default Route;
export const sidebarRoutes = [
  { uri: "about", name: "About", link: "/about", typeClass: "subtitle" },
  {
    uri: "projects",
    name: "Projects",
    link: "/projects",
    typeClass: "subtitle",
  },
  { uri: "soul", name: "Soul", link: "/soul", typeClass: "paragraph" },
  { uri: "skates", name: "Skates", link: "/skates", typeClass: "paragraph" },
  { uri: "overlap", name: "Overlap", link: "/overlap", typeClass: "paragraph" },
  {
    uri: "sunrise",
    name: "Sunrise Speaker",
    link: "/sunrise",
    typeClass: "paragraph",
  },
  { uri: "m-tron", name: "M-Tron", link: "/m-tron", typeClass: "paragraph" },
  { uri: "lyu", name: "Lyu", link: "/lyu", typeClass: "paragraph" },
  { uri: "others", name: "More Work", link: "/others", typeClass: "subtitle" },
];
