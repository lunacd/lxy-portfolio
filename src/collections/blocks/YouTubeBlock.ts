import { bottomMargin } from "../CommonFields";
import { Block } from "payload";

const YouTubeBlock: Block = {
  slug: "youtube",
  labels: {
    singular: "YouTube",
    plural: "YouTubes",
  },
  fields: [
    {
      name: "embedLink",
      type: "text",
      required: true,
      admin: {
        description:
          "Get embed link by going to the YouTube video page, click share, and then choose embed.",
      },
    },
    {
      name: "width",
      type: "number",
      required: true,
    },
    {
      name: "height",
      type: "number",
      required: true,
    },
    bottomMargin,
  ],
};

export default YouTubeBlock;
