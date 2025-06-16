import HomeIntro from "./HomeIntro";
import HomeSection from "./HomeSection";
import InViewDetector from "./InViewDetector";
import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";
import React from "react";

import SmallGalleryBlock from "@/blocks/SmallGalleryBlock";
import TitleBlock from "@/blocks/TitleBlock";
import Carousel from "@/components/Carousel";
import ConnectPrompt from "@/components/ConnectPrompt";
import Scroller from "@/components/Scroller";
import Testimonial from "@/components/Testimonial";
import { getSpacing } from "@/utils/spacingUtil";

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

  return (
    <Scroller bgColor="#FDF9F1" restoreId="home-scroller">
      {/* About Me */}
      <HomeIntro profilePicture={globalData.profilePicture} payload={payload} />

      {/* Projects */}
      {projects.map((project) => (
        <div key={project.uri} className="w-full">
          <InViewDetector
            key={project.uri}
            detectorKey={project.uri}
            className="flex h-[90vh] w-full scroll-mt-40 flex-col"
            id={project.uri}
          >
            <HomeSection project={project} payload={payload} />
          </InViewDetector>
        </div>
      ))}

      {/* Testimonials */}
      <div
        id="testimonials"
        style={{ marginTop: getSpacing("xxl") }}
        className="w-single"
      ></div>
      <Carousel textColor="dark" itemCount={globalData.testimonials.length}>
        {globalData.testimonials.map((testimonial, index) => (
          <div className="relative w-full shrink-0 pr-4 pb-4 pl-8" key={index}>
            <Testimonial
              testimonial={testimonial.content}
              author={testimonial.author}
              avatar={testimonial.avatar}
              payload={payload}
              color={testimonial.color}
            ></Testimonial>
          </div>
        ))}
      </Carousel>

      {/* Blogs */}
      <div className="w-single" id="blogs">
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
