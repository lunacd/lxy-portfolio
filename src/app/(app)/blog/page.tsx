import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";
import "server-only";
import SmallGalleryBlock from "src/blocks/SmallGalleryBlock";
import TitleBlock from "src/blocks/TitleBlock";

import Scroller from "@/components/Scroller";

export const metadata: Metadata = {
  title: "Blogs | Shirley Lyu",
};

export default async function Blogs() {
  const payload = await getPayload({
    config,
  });
  const blogs = (
    await payload.find({
      collection: "blogs",
      sort: "-date",
      pagination: false,
    })
  ).docs;
  return (
    <Scroller>
      <div className="mt-spacing-lg w-single">
        <TitleBlock
          text="Blogs"
          type="title"
          textColor="dark"
          bottomMargin="xxl"
          blockType="title"
        />
        {blogs.length === 0 && (
          <TitleBlock
            text="Nothing yet! Come back for more!"
            type="subtitle"
            textColor="dark"
            blockType="title"
            bottomMargin="xxl"
          />
        )}
        <SmallGalleryBlock
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
    </Scroller>
  );
}
