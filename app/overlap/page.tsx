import OverlapClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overlap | Shirley Lyu",
};

export default function Overlap() {
  return <OverlapClient />;
}
