import RefugiaClient from "./page.client";
import { Metadata } from "next";

import ConnectPrompt from "@/components/ConnectPrompt";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";

import RefugiaSmall from "@/images/projects/refugia-half.webp";
import RefugiaDisplay from "@/images/refugia/display-full.webp";
import RefugiaDisplayM from "@/images/refugia/display-mobile-half.webp";

export const metadata: Metadata = {
  title: "Refugia | Shirley Lyu",
};
const refugiaData = {
  uri: "refugia",
  name: "Refugia",
  duration: "14 Weeks, 2022 Summer",
  category: "Spatial Experience Design",
  focus: ["Sustainability", "Model making"],
  brief:
    "See through their eyes; hear through their ears; sense through their senses. Learn and feel animals' adaptation to the urban environment.",
  displayImage: RefugiaDisplay,
  displayImageMobile: RefugiaDisplayM,
  smallImage: RefugiaSmall,
  titleColor: "text-gray-100",
  bgColor: "bg-[#E0E4E0]",
  link: "/refugia",
  hamburgerColorLight: false,
};

export default function Refugia() {
  return (
    <Scroller bgColor={refugiaData.bgColor}>
      <RefugiaClient
        topChildren={
          <TopDisplay project={refugiaData} displayDescriptionOnMobile={true} />
        }
      >
        <ConnectPrompt />
      </RefugiaClient>
    </Scroller>
  );
}
