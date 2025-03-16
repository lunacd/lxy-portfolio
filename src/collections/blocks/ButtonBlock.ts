import { bottomMargin } from "../CommonFields";
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
    bottomMargin,
  ],
};

export default ButtonBlock;
