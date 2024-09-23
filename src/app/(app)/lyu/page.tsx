import LyuClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lyu | Shirley Lyu",
};

export default function Lyu() {
  return <LyuClient />;
}
