import Profile from "./Profile";
import AboutClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Shirley Lyu",
};

export default function About() {
  return (
    <AboutClient>
      <Profile />
    </AboutClient>
  );
}
