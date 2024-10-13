import LyuClient from "./page.client";
import { Metadata } from "next";

import ConnectPrompt from "@/components/ConnectPrompt";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";

import LyuDisplay from "@/images/lyu/display-full.webp";
import LyuDisplayM from "@/images/lyu/display-mobile-half.webp";
import LyuSmall from "@/images/projects/lyu-half.webp";

export const metadata: Metadata = {
  title: "Lyu | Shirley Lyu",
};

const lyuProjectData = {
  uri: "lyu",
  name: "Lyu",
  duration: "2 Weeks Daily, 2022 Spring",
  category: "Soft Goods",
  focus: ["Craft", "Tech Drawing", "Manufacturing"],
  brief:
    "2-week daily course provided practical knowledge of leather footwear and leather bag making in a factory setting.",
  displayImage: LyuDisplay,
  displayImageMobile: LyuDisplayM,
  smallImage: LyuSmall,
  titleColor: "text-gray-100",
  hamburgerColorLight: true,
  bgColor: "bg-[#EFF2F3]",
  link: "/lyu",
};

export default function Lyu() {
  return (
    <Scroller bgColor={lyuProjectData.bgColor}>
      <LyuClient
        topChildren={
          <TopDisplay
            project={lyuProjectData}
            displayDescriptionOnMobile={true}
          />
        }
      >
        <ConnectPrompt />
      </LyuClient>
    </Scroller>
  );
}
