"use client";

import { PropsWithChildren, ReactNode } from "react";

import LegacyButton from "@/components/LegacyButton";
import LegacySpacing from "@/components/LegacySpacing";
import LegacyTextImage from "@/components/LegacyTextImage";

import Manifesto from "@/images/refugia/manifesto-half.webp";

interface RefugiaProps {
  topChildren: ReactNode;
}

export default function RefugiaClient(props: PropsWithChildren<RefugiaProps>) {
  return (
    <>
      {props.topChildren}

      <LegacyTextImage
        title="Project Manifesto"
        content={[
          "Refugia is an urban animal den for audiences to experience from animals' perspectives. It provides a sensory experience of animals' sight and feeling, and shows the adaptation of animals to the urban environment.  It's a good place for people to rethink their relationship with nature.",
        ]}
        image={Manifesto}
        width={960}
        height={620}
      />

      <LegacyButton href="/refugia.pdf">View the Project</LegacyButton>
      <LegacySpacing size="large" />

      {props.children}
    </>
  );
}
