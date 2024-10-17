import type { CollectionConfig } from "payload";

export const Documents: CollectionConfig = {
  slug: "document",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
  admin: {
    useAsTitle: "name",
  },
  upload: {
    disableLocalStorage: true,
  },
};
