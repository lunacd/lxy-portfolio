import { bottomMargin } from "../CommonFields";
import { Block } from "payload";

const ImageBlock: Block = {
  slug: "image",
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "imageSize",
      type: "number",
      required: true,
      defaultValue: 100,
      admin: {
        description:
          "Approximate percentage of screen this image will take. For example, if three images are shown side-by-side, then enter 33.",
      },
    },
    bottomMargin,
  ],
};

export default ImageBlock;
