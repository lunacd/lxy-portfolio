"use client";

import { PropsWithChildren, ReactNode } from "react";

import EqualSplit from "@/components/EqualSplit";
import Spacing from "@/components/Spacing";
import TextSection, { TextContentType } from "@/components/TextSection";
import LegacyTitle from "@/sections/LegacyTitle";

interface LamboozledProps {
  topChildren: ReactNode;
}

export default function LamboozledClient(
  props: PropsWithChildren<LamboozledProps>,
) {
  return (
    <>
      {props.topChildren}

      <LegacyTitle title="Overview" />
      <EqualSplit>
        <TextSection
          content={[
            { type: TextContentType.Subtitle, text: "My Role" },
            {
              type: TextContentType.Normal,
              text: "UX Design Lead, UX Researcher",
            },
          ]}
        />
        <TextSection
          content={[
            { type: TextContentType.Subtitle, text: "Responsibilities" },
            {
              type: TextContentType.Normal,
              text: "Led the design of the user flow, interactive elements, and wireframes for the main page and dashboard of Lamboozled!. Conducted user testing through usability studies, and developed prototypes for handoff to the development team, ensuring an intuitive and user-centered experience.",
            },
          ]}
        />
      </EqualSplit>
      <Spacing size="small" />
      <EqualSplit>
        <TextSection
          content={[
            { type: TextContentType.Subtitle, text: "Design Challenge" },
            {
              type: TextContentType.Normal,
              text: "The existing user interface was overly complex, often causing players to get lost during gameplay. The user flow lacked clarity, making it difficult for users to navigate between the main page and dashboard.",
            },
          ]}
        />
        <TextSection
          content={[
            { type: TextContentType.Subtitle, text: "The Goal" },
            {
              type: TextContentType.Normal,
              text: "Simplify the user interface, streamline the user flow, reduce friction in interactions, and create a more intuitive design that enhances the overall user experience, all while maintaining the playful and engaging tone of the game.",
            },
          ]}
        />
      </EqualSplit>
      <Spacing size="large" />

      <div>
        <div className="title text-center">Want to know more?</div>
        <div className="w-single text-center">
          You can keep an eye on the{" "}
          <a
            href="https://www.masclab.org/lamboozled-goes-digital"
            className="text-blue-500 underline"
          >
            MASCLab website
          </a>{" "}
          for the latest updates on the game.
        </div>
      </div>
      <Spacing size="large" />

      {props.children}
    </>
  );
}
