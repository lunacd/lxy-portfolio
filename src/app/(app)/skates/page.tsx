import SoulClient from "./page.client";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";

export const metadata: Metadata = {
  title: "Skates | Shirley Lyu",
};

export default function Skates() {
  return (
    <SoulClient>
      <ProjectNavigation next="/tura" />
    </SoulClient>
  );
}
