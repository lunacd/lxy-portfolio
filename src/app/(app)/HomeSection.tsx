import { Project } from "@payload-types";
import { Payload } from "payload";
import React from "react";
import "server-only";

import Button from "@/components/Button";
import FloatUpMotion from "@/components/FloatUpMotion";
import PayloadImage from "@/components/PayloadImage";
import { getProjectLink } from "@/utils/payloadHelpers";

interface HomeSectionProps {
  project: Project;
  payload: Payload;
}

export default async function HomeSection(props: HomeSectionProps) {
  const titleColor =
    props.project.textColor === "light" ? "text-gray-100" : "text-gray-950";
  return (
    <>
      {/* Project image */}
      <div className="relative min-h-0 w-full shrink grow overflow-hidden">
        <PayloadImage
          media={props.project.projectImage}
          payload={props.payload}
          fill
          className="hidden object-cover object-center md:block"
          sizes="100vw"
        />
        <div className="absolute top-0 left-0 h-full w-full">
          <FloatUpMotion className="flex h-full flex-col">
            {/* Project name */}
            <div
              className={`mx-spacing-lg my-spacing-lg relative grow self-stretch ${titleColor}`}
            >
              <div className="relative">
                {/* Optional cover color for background */}
                {props.project.imageOverlayType !== "none" && (
                  <div
                    style={{
                      height: "calc(170% + 48px)",
                      background:
                        props.project.imageOverlayType === "light"
                          ? "linear-gradient(180deg, white 0%, transparent 100%)"
                          : "linear-gradient(180deg, rgba(0, 0, 0, 80%) 0%, transparent 100%)",
                    }}
                    className="-left-spacing-lg -right-spacing-lg absolute -top-8 lg:-top-12 xl:-top-24"
                  ></div>
                )}
                <div className="relative flex h-full flex-col items-start gap-5 lg:max-w-[50%] 2xl:max-w-[30%]">
                  <div className="title">{props.project.name}</div>
                  <div className="paragraph">{props.project.brief}</div>

                  <div>
                    <span className="font-bold">Flavor: </span>
                    {props.project.flavor}
                  </div>

                  <div className="flex flex-row flex-wrap gap-2">
                    {props.project.focuses &&
                      props.project.focuses.map((focus, index) => {
                        return (
                          <div key={index} className="leading-4 italic">
                            #{focus.focus.replace(/ /g, "")}
                          </div>
                        );
                      })}
                  </div>

                  <Button
                    href={getProjectLink(
                      props.project.uri,
                      props.project.externalLink,
                    )}
                    className="mt-5"
                    color={props.project.textColor}
                  >
                    View Project
                  </Button>
                </div>
              </div>

              {/* Award image */}
              {props.project.awardImage && (
                <PayloadImage
                  media={props.project.awardImage}
                  payload={props.payload}
                  className="absolute bottom-8 w-40"
                  sizes="20vw"
                />
              )}
            </div>
          </FloatUpMotion>
        </div>
      </div>
    </>
  );
}
