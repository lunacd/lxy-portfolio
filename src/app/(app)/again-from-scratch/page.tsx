import AgainFromScratchClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Again From Scratch | Shirley Lyu",
};

export default function AgainFromScratch() {
  return <AgainFromScratchClient />;
}
