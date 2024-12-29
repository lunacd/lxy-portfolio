import { StaticImageData } from "next/image";

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

export const mainFocuses: { [uri: string]: { uri: string; name: string } } = {
  "product-design": {
    uri: "product-design",
    name: "Product",
  },
  "user-experience-design": {
    uri: "user-experience-design",
    name: "User Experience",
  },
  edtech: {
    uri: "edtech",
    name: "EdTech",
  },
};
