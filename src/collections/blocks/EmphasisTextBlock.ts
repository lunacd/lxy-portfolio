import { bottomMargin, colorField } from "../CommonFields";
import { editor } from "../LexicalEditor";
import { Block } from "payload";

const EmphasisTextBlock: Block = {
  slug: "emphasisText",
  fields: [
    {
      name: "emphasis",
      type: "text",
      required: true,
    },
    {
      name: "text",
      type: "richText",
      editor: editor,
      required: true,
    },
    {
      name: "useBackground",
      type: "checkbox",
      required: true,
    },
    {
      name: "backgroundColor",
      type: "text",
    },
    bottomMargin,
    colorField(),
  ],
};

export default EmphasisTextBlock;
