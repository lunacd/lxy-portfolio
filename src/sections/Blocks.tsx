import { ProjectPage } from "@payload-types";
import { Payload } from "payload";

import FloatUpMotion from "@/components/FloatUpMotion";
import Block from "@/sections/Block";

type BlockType = ProjectPage["blocks"][number];

interface BlocksProps {
  payload: Payload;
  blocks: BlockType[];
}

export default function Blocks(props: BlocksProps) {
  return (
    <>
      {props.blocks.map((block, index) => (
        <FloatUpMotion className="single" key={index}>
          <Block block={block} payload={props.payload} />
        </FloatUpMotion>
      ))}
    </>
  );
}
