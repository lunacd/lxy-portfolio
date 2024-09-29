import type { GlobalConfig } from "payload";

export const Global: GlobalConfig = {
  slug: "global",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "connectionPrompt",
      label: "Connection Prompt",
      admin: {
        description:
          "The prompt to connect displayed at the bottom of the page",
      },
      type: "text",
      required: true,
    },
  ],
};
