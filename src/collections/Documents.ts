import type { CollectionConfig } from "payload";

export const Documents: CollectionConfig = {
  slug: "document",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
  upload: {
    disableLocalStorage: true,
  },
};
