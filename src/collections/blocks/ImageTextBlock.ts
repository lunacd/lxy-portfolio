import { bottomMargin, colorField } from "../CommonFields";
import { editor } from "../LexicalEditor";
import { Block } from "payload";

const ImageTextBlock: Block = {
  slug: "imageText",
  fields: [
    {
      name: "text",
      type: "richText",
      required: true,
      editor: editor,
    },
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
            description: "Recommended width 1920px.",
          },
        },
      ],
      required: true,
    },
    colorField(),
    bottomMargin,
  ],
};

export default ImageTextBlock;
