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
import { stringIsType } from "@/utils/CommonTypes";
import { payloadBlogSlug, payloadProjectSlug } from "@/utils/payloadHelpers";
import { getSpacing } from "@/utils/spacingUtil";

export const metadata: Metadata = {
  title: "Shirley Lyu Portfolio",
};

interface ParamType {
  type: string;
}

export async function generateStaticParams() {
  return [
    { type: "product-designer" },
    { type: "instructional-designer" },
    { type: "industrial-designer" },
  ];
}

export default async function Landing({
  params,
}: {
  params: Promise<ParamType>;
}) {
  const { type } = await params;
  if (!stringIsType(type)) {
    throw new Error(`Unknown project type: ${type}`);
  }
  const payload = await getPayload({
    config,
  });
  const promises = await Promise.all([
    payload.find({
      collection: payloadProjectSlug(type),
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
      collection: payloadBlogSlug(type),
      sort: "-date",
      pagination: false,
    }),
  ]);
  const projects = promises[0].docs;
  const globalData = promises[1];
  const blogs = promises[2].docs.filter((blog) => blog.enabled);

  return (
    <Scroller bgColor="#FDF9F1" restoreId="home-scroller">
      {/* About Me */}
      <InViewDetector detectorKey="about" height="short" id="about">
        <HomeIntro
          type={type}
          profilePicture={globalData.profilePicture}
          payload={payload}
        />
      </InViewDetector>

      {/* Projects */}
      <div id="projects"></div>
      {projects.map((project) => (
        <div key={project.uri} className="w-full">
          <InViewDetector
            key={project.uri}
            detectorKey={project.uri}
            className="flex h-[90vh] w-full scroll-mt-8 flex-col"
            id={project.uri}
            height="short"
          >
            <HomeSection type={type} project={project} payload={payload} />
          </InViewDetector>
        </div>
      ))}
      <div style={{ marginBottom: getSpacing("xxl") }}></div>

      {/* Testimonials */}
      <InViewDetector
        detectorKey="testimonials"
        className="w-wingle scroll-mt-16"
        id="testimonials"
        height="short"
      >
        <Carousel textColor="dark" itemCount={globalData.testimonials.length}>
          {globalData.testimonials.map((testimonial, index) => (
            <div
              className="relative w-full shrink-0 pr-4 pb-4 pl-8"
              key={index}
            >
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
      </InViewDetector>

      {/* Blogs */}
      <InViewDetector
        detectorKey="blogs"
        className="w-wingle scroll-mt-8"
        id="blogs"
        height="tall"
      >
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
                      children: [{ type: "text", text: blog.title, format: 1 }],
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
                  : `/${type}/blog/${blog.id}`,
            };
          })}
          payload={payload}
          blockType="smallGallery"
          bottomMargin="xxl"
        />
      </InViewDetector>

      <ConnectPrompt payload={payload} />
    </Scroller>
  );
}
