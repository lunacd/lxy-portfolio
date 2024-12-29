import { bottomMargin } from "../CommonFields";
import { Block } from "payload";

const SlideShowBlock: Block = {
  slug: "slideShow",
  fields: [
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          admin: {
            description: "Recommended width 3840px.",
          },
        },
      ],
      required: true,
    },
    bottomMargin,
  ],
};

export default SlideShowBlock;
