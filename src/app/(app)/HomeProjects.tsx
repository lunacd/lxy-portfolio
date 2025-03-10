"use client";

import { Project } from "@payload-types";
import { AnimatePresence, motion } from "motion/react";
import { JSX, MouseEventHandler, useEffect, useState } from "react";

import { useGlobalStateContext } from "@/utils/GlobalStateContext";

interface ProjectChoiceProps {
  name: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

function ProjectChoice(props: ProjectChoiceProps) {
  return (
    <div className="cursor-pointer" onClick={props.onClick}>
      {props.name}
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
      <div className="sticky top-0 z-10 flex w-full flex-row justify-center bg-[#FDF9F1]">
        <div className="w-single flex flex-row gap-4">
          <ProjectChoice name="All" onClick={() => setSelected("all")} />
          <ProjectChoice
            name="Product Design"
            onClick={() => setSelected("product-design")}
          />
          <ProjectChoice
            name="User Experience Design"
            onClick={() => setSelected("user-experience-design")}
          />
          <ProjectChoice name="EdTech" onClick={() => setSelected("edtech")} />
        </div>
      </div>
      <AnimatePresence>
        {activeSections.map((value) => (
          <motion.div
            key={value.project.uri}
            layout
            className="w-full"
            exit={{ opacity: 0 }}
          >
            {value.section}
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
