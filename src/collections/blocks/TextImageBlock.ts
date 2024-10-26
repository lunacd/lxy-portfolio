import { bottomMargin, colorField } from "../CommonFields";
import { editor } from "../LexicalEditor";
import { Block } from "payload";

const TextBlock: Block = {
  slug: "textImage",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
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
    },
    colorField,
    bottomMargin,
  ],
};

export default TextBlock;
