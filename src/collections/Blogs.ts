import { blocks } from "./blocks/AllBlocks";
import type { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: {
    useAsTitle: "title",
    livePreview: {
      url: ({ data }) => {
        return `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/blog/${data.id}`;
      },
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
      },
    },
    {
      name: "coverImage",
      type: "upload",
      required: true,
      relationTo: "media",
      admin: {
        description: "Required dimension: 1280 x 1058.",
      },
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "value",
          type: "text",
          required: true,
        },
      ],
      required: true,
    },
    {
      name: "externalLink",
      type: "text",
      admin: {
        description:
          "If provided, the blog will link to the external URL instead.",
      },
    },
    {
      name: "blocks",
      type: "blocks",
      blocks: blocks("blogs", 1),
      required: true,
    },
  ],
};
