import { colorField, titleTypeField } from "../CommonFields";
import { Block } from "payload";

const TitleBlock: Block = {
  slug: "title",
  fields: [
    {
      name: "text",
      type: "text",
      required: true,
    },
    titleTypeField,
    colorField(),
    {
      name: "bottomMargin",
      type: "radio",
      required: true,
      defaultValue: "large",
      options: ["none", "small", "medium", "regular", "large", "xl", "xxl"],
    },
  ],
  imageURL: "/payload/title.png",
};

export default TitleBlock;
