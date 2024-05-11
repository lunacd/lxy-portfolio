import { Metadata } from "next";
import SunriseClient from "./page.client";

export const metadata: Metadata = {
  title: "Sunrise | Shirley Lyu"
}

export default function Sunrise() {
  return <SunriseClient />;
}
