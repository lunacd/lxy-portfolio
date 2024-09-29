import LamboozledClient from "./page.client";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";

export const metadata: Metadata = {
  title: "Lamboozled | Shirley Lyu",
};

export default function Lamboozled() {
  return (
    <LamboozledClient>
      <ProjectNavigation prev="/tura" next="/again-from-scratch" />
    </LamboozledClient>
  );
}
