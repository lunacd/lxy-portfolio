import config from "@payload-config";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import "server-only";
import Blocks from "src/blocks/Blocks";
import TitleBlock from "src/blocks/TitleBlock";

import { RefreshRouteOnSave } from "@/components/RefreshRouteOnSave";
import Scroller from "@/components/Scroller";
import Spacing from "@/components/Spacing";

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
    <>
      <Scroller>
        <div className="mt-spacing-lg w-single-small">
          <TitleBlock
            text={blog.title}
            blockType="title"
            type="title"
            textColor="dark"
            bottomMargin={false}
          />
          <div className="paragraph">
            {new Date(blog.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <Spacing size="medium" />
          <Blocks payload={payload} blocks={blog.blocks} />
        </div>
      </Scroller>
      <RefreshRouteOnSave />
    </>
  );
}
