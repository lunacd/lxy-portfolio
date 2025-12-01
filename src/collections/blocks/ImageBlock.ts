import { bottomMargin, canZoomField, imageSizeField } from "../CommonFields";
import { Block } from "payload";

const ImageBlock: Block = {
  slug: "image",
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "For a full-width image, recommended width is 3840px.",
      },
    },
    canZoomField,
    imageSizeField,
    bottomMargin,
  ],
  imageURL: "/payload/image.png",
};

export default ImageBlock;
