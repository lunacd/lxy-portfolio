import ColumnBlock from "./blocks/ColumnBlock";
import DocumentBlock from "./blocks/DocumentBlock";
import HorizontalGalleryBlock from "./blocks/HorizontalGalleryBlock";
import ImageBlock from "./blocks/ImageBlock";
import RowBlock from "./blocks/RowBlock";
import TextBlock from "./blocks/TextBlock";
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
        RowBlock(1),
        ColumnBlock(1),
      ],
      required: true,
    },
  ],
};
