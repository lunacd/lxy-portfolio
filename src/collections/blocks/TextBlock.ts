import { bottomMargin, bottomMarginNew, colorField } from "../CommonFields";
import { editor } from "../LexicalEditor";
import { Block } from "payload";

const TextBlock: Block = {
  slug: "text",
  fields: [
    {
      name: "text",
      type: "richText",
      required: true,
      editor: editor,
    },
    colorField(),
    bottomMargin,
    bottomMarginNew,
  ],
};

export default TextBlock;
