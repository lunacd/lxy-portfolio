import { ProjectPage } from "@payload-types";

import RowBlock from "@/sections/RowBlock";
import TextBlock from "@/sections/TextBlock";
import TitleBlock from "@/sections/TitleBlock";

type BlockType = ProjectPage["blocks"][number];

interface BlockProps {
  block: BlockType;
}

export default function Block(props: BlockProps) {
  switch (props.block.blockType) {
    case "title":
      return <TitleBlock {...props.block} />;
    case "text":
      return <TextBlock {...props.block} />;
    case "row":
      return <RowBlock {...props.block} />;
  }
}
