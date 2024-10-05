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
  admin: {
    useAsTitle: "name",
  },
  upload: {
    disableLocalStorage: true,
  },
};
