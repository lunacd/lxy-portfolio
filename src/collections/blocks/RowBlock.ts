import { bottomMargin, bottomMarginNew } from "../CommonFields";
import ColumnBlock from "./ColumnBlock";
import { nonNestingBlocks } from "./NonNestingBlocks";
import { Block } from "payload";

export default function RowBlock(depth: number): Block {
  const nested =
    depth == 0 ? [] : [ColumnBlock(depth - 1), RowBlock(depth - 1)];
  return {
    slug: "row",
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
      bottomMargin,
      bottomMarginNew,
    ],
  };
}
