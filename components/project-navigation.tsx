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
          <i className="fa-solid fa-angle-left" />
          <Link href={props.prev} passHref>
            <a>Previous Project</a>
          </Link>
        </div>
      )}
      {props.next !== undefined && (
        <div className="ml-auto flex flex-row items-center space-x-4">
          <Link href={props.next} passHref>
            <a>Next Project</a>
          </Link>
          <i className="fa-solid fa-angle-right" />
        </div>
      )}
    </div>
  );
};

export default ProjectNavigation;
