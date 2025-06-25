import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";
import Block from "src/blocks/Block";

import FloatUpMotion from "@/components/FloatUpMotion";

type BlockType = ProjectPage["blocks"][number];

interface BlocksProps {
  payload: Payload;
  blocks: BlockType[];
}

export default function Blocks(props: BlocksProps) {
  return (
    <>
      {props.blocks.map((block, index) => (
        <FloatUpMotion className="w-single" key={index}>
          <Block block={block} payload={props.payload} />
        </FloatUpMotion>
      ))}
    </>
  );
}
