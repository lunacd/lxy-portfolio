import OverlapClient from "./page.client";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";

export const metadata: Metadata = {
  title: "Overlap | Shirley Lyu",
};

export default function Overlap() {
  return (
    <OverlapClient>
      <ProjectNavigation prev="/soul" next="/again-from-scratch" />
    </OverlapClient>
  );
}
