import { bottomMargin } from "../CommonFields";
import { Block } from "payload";

const EmbedBlock: Block = {
  slug: "embed",
  fields: [
    {
      name: "embedLink",
      type: "text",
      required: true,
    },
    {
      name: "width",
      type: "number",
      required: true,
    },
    {
      name: "height",
      type: "number",
      required: true,
    },
    bottomMargin,
  ],
};

export default EmbedBlock;
