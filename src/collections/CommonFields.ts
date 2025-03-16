import { Field } from "payload";

export const bottomMargin: Field = {
  name: "bottomMargin",
  type: "radio",
  required: true,
  defaultValue: "xxl",
  options: ["none", "small", "medium", "regular", "large", "xl", "xxl"],
};

export function colorField(fieldName: string = "textColor"): Field {
  return {
    name: fieldName,
    type: "radio",
    options: ["dark", "light"],
    defaultValue: "dark",
    required: true,
  };
}

export const justifyField: Field = {
  name: "justify",
  type: "radio",
  options: ["start", "center", "end"],
  defaultValue: "start",
  required: true,
};

export const alignmentField: Field = {
  name: "alignment",
  type: "radio",
  options: ["start", "center", "end"],
  defaultValue: "start",
  required: true,
};

export const imageSizeField: Field = {
  name: "imageSize",
  type: "number",
  required: true,
  defaultValue: 100,
  admin: {
    description:
      "Approximate percentage of screen this image will take. For example, if three images are shown side-by-side, then enter 33.",
  },
};
