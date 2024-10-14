import type { GlobalConfig } from "payload";

export const ProjectOrder: GlobalConfig = {
  slug: "projectOrder",
  fields: [
    {
      name: "projects",
      type: "array",
      required: true,
      fields: [
        {
          name: "project",
          type: "relationship",
          relationTo: "project",
          required: true,
        },
      ],
    },
  ],
};
