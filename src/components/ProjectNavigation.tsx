import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import React from "react";

import ConnectPrompt from "@/components/ConnectPrompt";
import { useGlobalStateContext } from "@/utils/GlobalStateContext";

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
  const { dispatch } = useGlobalStateContext();
  return (
    <>
      <div className={`single flex flex-row font-semibold ${props.textColor}`}>
        {props.prev && (
          <div className="mr-auto flex flex-row items-center space-x-4">
            <IconChevronLeft size={24} />
            <a
              onClick={() => {
                dispatch({ type: "changeRoute", newRoute: props.prev! });
              }}
              className="cursor-pointer"
            >
              Previous Project
            </a>
          </div>
        )}
        {props.next && (
          <div className="ml-auto flex flex-row items-center space-x-4">
            <a
              onClick={() => {
                dispatch({ type: "changeRoute", newRoute: props.next! });
              }}
              className="cursor-pointer"
            >
              Next Project
            </a>
            <IconChevronRight size={24} />
          </div>
        )}
      </div>
      <ConnectPrompt textColor={props.textColor} />
    </>
  );
};

export default ProjectNavigation;
