import EqualHeightImagesBlock from "./EqualHeightImagesBlock";
import ImageWithTextOverlayBlock from "./ImageWithTextOverlayBlock";
import LargeGalleryBlock from "./LargeGalleryBlock";
import SmallgallerBlock from "./SmallGalleryBlock";
import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";
import ColumnBlock from "src/blocks/ColumnBlock";
import DocumentBlock from "src/blocks/DocumentBlock";
import HorizontalGalleryBlock from "src/blocks/HorizontalGalleryBlock";
import HorizontalScrollBlock from "src/blocks/HorizontalScrollBlock";
import ImageBlock from "src/blocks/ImageBlock";
import RowBlock from "src/blocks/RowBlock";
import SlideShowBlock from "src/blocks/SlideShowBlock";
import TextBlock from "src/blocks/TextBlock";
import TextImageBlock from "src/blocks/TextImageBlock";
import TitleBlock from "src/blocks/TitleBlock";
import YouTubeBlock from "src/blocks/YouTubeBlock";

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
    case "largeGallery":
      return <LargeGalleryBlock {...props.block} payload={props.payload} />;
    case "imageWithTextOverlay":
      return (
        <ImageWithTextOverlayBlock {...props.block} payload={props.payload} />
      );
  }
}
