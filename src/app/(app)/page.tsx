import HomeClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shirley Lyu Portfolio",
};

export default function Home() {
  return (
    <div className="relative h-full flex-grow overflow-hidden">
      <HomeClient />
    </div>
  );
}
