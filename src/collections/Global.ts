import type { GlobalConfig } from "payload";

export const Global: GlobalConfig = {
  slug: "global",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "connectionPrompt",
      admin: {
        description:
          "The prompt to connect displayed at the bottom of the page",
      },
      type: "text",
      required: true,
    },
    {
      name: "resume",
      type: "relationship",
      relationTo: "document",
      required: true,
    },
  ],
};
