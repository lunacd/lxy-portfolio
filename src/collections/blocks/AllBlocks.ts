import ColumnBlock from "./ColumnBlock";
import { nonNestingBlocks } from "./NonNestingBlocks";
import RowBlock from "./RowBlock";

export const blocks = (collectionName: string, depth: number) =>
  nonNestingBlocks(collectionName).concat([
    RowBlock(collectionName, depth),
    ColumnBlock(collectionName, depth),
  ]);
