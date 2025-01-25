import { bottomMargin as bottomMarginField, colorField } from "../CommonFields";
import { editor } from "../LexicalEditor";
import { Block } from "payload";

const ImageWithTextOverlayBlock: Block = {
  slug: "imageWithTextOverlay",
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "For a full-width image, recommended width is 3840px.",
      },
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
    {
      name: "textOverlay",
      type: "richText",
      editor: editor,
      required: true,
    },
    colorField(),
    bottomMarginField,
  ],
};

export default ImageWithTextOverlayBlock;
