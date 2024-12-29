import { bottomMargin, bottomMarginNew } from "../CommonFields";
import { editor } from "../LexicalEditor";
import { Block } from "payload";

const SmallGalleryBlock: Block = {
  slug: "smallGallery",
  fields: [
    {
      name: "items",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          admin: {
            description: "Recommended width 1280px.",
          },
        },
        {
          name: "text",
          type: "richText",
          editor: editor,
          required: true,
          admin: {
            description:
              "It's recommended to use Title 2 as the main description, and use normal text for whatever that follows it.",
          },
        },
        {
          name: "link",
          type: "text",
          admin: {
            description:
              "If specified, the displayed image will be clickable and will link to the given link.",
          },
        },
      ],
      required: true,
    },
    bottomMargin,
    bottomMarginNew,
  ],
};

export default SmallGalleryBlock;
