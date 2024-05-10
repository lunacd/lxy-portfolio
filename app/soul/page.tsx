import SoulClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soul | Shirley Lyu",
};

export default function Soul() {
  return <SoulClient />;
}
