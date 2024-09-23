import MTronClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "M-Tron | Shirley Lyu",
};

export default function MTron() {
  return <MTronClient />;
}
