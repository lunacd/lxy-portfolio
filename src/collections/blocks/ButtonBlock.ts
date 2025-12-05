import { bottomMargin, colorField } from "../CommonFields";
import { Block } from "payload";

const ButtonBlock: Block = {
  slug: "button",
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
    },
    {
      name: "link",
      type: "text",
      required: true,
    },
    {
      name: "openInNewPage",
      type: "checkbox",
      required: true,
    },
    colorField("color"),
    bottomMargin,
  ],
  imageURL: "/payload/button.png",
};

export default ButtonBlock;
