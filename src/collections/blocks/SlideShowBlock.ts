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
        },
      ],
      required: true,
    },
    bottomMargin,
  ],
};

export default SlideShowBlock;
