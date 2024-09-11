import LamboozledClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lamboozled | Shirley Lyu",
};

export default function Lamboozled() {
  return <LamboozledClient />;
}
