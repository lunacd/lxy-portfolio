import { bottomMargin } from "../CommonFields";
import { Block } from "payload";

const LargeGalleryBlock: Block = {
  slug: "largeGallery",
  fields: [
    {
      name: "rows",
      type: "array",
      required: true,
      fields: [
        {
          name: "images",
          type: "array",
          required: true,
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
        {
          name: "type",
          type: "radio",
          options: ["equalWidth", "equalHeight"],
          required: true,
          defaultValue: "equalWidth",
          admin: {
            description:
              "When using Equal Width, images should have a width of 3840px / number of images. When using Equal Height, image widths should approximately add up to 3840px.",
          },
        },
      ],
    },
    bottomMargin,
  ],
};

export default LargeGalleryBlock;
