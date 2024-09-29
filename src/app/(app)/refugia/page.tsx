import RefugiaClient from "./page.client";
import { Metadata } from "next";

import ConnectPrompt from "@/components/ConnectPrompt";

export const metadata: Metadata = {
  title: "Refugia | Shirley Lyu",
};

export default function Refugia() {
  return (
    <RefugiaClient>
      <ConnectPrompt />
    </RefugiaClient>
  );
}
