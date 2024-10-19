import {
  AlignFeature,
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  OrderedListFeature,
  ParagraphFeature,
  UnorderedListFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

export const editor = lexicalEditor({
  features: [
    FixedToolbarFeature(),
    BoldFeature(),
    HeadingFeature({
      enabledHeadingSizes: ["h1", "h2"],
    }),
    AlignFeature(),
    UnorderedListFeature(),
    OrderedListFeature(),
    ParagraphFeature(),
  ],
});
