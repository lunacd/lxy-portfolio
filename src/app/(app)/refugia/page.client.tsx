"use client";

import { PropsWithChildren, ReactNode } from "react";

import Button from "@/components/Button";
import Spacing from "@/components/Spacing";
import TextImage from "@/sections/TextImage";

import Manifesto from "@/images/refugia/manifesto-half.webp";

interface RefugiaProps {
  topChildren: ReactNode;
}

export default function RefugiaClient(props: PropsWithChildren<RefugiaProps>) {
  return (
    <>
      {props.topChildren}

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
    </>
  );
}
