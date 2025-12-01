import "server-only";

import SidebarInteractive from "@/components/SidebarInteractive";
import { PortfolioType } from "@/utils/CommonTypes";

interface SidebarProps {
  type: PortfolioType;
  projectRoutes: {
    name: string;
    uri: string;
  }[];
}

export default async function Sidebar(props: SidebarProps) {
  return (
    <SidebarInteractive type={props.type} projectRoutes={props.projectRoutes} />
  );
}
