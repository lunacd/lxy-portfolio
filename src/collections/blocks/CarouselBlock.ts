import { bottomMargin, canZoomField, colorField } from "../CommonFields";
import { Block } from "payload";

const CarouselBlock: Block = {
  slug: "carousel",
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
              "All images must have the same size. Recommended image width: approximately 3840px.",
          },
        },
      ],
    },
    canZoomField,
    colorField(),
    bottomMargin,
  ],
};

export default CarouselBlock;
