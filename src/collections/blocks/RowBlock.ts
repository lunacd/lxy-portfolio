import { alignmentField, bottomMargin } from "../CommonFields";
import ColumnBlock from "./ColumnBlock";
import { nonNestingBlocks } from "./NonNestingBlocks";
import { Block } from "payload";

export default function RowBlock(collectionName: string, depth: number): Block {
  const nested =
    depth == 0
      ? []
      : [
          ColumnBlock(collectionName, depth - 1),
          RowBlock(collectionName, depth - 1),
        ];
  return {
    slug: "row",
    fields: [
      {
        name: "blocks",
        type: "blocks",
        required: true,
        blocks: nonNestingBlocks(collectionName).concat(nested),
      },
      {
        name: "spacing",
        type: "radio",
        options: ["none", "small", "medium", "regular", "large", "xl", "xxl"],
        required: true,
        defaultValue: "regular",
      },
      bottomMargin,
      alignmentField,
    ],
  };
}
