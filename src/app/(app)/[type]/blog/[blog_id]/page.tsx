import config from "@payload-config";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import "server-only";
import Blocks from "src/blocks/Blocks";
import TitleBlock from "src/blocks/TitleBlock";

import { RefreshRouteOnSave } from "@/components/RefreshRouteOnSave";
import Scroller from "@/components/Scroller";
import { PortfolioType, stringIsType } from "@/utils/CommonTypes";
import { payloadBlogSlug } from "@/utils/payloadHelpers";
import { getSpacing } from "@/utils/spacingUtil";

interface ParamType {
  type: PortfolioType;
  blog_id: number;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ParamType>;
}) {
  const { type, blog_id } = await params;
  if (!stringIsType(type)) {
    throw new Error(`Invalid type: ${type}`);
  }
  const payload = await getPayload({
    config,
  });
  const blog = await payload.findByID({
    collection: payloadBlogSlug(type),
    id: blog_id,
  });
  return {
    title: `${blog.title} | Shirley Lyu`,
  };
}

export default async function Blog({ params }: { params: Promise<ParamType> }) {
  const payload = await getPayload({
    config,
  });
  const { blog_id, type } = await params;
  if (!stringIsType(type)) {
    throw new Error(`Invalid type: ${type}`);
  }
  const blog = await payload.findByID({
    collection: payloadBlogSlug(type),
    id: blog_id,
    disableErrors: true,
  });
  if (!blog) {
    notFound();
  }
  return (
    <>
      <Scroller bgColor="#FDF9F1">
        <div className="mt-spacing-lg w-single-small">
          <TitleBlock
            text={blog.title}
            blockType="title"
            titleType="title"
            textColor="dark"
            bottomMargin="none"
          />
          <div
            className="paragraph"
            style={{ marginBottom: getSpacing("medium") }}
          >
            {new Date(blog.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <Blocks payload={payload} blocks={blog.blocks} />
        </div>
      </Scroller>
      <RefreshRouteOnSave />
    </>
  );
}
