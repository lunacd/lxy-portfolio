import { bottomMarginNew, justifyField } from "../CommonFields";
import { nonNestingBlocks } from "./NonNestingBlocks";
import RowBlock from "./RowBlock";
import { Block } from "payload";

export default function ColumnBlock(depth: number): Block {
  const nested =
    depth == 0 ? [] : [ColumnBlock(depth - 1), RowBlock(depth - 1)];
  return {
    slug: "column",
    fields: [
      {
        name: "blocks",
        type: "blocks",
        required: true,
        blocks: nonNestingBlocks.concat(nested),
      },
      {
        name: "spacing",
        type: "radio",
        options: ["small", "medium", "regular", "large", "xl", "xxl"],
        required: true,
        defaultValue: "regular",
      },
      justifyField,
      bottomMarginNew,
    ],
  };
}
