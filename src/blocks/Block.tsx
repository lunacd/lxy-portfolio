import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";

import ButtonBlock from "@/blocks/ButtonBlock";
import CarouselBlock from "@/blocks/CarouselBlock";
import ColumnBlock from "@/blocks/ColumnBlock";
import DocumentBlock from "@/blocks/DocumentBlock";
import EmbedBlock from "@/blocks/EmbedBlock";
import EmphasisTextBlock from "@/blocks/EmphasisTextBlock";
import EqualHeightImagesBlock from "@/blocks/EqualHeightImagesBlock";
import HorizontalGalleryBlock from "@/blocks/HorizontalGalleryBlock";
import HorizontalScrollBlock from "@/blocks/HorizontalScrollBlock";
import ImageBlock from "@/blocks/ImageBlock";
import ImageTextBlock from "@/blocks/ImageTextBlock";
import ImageWithTextOverlayBlock from "@/blocks/ImageWithTextOverlayBlock";
import RowBlock from "@/blocks/RowBlock";
import SlideShowBlock from "@/blocks/SlideShowBlock";
import SmallGalleryBlock from "@/blocks/SmallGalleryBlock";
import TestimonialBlock from "@/blocks/TestimonialBlock";
import TextBlock from "@/blocks/TextBlock";
import TextImageBlock from "@/blocks/TextImageBlock";
import TitleBlock from "@/blocks/TitleBlock";
import YouTubeBlock from "@/blocks/YouTubeBlock";

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
      return <SmallGalleryBlock {...props.block} payload={props.payload} />;
    case "equalHeightImages":
      return (
        <EqualHeightImagesBlock {...props.block} payload={props.payload} />
      );
    case "imageWithTextOverlay":
      return (
        <ImageWithTextOverlayBlock {...props.block} payload={props.payload} />
      );
    case "imageText":
      return <ImageTextBlock {...props.block} payload={props.payload} />;
    case "carousel":
      return <CarouselBlock {...props.block} payload={props.payload} />;
    case "button":
      return <ButtonBlock {...props.block} payload={props.payload} />;
    case "embed":
      return <EmbedBlock {...props.block} />;
    case "testimonial":
      return <TestimonialBlock {...props.block} payload={props.payload} />;
    case "emphasisText":
      return <EmphasisTextBlock {...props.block} />;
  }
}
