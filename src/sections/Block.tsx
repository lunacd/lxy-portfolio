import EqualHeightImagesBlock from "./EqualHeightImagesBlock";
import SmallgallerBlock from "./SmallGalleryBlock";
import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";

import ColumnBlock from "@/sections/ColumnBlock";
import DocumentBlock from "@/sections/DocumentBlock";
import HorizontalGalleryBlock from "@/sections/HorizontalGalleryBlock";
import HorizontalScrollBlock from "@/sections/HorizontalScrollBlock";
import ImageBlock from "@/sections/ImageBlock";
import RowBlock from "@/sections/RowBlock";
import SlideShowBlock from "@/sections/SlideShowBlock";
import TextBlock from "@/sections/TextBlock";
import TextImageBlock from "@/sections/TextImageBlock";
import TitleBlock from "@/sections/TitleBlock";
import YouTubeBlock from "@/sections/YouTubeBlock";

type BlockType = ProjectPage["blocks"][number];

interface BlockProps {
  block: BlockType;
  payload: Payload;
}

export default function Block(props: BlockProps) {
  switch (props.block.blockType) {
    case "title":
      return <TitleBlock {...props.block} />;
    case "text":
      return <TextBlock {...props.block} />;
    case "row":
      return <RowBlock {...props.block} payload={props.payload} />;
    case "column":
      return <ColumnBlock {...props.block} payload={props.payload} />;
    case "image":
      return <ImageBlock {...props.block} payload={props.payload} />;
    case "horizontalGallery":
      return (
        <HorizontalGalleryBlock {...props.block} payload={props.payload} />
      );
    case "youtube":
      return <YouTubeBlock {...props.block} />;
    case "document":
      return <DocumentBlock {...props.block} payload={props.payload} />;
    case "textImage":
      return <TextImageBlock {...props.block} payload={props.payload} />;
    case "horizontalScroll":
      return <HorizontalScrollBlock {...props.block} payload={props.payload} />;
    case "slideShow":
      return <SlideShowBlock {...props.block} payload={props.payload} />;
    case "smallGallery":
      return <SmallgallerBlock {...props.block} payload={props.payload} />;
    case "equalHeightImages":
      return (
        <EqualHeightImagesBlock {...props.block} payload={props.payload} />
      );
  }
}
