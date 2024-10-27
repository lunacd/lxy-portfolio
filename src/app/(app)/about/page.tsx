import Profile from "./Profile";
import AboutClient from "./page.client";
import { Metadata } from "next";

import PageScaffold from "@/components/PageScaffold";

export const metadata: Metadata = {
  title: "About | Shirley Lyu",
};

export default function About() {
  return (
    <>
      <PageScaffold>
        <AboutClient>
          <Profile />
        </AboutClient>
      </PageScaffold>
    </>
  );
}
