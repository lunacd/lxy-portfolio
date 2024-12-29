import { Field } from "payload";

export const bottomMargin: Field = {
  name: "bottomMargin",
  type: "checkbox",
  required: true,
  defaultValue: true,
  admin: {
    description: "Check this to include a margin at the bottom",
  },
};

export const bottomMarginNew: Field = {
  name: "bottomMarginNew",
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
