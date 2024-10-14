import type { GlobalConfig } from "payload";

export const Global: GlobalConfig = {
  slug: "global",
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
      type: "upload",
      relationTo: "document",
      required: true,
    },
    {
      name: "profile",
      type: "textarea",
      required: true,
      defaultValue: "",
    },
    {
      name: "profilePicture",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
