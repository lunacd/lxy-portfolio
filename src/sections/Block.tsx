import TitleBlock from "./TitleBlock";
import { ProjectPage } from "@payload-types";

type BlockType = ProjectPage["blocks"][number];

interface BlockProps {
  block: BlockType;
}

export default function Block(props: BlockProps) {
  switch (props.block.blockType) {
    case "title":
      return <TitleBlock {...props.block} />;
  }
}
