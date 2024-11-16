import { bottomMargin } from "../CommonFields";
import { Block } from "payload";

const DocumentBlock: Block = {
  slug: "document",
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
    },
    {
      name: "document",
      type: "upload",
      relationTo: "document",
      required: true,
      admin: {
        description: "The document to link to.",
      },
    },
    bottomMargin,
  ],
};

export default DocumentBlock;
