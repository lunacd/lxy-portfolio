import MTronClient from "./page.client";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";

export const metadata: Metadata = {
  title: "M-Tron | Shirley Lyu",
};

export default function MTron() {
  return (
    <MTronClient>
      <ProjectNavigation prev="/sunrise" textColor="text-white" />
    </MTronClient>
  );
}
