import RefugiaClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refugia | Shirley Lyu",
};

export default function Refugia() {
  return <RefugiaClient />;
}
