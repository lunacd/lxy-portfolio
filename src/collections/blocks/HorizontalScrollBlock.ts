import { bottomMarginNew, colorField } from "../CommonFields";
import { Block } from "payload";

const HorizontalScrollBlock: Block = {
  slug: "horizontalScroll",
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description:
          "Approximately 3840 x the number of screens you want this image to scroll. Max 11520 px.",
      },
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
    bottomMarginNew,
  ],
};

export default HorizontalScrollBlock;
