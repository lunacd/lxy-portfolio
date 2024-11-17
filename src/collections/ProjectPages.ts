import ColumnBlock from "./blocks/ColumnBlock";
import DocumentBlock from "./blocks/DocumentBlock";
import HorizontalGalleryBlock from "./blocks/HorizontalGalleryBlock";
import HorizontalScrollBlock from "./blocks/HorizontalScrollBlock";
import ImageBlock from "./blocks/ImageBlock";
import RowBlock from "./blocks/RowBlock";
import SlideShowBlock from "./blocks/SlideShowBlock";
import SmallGalleryBlock from "./blocks/SmallGalleryBlock";
import TextBlock from "./blocks/TextBlock";
import TextImageBlock from "./blocks/TextImageBlock";
import TitleBlock from "./blocks/TitleBlock";
import YouTubeBlock from "./blocks/YouTubeBlock";
import type { CollectionConfig } from "payload";

export const ProjectPages: CollectionConfig = {
  slug: "projectPages",
  admin: {
    useAsTitle: "projectName",
  },
  fields: [
    {
      name: "projectName",
      type: "text",
      required: true,
    },
    {
      name: "blocks",
      type: "blocks",
      blocks: [
        TitleBlock,
        TextBlock,
        HorizontalGalleryBlock,
        ImageBlock,
        YouTubeBlock,
        DocumentBlock,
        TextImageBlock,
        HorizontalScrollBlock,
        SlideShowBlock,
        SmallGalleryBlock,
        RowBlock(1),
        ColumnBlock(1),
      ],
      required: true,
    },
  ],
};
