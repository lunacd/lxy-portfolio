import { bottomMargin } from "../CommonFields";
import ColumnBlock from "./ColumnBlock";
import ImageBlock from "./ImageBlock";
import TextBlock from "./TextBlock";
import TitleBlock from "./TitleBlock";
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
        blocks: [TextBlock, TitleBlock, ImageBlock].concat(nested),
      },
      {
        name: "spacing",
        type: "radio",
        options: ["small", "medium", "regular", "large", "xl", "xxl"],
        required: true,
        defaultValue: "regular",
      },
      bottomMargin,
    ],
  };
}
