import { bottomMargin as bottomMarginField, colorField } from "../CommonFields";
import { editor } from "../LexicalEditor";
import { Block } from "payload";

export default function InteractiveImageBlock(collectionName: string): Block {
  return {
    slug: "interactiveImage",
    dbName: `${collectionName}_ii`, // This is to accommondate the 63 character limit for postgresql table names
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
      {
        name: "imageSize",
        type: "number",
        required: true,
        defaultValue: 100,
        admin: {
          description:
            "Approximate percentage of screen this image will take. For example, if three images are shown side-by-side, then enter 33.",
        },
      },
      {
        name: "backgroundColor",
        type: "text",
        required: true,
        defaultValue: "#000",
      },
      colorField(),
      {
        name: "interactiveBlocks",
        type: "array",
        required: true,
        fields: [
          {
            name: "left",
            type: "number",
            required: true,
            admin: {
              description: "Percentage of image width.",
            },
          },
          {
            name: "top",
            type: "number",
            required: true,
            admin: {
              description: "Percentage of image height.",
            },
          },
          {
            name: "textPosition",
            type: "radio",
            options: ["left", "right", "top", "bottom"],
            required: true,
          },
          {
            name: "maxTextWidth",
            type: "number",
            required: true,
            admin: {
              description: "Percentage of image width.",
            },
          },
          {
            name: "text",
            type: "richText",
            editor: editor,
            required: true,
          },
        ],
      },
      bottomMarginField,
    ],
  };
}
