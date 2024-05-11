import SoulClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skates | Shirley Lyu",
};

export default function Skates() {
  return <SoulClient />;
}
