import SunriseClient from "./page.client";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";

export const metadata: Metadata = {
  title: "Sunrise | Shirley Lyu",
};

export default function Sunrise() {
  return (
    <SunriseClient>
      <ProjectNavigation prev="/again-from-scratch" next="/m-tron" />
    </SunriseClient>
  );
}
