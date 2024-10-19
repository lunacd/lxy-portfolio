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
