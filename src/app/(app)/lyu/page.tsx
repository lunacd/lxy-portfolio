import LyuClient from "./page.client";
import { Metadata } from "next";

import ConnectPrompt from "@/components/ConnectPrompt";

export const metadata: Metadata = {
  title: "Lyu | Shirley Lyu",
};

export default function Lyu() {
  return (
    <LyuClient>
      <ConnectPrompt />
    </LyuClient>
  );
}
