import { projects } from "../utils/project-data";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

import { StateDispatchContext } from "./stateProvider";

export function useNavigate() {
  const router = useRouter();
  const pathname = usePathname()!;
  const dispatcher = useContext(StateDispatchContext);

  function isProject(link: string) {
    if (!link.startsWith("/")) {
      return false;
    }
    const linkName = link.slice(1);
    for (const project of projects) {
      if (linkName.startsWith(project)) {
        return true;
      }
    }
    return false;
  }

  function navigate(link: string) {
    const currentPageIsProject = isProject(pathname);
    const targetPageIsProject = isProject(link);
    if ((pathname === "/" || currentPageIsProject) && targetPageIsProject) {
      dispatcher({ type: "disableSwipeAnimation" });
    } else {
      dispatcher({ type: "enableSwipeAnimation" });
    }
    router.push(link);
  }

  return navigate;
}
