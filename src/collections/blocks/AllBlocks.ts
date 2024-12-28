import ColumnBlock from "./ColumnBlock";
import { nonNestingBlocks } from "./NonNestingBlocks";
import RowBlock from "./RowBlock";

export const blocks = (depth: number) =>
  nonNestingBlocks.concat([RowBlock(depth), ColumnBlock(depth)]);
