import AgainFromScratchClient from "./page.client";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";

export const metadata: Metadata = {
  title: "Again From Scratch | Shirley Lyu",
};

export default function AgainFromScratch() {
  return (
    <AgainFromScratchClient>
      <ProjectNavigation prev="/overlap" next="/sunrise" />
    </AgainFromScratchClient>
  );
}
