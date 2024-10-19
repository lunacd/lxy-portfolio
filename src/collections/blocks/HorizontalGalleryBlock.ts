import { bottomMargin } from "../CommonFields";
import { editor } from "../LexicalEditor";
import { Block } from "payload";

const HorizontalGalleryBlock: Block = {
  slug: "horizontalGallery",
  fields: [
    {
      name: "items",
      type: "array",
      required: true,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          admin: {
            description:
              "All images must have the same size. Recommended image width: approx. 3840 / number of items.",
          },
        },
        {
          name: "text",
          type: "richText",
          required: true,
          editor: editor,
        },
      ],
    },
    {
      name: "spacing",
      type: "radio",
      options: ["small", "medium", "regular", "large", "xl", "xxl"],
      required: true,
      defaultValue: "regular",
    },
    bottomMargin,
  ],
};

export default HorizontalGalleryBlock;
