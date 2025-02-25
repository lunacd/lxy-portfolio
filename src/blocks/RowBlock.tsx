import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import React from "react";
import "server-only";
import Block from "src/blocks/Block";

import Row from "@/components/Row";

export type RowBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "row" }
> & {
  payload: Payload;
};

export default function RowBlock(props: RowBlockProps) {
  return (
    <Row
      alignment={props.alignment}
      bottomMargin={props.bottomMargin}
      length={props.blocks.length}
      spacing={props.spacing}
    >
      {props.blocks.map((block, index) => (
        <Block key={index} block={block} payload={props.payload} />
      ))}
    </Row>
  );
}
