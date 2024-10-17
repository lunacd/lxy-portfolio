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
    {
      name: "color",
      type: "radio",
      options: ["dark", "light"],
      defaultValue: "dark",
      required: true,
    },
  ],
};

export default TitleBlock;
