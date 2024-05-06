import AboutClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Shirley Lyu Portfolio",
};

export default function About() {
  return (
    <>
      <AboutClient />
    </>
  );
}
