import config from "@payload-config";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import "server-only";

import Scroller from "@/components/Scroller";
import Blocks from "@/sections/Blocks";
import TitleBlock from "@/sections/TitleBlock";

export default async function Blog({
  params,
}: {
  params: Promise<{ blog_id: string }>;
}) {
  const payload = await getPayload({
    config,
  });
  const blog_id = (await params).blog_id;
  const blog = await payload.findByID({
    collection: "blogs",
    id: blog_id,
    disableErrors: true,
  });
  if (!blog) {
    notFound();
  }
  return (
    <Scroller>
      <div className="mt-spacing-lg w-single">
        <TitleBlock
          text={blog.title}
          blockType="title"
          type="title"
          textColor="dark"
          bottomMargin={false}
        />
        <TitleBlock
          text={new Date(blog.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          type="subtitle"
          textColor="dark"
          bottomMargin={true}
          blockType="title"
        />
        <Blocks payload={payload} blocks={blog.blocks} />
      </div>
    </Scroller>
  );
}
