import SoulClient from "./page.client";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";

export const metadata: Metadata = {
  title: "Soul | Shirley Lyu",
};

export default function Soul() {
  return (
    <SoulClient>
      <ProjectNavigation prev="/lamboozled" next="/overlap" />
    </SoulClient>
  );
}
