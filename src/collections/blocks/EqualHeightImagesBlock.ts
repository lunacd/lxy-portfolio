import { bottomMargin } from "../CommonFields";
import { Block } from "payload";

const EqualHeightImagesBlock: Block = {
  slug: "equalHeightImages",
  fields: [
    {
      name: "items",
      type: "array",
      required: true,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          admin: {
            description:
              "All images must have the same size. Recommended image width: approximately 3840 / number of items.",
          },
        },
      ],
    },
    {
      name: "spacing",
      type: "radio",
      options: ["small", "medium", "regular", "large", "xl", "xxl"],
      required: true,
      defaultValue: "regular",
    },
    bottomMargin,
  ],
};

export default EqualHeightImagesBlock;
