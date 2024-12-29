import { bottomMargin, colorField } from "../CommonFields";
import { Block } from "payload";

const TitleBlock: Block = {
  slug: "title",
  fields: [
    {
      name: "text",
      type: "text",
      required: true,
    },
    {
      name: "type",
      type: "radio",
      options: ["title", "subtitle"],
      defaultValue: "title",
      required: true,
    },
    colorField(),
    bottomMargin,
  ],
};

export default TitleBlock;
