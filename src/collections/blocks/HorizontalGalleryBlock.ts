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
    {
      name: "bottomMargin",
      type: "checkbox",
      required: true,
      defaultValue: true,
      admin: {
        description: "Check this to include a margin at the bottom",
      },
    },
  ],
};

export default HorizontalGalleryBlock;
