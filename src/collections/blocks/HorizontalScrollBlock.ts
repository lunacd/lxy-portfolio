import { bottomMargin, colorField } from "../CommonFields";
import { Block } from "payload";

const HorizontalScrollBlock: Block = {
  slug: "horizontalScroll",
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "scrollPrompt",
      type: "text",
      required: true,
      admin: {
        description:
          "The text displayed on top of the image to tell users to scroll.",
      },
    },
    {
      name: "width",
      type: "number",
      required: true,
      admin: {
        description:
          "The percentage width of the image. For example, if the image should be 6x the width of screen, use 600.",
      },
    },
    colorField(),
    bottomMargin,
  ],
};

export default HorizontalScrollBlock;
