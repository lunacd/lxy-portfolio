import { bottomMargin, colorField, titleTypeField } from "../CommonFields";
import { editor } from "../LexicalEditor";
import { Block } from "payload";

const TextImageBlock: Block = {
  slug: "textImage",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    titleTypeField,
    {
      name: "text",
      type: "richText",
      required: true,
      editor: editor,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Recommended width 1920px.",
      },
    },
    colorField(),
    bottomMargin,
  ],
};

export default TextImageBlock;
