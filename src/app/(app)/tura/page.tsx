import TuraClient from "./page.client";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";

export const metadata: Metadata = {
  title: "Tura | Shirley Lyu",
};

export default function Sunrise() {
  return (
    <TuraClient>
      <ProjectNavigation prev="/overlap" next="/soul" />
    </TuraClient>
  );
}
