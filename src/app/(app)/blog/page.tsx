import config from "@payload-config";
import { getPayload } from "payload";
import "server-only";

import Scroller from "@/components/Scroller";
import SmallgallerBlock from "@/sections/SmallGalleryBlock";
import TitleBlock from "@/sections/TitleBlock";

export default async function Blogs() {
  const payload = await getPayload({
    config,
  });
  const blogs = (
    await payload.find({
      collection: "blogs",
      sort: "date",
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
          bottomMargin={true}
          blockType="title"
        />
        {blogs.length === 0 && (
          <TitleBlock
            text="Nothing yet! Come back for more!"
            type="subtitle"
            textColor="dark"
            bottomMargin={true}
            blockType="title"
          />
        )}
        <SmallgallerBlock
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
                        {
                          type: "text",
                          text: ` - ${new Date(blog.date).toLocaleDateString()}`,
                        },
                      ],
                    },
                  ],
                },
              },
              link: `/blog/${blog.id}`,
            };
          })}
          bottomMargin={true}
          payload={payload}
          blockType="smallGallery"
        />
      </div>
    </Scroller>
  );
}
