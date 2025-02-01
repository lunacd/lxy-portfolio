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
          name: "images",
          type: "array",
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
          required: true,
          admin: {
            description:
              "Images could have different aspect ratios, but they should generally be the same height. " +
              "Their width should approximately add up to 3840px. " +
              "Images in a list should have the same size. They will be shown in a slideshow.",
          },
        },
        {
          name: "imageSize",
          type: "number",
          required: true,
          defaultValue: 50,
          admin: {
            description:
              "Approximate percentage of screen this image will take. For example, if three images are shown side-by-side, then enter 33.",
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
