import SoulClient from "./page.client";
import DisplayImage from "@/components/display-image";
import HorizontalGallery from "@/components/horizontal-gallery";
import HorizontalScroll from "@/components/horizontal-scroll";
import LargeGallery from "@/components/large-gallery";
import ProjectNavigation from "@/components/project-navigation";
import Scroller from "@/components/scroller";
import SmallGallery from "@/components/small-gallery";
import Spacing from "@/components/spacing";
import Subtitle from "@/components/subtitle";
import TextImage from "@/components/text-image";
import Title from "@/components/title";
import TopDisplay from "@/components/top-display";
import GalleryItem from "@/utils/gallery-item";
import { projects, projectsData } from "@/utils/project-data";
import useScroll from "@/utils/use-scroll";
import { Metadata } from "next";

import Belonging1 from "../images/skates/belonging-1-small.webp";
import Belonging2 from "../images/skates/belonging-2-small.webp";
import Belonging3 from "../images/skates/belonging-3-small.webp";
import Belonging4 from "../images/skates/belonging-4-small.webp";
import Colorways from "../images/skates/colorways-full.webp";
import ConceptDevelopment from "../images/skates/concept-dev-2x.webp";
import Details from "../images/skates/details-half.webp";
import Environment1 from "../images/skates/environment-1-full.webp";
import Environment2 from "../images/skates/environment-2-full.webp";
import FlexibleWork from "../images/skates/flexible-work-half.webp";
import Gallery1 from "../images/skates/gallery/gallery-1-half.webp";
import Gallery2 from "../images/skates/gallery/gallery-2-half.webp";
import Gallery3 from "../images/skates/gallery/gallery-3-big.webp";
import Gallery4 from "../images/skates/gallery/gallery-4-half.webp";
import Gallery5 from "../images/skates/gallery/gallery-5-half.webp";
import Gallery6 from "../images/skates/gallery/gallery-6-half.webp";
import Making1 from "../images/skates/making/making-1-small.webp";
import Making2 from "../images/skates/making/making-2-small.webp";
import Making3 from "../images/skates/making/making-3-small.webp";
import Making4 from "../images/skates/making/making-4-small.webp";
import Making5 from "../images/skates/making/making-5-small.webp";
import Making6 from "../images/skates/making/making-6-small.webp";
import Making7 from "../images/skates/making/making-7-small.webp";
import Making8 from "../images/skates/making/making-8-small.webp";
import Making9 from "../images/skates/making/making-9-small.webp";
import Making10 from "../images/skates/making/making-10-small.webp";
import Making11 from "../images/skates/making/making-11-small.webp";
import Making12 from "../images/skates/making/making-12-small.webp";
import Making13 from "../images/skates/making/making-13-small.webp";
import Making14 from "../images/skates/making/making-14-small.webp";
import Making15 from "../images/skates/making/making-15-small.webp";
import Manifesto from "../images/skates/manifesto-half.webp";
import Overview from "../images/skates/overview-full.webp";
import Structure from "../images/skates/structure-full.webp";
import TechDrawing from "../images/skates/tech-drawing-full.webp";
import Usage from "../images/skates/usage-desktop-full.webp";
import UsageM1 from "../images/skates/usage-mobile-1-half.webp";
import UsageM2 from "../images/skates/usage-mobile-2-half.webp";

export const metadata: Metadata = {
  title: "Skates | Shirley Lyu",
};

export default function Skates() {
  return <SoulClient />;
}
