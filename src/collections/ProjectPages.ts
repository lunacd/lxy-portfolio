import RowBlock from "./blocks/RowBlock";
import TextBlock from "./blocks/TextBlock";
import TitleBlock from "./blocks/TitleBlock";
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
      blocks: [TitleBlock, RowBlock, TextBlock],
      required: true,
    },
  ],
};
