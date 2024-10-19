import {
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  AlignFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { Block } from "payload";

const TextBlock: Block = {
  slug: "text",
  fields: [
    {
      name: "text",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: [
          FixedToolbarFeature(),
          BoldFeature(),
          HeadingFeature({
            enabledHeadingSizes: ["h1", "h2"],
          }),
          AlignFeature(),
        ],
      }),
    },
  ],
};

export default TextBlock;
