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
      blocks: [TitleBlock],
      required: true,
    },
  ],
};
