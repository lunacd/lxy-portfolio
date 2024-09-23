import SunriseClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunrise | Shirley Lyu",
};

export default function Sunrise() {
  return <SunriseClient />;
}
