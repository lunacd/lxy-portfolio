import HomeIntro from "./HomeIntro";
import HomeProjects from "./HomeProjects";
import HomeSection from "./HomeSection";
import InViewDetector from "./InViewDetector";
import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";
import React, { Suspense } from "react";

import SmallGalleryBlock from "@/blocks/SmallGalleryBlock";
import TitleBlock from "@/blocks/TitleBlock";
import ConnectPrompt from "@/components/ConnectPrompt";
import Scroller from "@/components/Scroller";

export const metadata: Metadata = {
  title: "Shirley Lyu Portfolio",
};

export default async function Landing() {
  const payload = await getPayload({
    config,
  });
  const promises = await Promise.all([
    payload.find({
      collection: "projects",
      pagination: false,
      where: {
        isMainProject: {
          equals: true,
        },
      },
      sort: "order",
    }),
    payload.findGlobal({
      slug: "global",
    }),
    payload.find({
      collection: "blogs",
      sort: "-date",
      pagination: false,
    }),
  ]);
  const projects = promises[0].docs;
  const globalData = promises[1];
  const blogs = promises[2].docs;

  const homeSections = projects.map((project) => (
    <InViewDetector
      key={project.uri}
      detectorKey={project.uri}
      className="flex h-[90vh] w-full scroll-mt-40 flex-col"
      id={project.uri}
    >
      <HomeSection project={project} payload={payload} />
    </InViewDetector>
  ));
  return (
    <Scroller bgColor="#FDF9F1">
      <HomeIntro profilePicture={globalData.profilePicture} payload={payload} />
      <Suspense>
        <HomeProjects projects={projects} homeSections={homeSections} />
      </Suspense>

      <div className="mt-spacing-3lg w-single">
        <TitleBlock
          text="Blogs"
          titleType="title"
          textColor="dark"
          bottomMargin="large"
          blockType="title"
        />
        {blogs.length === 0 && (
          <TitleBlock
            text="Nothing yet! Come back for more!"
            titleType="subtitle"
            textColor="dark"
            blockType="title"
            bottomMargin="xxl"
          />
        )}
        <SmallGalleryBlock
          textColor="dark"
          items={blogs.map((blog) => {
            return {
              image: blog.coverImage,
              text: {
                root: {
                  direction: "ltr",
                  type: "root",
                  version: 0,
                  format: "",
                  indent: 0,
                  children: [
                    {
                      type: "paragraph",
                      version: 0,
                      children: [
                        { type: "text", text: blog.title, format: "bold" },
                      ],
                    },
                    {
                      type: "paragraph",
                      version: 0,
                      children: [
                        {
                          type: "text",
                          text: new Date(blog.date).toLocaleDateString(
                            undefined,
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          ),
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      version: 0,
                      children: [
                        {
                          type: "text",
                          text: blog.tags.map((tag) => tag.value).join(" | "),
                        },
                      ],
                    },
                  ],
                },
              },
              link:
                blog.externalLink && blog.externalLink.length !== 0
                  ? blog.externalLink
                  : `/blog/${blog.id}`,
            };
          })}
          payload={payload}
          blockType="smallGallery"
          bottomMargin="xxl"
        />
      </div>
      <ConnectPrompt payload={payload} />
    </Scroller>
  );
}
