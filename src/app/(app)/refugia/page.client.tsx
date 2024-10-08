"use client";

import { PropsWithChildren } from "react";

import Button from "@/components/Button";
import Scroller from "@/components/Scroller";
import Spacing from "@/components/Spacing";
import TextImage from "@/sections/TextImage";
import TopDisplay from "@/sections/TopDisplay";

import RefugiaSmall from "@/images/projects/refugia-half.webp";
import RefugiaDisplay from "@/images/refugia/display-full.webp";
import RefugiaDisplayM from "@/images/refugia/display-mobile-half.webp";
import Manifesto from "@/images/refugia/manifesto-half.webp";

const projectData = {
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

export default function RefugiaClient(props: PropsWithChildren<{}>) {
  return (
    <Scroller bgColor="bg-[#EEEAE2]">
      <TopDisplay project={projectData} displayDescriptionOnMobile={true} />

      <TextImage
        title="Project Manifesto"
        content={[
          "Refugia is an urban animal den for audiences to experience from animals' perspectives. It provides a sensory experience of animals' sight and feeling, and shows the adaptation of animals to the urban environment.  It's a good place for people to rethink their relationship with nature.",
        ]}
        image={Manifesto}
        width={960}
        height={620}
      />

      <Button text="View the Project" href="/refugia.pdf" />
      <Spacing size="large" />

      {props.children}
    </Scroller>
  );
}
