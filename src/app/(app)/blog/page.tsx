import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import Link from "next/link";
import "server-only";

import Scroller from "@/components/Scroller";
import TitleBlock from "@/sections/TitleBlock";

export default async function Blogs() {
  const payload = await getPayloadHMR({
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
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id}>
            <div key={blog.id}>
              <TitleBlock
                text={blog.title}
                type="title"
                textColor="dark"
                bottomMargin={false}
                blockType="title"
              />
              <TitleBlock
                text={new Date(blog.date).toLocaleDateString()}
                type="subtitle"
                textColor="dark"
                bottomMargin={true}
                blockType="title"
              />
            </div>
          </Link>
        ))}
      </div>
    </Scroller>
  );
}