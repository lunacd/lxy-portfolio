import {
  AlignFeature,
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  LinkFeature,
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
      enabledHeadingSizes: ["h1", "h2", "h3"],
    }),
    AlignFeature(),
    UnorderedListFeature(),
    OrderedListFeature(),
    ParagraphFeature(),
    LinkFeature(),
  ],
});
