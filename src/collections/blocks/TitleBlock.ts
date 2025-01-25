import { colorField } from "../CommonFields";
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
    {
      name: "bottomMargin",
      type: "radio",
      required: true,
      defaultValue: "large",
      options: ["none", "small", "medium", "regular", "large", "xl", "xxl"],
    },
  ],
};

export default TitleBlock;
