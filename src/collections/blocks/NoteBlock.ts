import { bottomMargin, colorField } from "../CommonFields";
import { editor } from "../LexicalEditor";
import { Block } from "payload";

const NoteBlock: Block = {
  slug: "note",
  fields: [
    {
      name: "noteEmoji",
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
      name: "backgroundColor",
      type: "text",
      required: true,
    },
    bottomMargin,
    colorField(),
  ],
};

export default NoteBlock;
