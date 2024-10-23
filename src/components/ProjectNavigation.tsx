import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import "server-only";

import ConnectPrompt from "@/components/ConnectPrompt";

interface ProjectNavigationProps {
  prev?: string;
  next?: string;
  textColor?: string;
}

const defaultProps = {
  textColor: "text-black",
};

const ProjectNavigation: React.FC<ProjectNavigationProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  return (
    <>
      <div className={`single flex flex-row font-semibold ${props.textColor}`}>
        {props.prev && (
          <div className="mr-auto flex flex-row items-center space-x-4">
            <IconChevronLeft size={24} />
            <Link href={props.prev!} className="cursor-pointer">
              Previous Project
            </Link>
          </div>
        )}
        {props.next && (
          <div className="ml-auto flex flex-row items-center space-x-4">
            <Link href={props.next!} className="cursor-pointer">
              Next Project
            </Link>
            <IconChevronRight size={24} />
          </div>
        )}
      </div>
      <ConnectPrompt textColor={props.textColor} />
    </>
  );
};

export default ProjectNavigation;
