import TextBlock from "./TextBlock";
import TitleBlock from "./TitleBlock";
import { Block } from "payload";

const RowBlock: Block = {
  slug: "row",
  fields: [
    {
      name: "blocks",
      type: "blocks",
      required: true,
      blocks: [TextBlock, TitleBlock],
    },
    {
      name: "spacing",
      type: "radio",
      options: ["regular", "large", "xl", "xxl"],
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

export default RowBlock;
