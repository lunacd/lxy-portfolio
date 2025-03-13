"use client";

import { Project } from "@payload-types";
import classNames from "classnames";
import { AnimatePresence, motion } from "motion/react";
import { JSX, MouseEventHandler, useEffect, useState } from "react";

import { useGlobalStateContext } from "@/utils/GlobalStateContext";

interface ProjectChoiceProps {
  name: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  selected: boolean;
}

function ProjectChoice(props: ProjectChoiceProps) {
  return (
    <div
      className={classNames("relative cursor-pointer p-4 text-lg", {
        // "border-b-2 border-black": props.selected,
      })}
      onClick={props.onClick}
    >
      {props.name}
      {props.selected && (
        <motion.div
          className="absolute right-0 bottom-0 left-0 h-[2px] bg-black"
          layoutId="selected-indicator"
          layout
        ></motion.div>
      )}
    </div>
  );
}

interface HomeProjectsProps {
  projects: Project[];
  homeSections: JSX.Element[];
}

const CategoryUriToName: { [key: string]: string } = {
  all: "All Projects",
  "product-design": "Product Design",
  "user-experience-design": "UI/UX",
  edtech: "EdTech",
};

export default function HomeProjects(props: HomeProjectsProps) {
  const [selected, setSelected] = useState("all");
  const [activeSections, setActiveSections] = useState<
    { section: JSX.Element; project: Project }[]
  >([]);
  const { dispatch } = useGlobalStateContext();

  useEffect(() => {
    const categoryName = CategoryUriToName[selected];
    const sections = props.homeSections
      .map((homeSection, i) => {
        return { section: homeSection, project: props.projects[i] };
      })
      .filter((value) => {
        if (!value.project.focuses) {
          return false;
        }
        if (selected === "all") {
          return true;
        }
        return (
          value.project.focuses.find((focus) => focus.focusId === selected) !==
          undefined
        );
      });
    setActiveSections(sections);
    dispatch({
      type: "setContent",
      title: categoryName,
      projectRoutes: sections.map((section) => {
        return {
          name: section.project.name,
          uri: section.project.uri,
        };
      }),
    });
  }, [selected, props]);
  return (
    <>
      <div className="sticky top-0 z-10 flex w-full flex-row justify-center bg-[#FDF9F1] shadow-lg">
        <div className="w-single mb-4 flex flex-row gap-4 border-b border-black">
          <ProjectChoice
            name="All"
            onClick={() => setSelected("all")}
            selected={selected === "all"}
          />
          <ProjectChoice
            name="Product Design"
            onClick={() => setSelected("product-design")}
            selected={selected === "product-design"}
          />
          <ProjectChoice
            name="User Experience Design"
            onClick={() => setSelected("user-experience-design")}
            selected={selected === "user-experience-design"}
          />
          <ProjectChoice
            name="EdTech"
            onClick={() => setSelected("edtech")}
            selected={selected === "edtech"}
          />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {activeSections.map((value) => (
          <motion.div
            key={`${selected}-${value.project.uri}`}
            className="w-full"
            exit={{ opacity: 0 }}
            initial={{ y: "5rem" }}
            animate={{ y: 0 }}
          >
            {value.section}
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
