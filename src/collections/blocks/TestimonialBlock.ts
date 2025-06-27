import { bottomMargin, colorField } from "../CommonFields";
import { editor } from "../LexicalEditor";
import { Block } from "payload";

const TestimonialBlock: Block = {
  slug: "testimonial",
  fields: [
    {
      name: "content",
      type: "richText",
      editor: editor,
      required: true,
    },
    {
      name: "author",
      type: "richText",
      editor: editor,
      required: true,
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "1024x1217px",
      },
    },
    {
      name: "color",
      type: "text",
      required: true,
    },
    bottomMargin,
  ],
};

export default TestimonialBlock;
