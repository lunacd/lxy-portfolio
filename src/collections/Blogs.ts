import ColumnBlock from "./blocks/ColumnBlock";
import DocumentBlock from "./blocks/DocumentBlock";
import HorizontalGalleryBlock from "./blocks/HorizontalGalleryBlock";
import HorizontalScrollBlock from "./blocks/HorizontalScrollBlock";
import ImageBlock from "./blocks/ImageBlock";
import RowBlock from "./blocks/RowBlock";
import SlideShowBlock from "./blocks/SlideShowBlock";
import TextBlock from "./blocks/TextBlock";
import TextImageBlock from "./blocks/TextImageBlock";
import TitleBlock from "./blocks/TitleBlock";
import YouTubeBlock from "./blocks/YouTubeBlock";
import type { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
      },
    },
    {
      name: "coverImage",
      type: "upload",
      required: true,
      relationTo: "media",
      admin: {
        description: "Recommended width 1280px.",
      },
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
        RowBlock(1),
        ColumnBlock(1),
      ],
      required: true,
    },
  ],
};
