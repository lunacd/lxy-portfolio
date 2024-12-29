import { blocks } from "./blocks/AllBlocks";
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
      blocks: blocks(1),
      required: true,
    },
  ],
};
