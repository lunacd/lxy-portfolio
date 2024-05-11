import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

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
    <div className={`single flex flex-row font-semibold ${props.textColor}`}>
      {props.prev !== undefined && (
        <div className="mr-auto flex flex-row items-center space-x-4">
          <IconChevronLeft size={24} />
          <Link href={props.prev}>Previous Project</Link>
        </div>
      )}
      {props.next !== undefined && (
        <div className="ml-auto flex flex-row items-center space-x-4">
          <Link href={props.next}>Next Project</Link>
          <IconChevronRight size={24} />
        </div>
      )}
    </div>
  );
};

export default ProjectNavigation;
