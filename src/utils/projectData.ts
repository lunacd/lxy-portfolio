import { StaticImageData } from "next/image";

import AgainFromScratchDisplay from "@/images/againfromscratch/display-full.webp";
import AgainFromScratchDisplayM from "@/images/againfromscratch/display-mobile-half.webp";
import LamboozledDisplay from "@/images/lamboozled/display-full.webp";
import LamboozledDisplayM from "@/images/lamboozled/display-mobile-half.webp";
import TronDisplay from "@/images/m-tron/display-full.webp";
import TronDisplayM from "@/images/m-tron/display-mobile-half.webp";
import OverlapDisplay from "@/images/overlap/display-full.webp";
import OverlapDisplayM from "@/images/overlap/display-mobile-half.webp";
import AgainFromScratchSmall from "@/images/projects/againfromscratch-half.webp";
import ErgoSmall from "@/images/projects/ergo-half.webp";
import ItoSmall from "@/images/projects/ito-half.webp";
import LamboozledSmall from "@/images/projects/lamboozled-half.webp";
import LissSmall from "@/images/projects/liss-half.webp";
import LyuSmall from "@/images/projects/lyu-half.webp";
import TronSmall from "@/images/projects/m-tron-half.webp";
import ModeSmall from "@/images/projects/mode-half.webp";
import MumSmall from "@/images/projects/mum-half.webp";
import OverlapSmall from "@/images/projects/overlap-half.webp";
import PlantSmall from "@/images/projects/plant-half.webp";
import RefugiaSmall from "@/images/projects/refugia-half.webp";
import SaturnSmall from "@/images/projects/saturn-half.webp";
import SkatesSmall from "@/images/projects/skates-half.webp";
import SoulSmall from "@/images/projects/soul-half.webp";
import SunriseSmall from "@/images/projects/sunrise-half.webp";
import TuraSmall from "@/images/projects/tura-half.webp";
import SitAwardImage from "@/images/sit.webp";
import SkatesDisplay from "@/images/skates/display-full.webp";
import SkatesDisplayM from "@/images/skates/display-mobile-half.webp";
import SoulDisplay from "@/images/soul/display-full.webp";
import SoulDisplayM from "@/images/soul/display-mobile-half.webp";
import SunriseDisplay from "@/images/sunrise/display-full.webp";
import SunriseDisplayM from "@/images/sunrise/display-mobile-half.webp";
import TuraDisplay from "@/images/tura/display-full.webp";
import TuraDisplayM from "@/images/tura/display-mobile-half.webp";

export interface ProjectDataLean {
  uri: string;
  name: string;
  category: string;
  smallImage: string | StaticImageData;
  link: string;
  focus?: string[];
}

export interface ProjectData extends ProjectDataLean {
  duration: string;
  focus: string[];
  brief: string;
  displayImage: StaticImageData;
  displayImageMobile: StaticImageData;
  titleColor: string;
  hamburgerColorLight: boolean;
  bgColor: string;
  awardImage?: StaticImageData;
  coverColor?: string;
  categoryTail?: string;
}

export const projectsData: { [name: string]: ProjectData } = {
  skates: {
    uri: "skates",
    name: "Skates",
    duration: "14 Weeks, 2022 Fall",
    category: "Furniture Design",
    categoryTail: "Solo Project",
    focus: ["Form Study", "Interaction Design", "Prototyping", "Manufacturing"],
    brief: "A versatile chair designed for shared open spaces.",
    displayImage: SkatesDisplay,
    displayImageMobile: SkatesDisplayM,
    smallImage: SkatesSmall,
    titleColor: "text-gray-950",
    hamburgerColorLight: false,
    bgColor: "bg-[#F0EBE6]",
    link: "/skates",
    awardImage: SitAwardImage,
  },
  tura: {
    uri: "tura",
    name: "Tura",
    duration: "14 Week, 2021 Spring",
    category: "End-to-end Mobile App Design",
    categoryTail: "Solo Project",
    focus: ["User Research", "UI Design", "Wireframing", "Prototyping"],
    brief:
      "A phone app designed to help users meet new travel buddies and plan trips together.",
    displayImage: TuraDisplay,
    displayImageMobile: TuraDisplayM,
    smallImage: TuraSmall,
    titleColor: "text-gray-950",
    hamburgerColorLight: false,
    bgColor: "bg-[#EFF0ED]",
    link: "/tura",
  },
  lamboozled: {
    uri: "lamboozled",
    name: "Lamboozled!",
    duration: "14 Week, 2023 Fall & 2024 Spring",
    category: "Game Design",
    categoryTail: "Media & Social Change Lab (MASCLab) Project",
    focus: [
      "Interaction Design",
      "Wireframing",
      "Prototyping",
      "Usability Studies",
    ],
    brief:
      "A game designed to help young people sharpen their critical media literacy skills while avoiding partisan politics.",
    displayImage: LamboozledDisplay,
    displayImageMobile: LamboozledDisplayM,
    smallImage: LamboozledSmall,
    titleColor: "text-gray-950",
    hamburgerColorLight: false,
    bgColor: "bg-[#E9E9E9]",
    link: "/lamboozled",
  },
  soul: {
    uri: "soul",
    name: "Soul",
    duration: "14 Weeks, 2022 Spring",
    category: "Lux lifestyle Product Set",
    categoryTail: "Solo Project",
    focus: ["Brand Research", "Form Study", "3D Modeling"],
    brief:
      "A meditation set designed to help regular meditators achieve peace and clarity easily through sight and sound.",
    displayImage: SoulDisplay,
    displayImageMobile: SoulDisplayM,
    smallImage: SoulSmall,
    titleColor: "text-gray-100",
    hamburgerColorLight: true,
    bgColor: "bg-[#EEEAE2]",
    link: "/soul",
  },
  overlap: {
    uri: "overlap",
    name: "Overlap",
    duration: "14 Weeks, 2022 Spring",
    category: "Lifestyle Product Design",
    categoryTail: "Solo Project",
    focus: ["Prototyping", "Model Making", "Manufacturing", "Tech Drawing"],
    brief:
      "A set of table organizers that brings joyful interaction while organizing time, space, and belongings.",
    displayImage: OverlapDisplay,
    displayImageMobile: OverlapDisplayM,
    smallImage: OverlapSmall,
    titleColor: "text-gray-950",
    hamburgerColorLight: false,
    bgColor: "bg-[#FDF9F1]",
    link: "/overlap",
  },
  "again-from-scratch": {
    uri: "again-from-scratch",
    name: "Again From Scratch",
    duration: "7 Week, 2024 Spring",
    category: "Educational Tool Design",
    categoryTail: "Solo Project",
    focus: ["Instructional Design", "Curriculum Development"],
    brief:
      "A material exploration toolkit that empowers learners to craft, experiment with, and eventually understand diverse materials and basic forms.",
    displayImage: AgainFromScratchDisplay,
    displayImageMobile: AgainFromScratchDisplayM,
    smallImage: AgainFromScratchSmall,
    titleColor: "text-gray-950",
    hamburgerColorLight: false,
    bgColor: "bg-[#EEECEA]",
    link: "/again-from-scratch",
    coverColor: "rgba(255, 255, 255, 1)",
  },
  sunrise: {
    uri: "sunrise",
    name: "Sunrise Speaker",
    duration: "14 Weeks, 2021 Fall",
    category: "Consumer Electronics",
    categoryTail: "Solo Project",
    focus: ["Prototyping", "Model Making", "Manufacturing"],
    brief: "A hand-crafted speaker.",
    displayImage: SunriseDisplay,
    displayImageMobile: SunriseDisplayM,
    smallImage: SunriseSmall,
    titleColor: "text-gray-950",
    hamburgerColorLight: false,
    bgColor: "bg-[#D8D6D4]",
    link: "/sunrise",
  },
  "m-tron": {
    uri: "m-tron",
    name: "M-Tron",
    duration: "5 Weeks, 2021 Spring",
    category: "Transportation",
    categoryTail: "Solo Project",
    focus: ["3D Modeling", "Rendering", "Brand-Centric Design"],
    brief:
      "A shared semi-automatic scooter designed for Disneyland, for kids and adults to travel between rides.",
    displayImage: TronDisplay,
    displayImageMobile: TronDisplayM,
    smallImage: TronSmall,
    titleColor: "text-gray-100",
    hamburgerColorLight: true,
    bgColor: "bg-[#E4F2F5]",
    link: "/m-tron",
  },
};

export const projects: string[] = Object.keys(projectsData);

export const otherProjectsData = [
  {
    uri: "lyu",
    name: "Lyu",
    category: "Soft Goods",
    smallImage: LyuSmall,
    link: "/lyu",
  },
  {
    uri: "refugia",
    name: "Refugia",
    category: "Spatial Experience Design",
    smallImage: RefugiaSmall,
    link: "/refugia",
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
  {
    uri: "projects",
    name: "Projects",
    link: "/",
    typeClass: "subtitle",
  },
  { uri: "skates", name: "Skates", link: "/skates", typeClass: "paragraph" },
  { uri: "tura", name: "Tura", link: "/tura", typeClass: "paragraph" },
  {
    uri: "lamboozled",
    name: "Lamboozled!",
    link: "/lamboozled",
    typeClass: "paragraph",
  },
  { uri: "soul", name: "Soul", link: "/soul", typeClass: "paragraph" },
  { uri: "overlap", name: "Overlap", link: "/overlap", typeClass: "paragraph" },
  {
    uri: "again-from-scratch",
    name: "Again From Scratch",
    link: "/again-from-scratch",
    typeClass: "paragraph",
  },
  {
    uri: "sunrise",
    name: "Sunrise Speaker",
    link: "/sunrise",
    typeClass: "paragraph",
  },
  { uri: "m-tron", name: "M-Tron", link: "/m-tron", typeClass: "paragraph" },
  { uri: "about", name: "About", link: "/about", typeClass: "subtitle" },
  { uri: "others", name: "More Work", link: "/others", typeClass: "subtitle" },
];
