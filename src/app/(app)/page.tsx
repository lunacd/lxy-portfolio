import HomeClient from "./page.client";
import { Metadata } from "next";
import React from "react";

import ConnectPrompt from "@/components/ConnectPrompt";

export const metadata: Metadata = {
  title: "Shirley Lyu Portfolio",
};

export default function Home() {
  return (
    <div className="relative h-full flex-grow overflow-hidden">
      <HomeClient>
        <ConnectPrompt />
      </HomeClient>
    </div>
  );
}
