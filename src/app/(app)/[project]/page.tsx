import config from "@payload-config";
import { Project, ProjectPage } from "@payload-types";
import { getPayload } from "payload";

import Blocks from "@/blocks/Blocks";
import AnimationCoordinator from "@/components/AnimationCoordinator";
import RelatedWork from "@/components/RelatedWork";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/components/TopDisplay";

export async function generateStaticParams() {
  const payload = await getPayload({
    config,
  });
  const projects = (
    await payload.find({
      collection: "projects",
      depth: 1,
      select: {
        uri: true,
      },
    })
  ).docs;

  return projects.map((project) => ({
    project: project.uri,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  const payload = await getPayload({
    config,
  });
  const projectData = (
    await payload.find({
      collection: "projects",
      depth: 1,
      select: {
        name: true,
      },
      where: {
        uri: {
          equals: project,
        },
      },
    })
  ).docs[0];
  return {
    title: `${projectData.name} | Shirley Lyu`,
  };
}

export default async function ProjectPageComponent({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  const payload = await getPayload({
    config,
  });
  const projectData = (
    await payload.find({
      collection: "projects",
      depth: 2,
      where: {
        uri: {
          equals: project,
        },
      },
    })
  ).docs[0];
  const pageData = (
    await payload.find({
      collection: "projectPages",
      depth: 1,
      where: {
        projectName: {
          equals: projectData.name,
        },
      },
    })
  ).docs[0];

  return (
    <AnimationCoordinator frameDuration={2000}>
      <Scroller bgColor={projectData.backgroundColor}>
        <TopDisplay project={projectData} payload={payload} />
        <Blocks blocks={pageData.blocks} payload={payload} />
        <RelatedWork
          projects={projectData.relatedWorks.map(
            (relatedWork) => relatedWork.relatedWork,
          )}
          color={projectData.contentColor}
          payload={payload}
        />
      </Scroller>
    </AnimationCoordinator>
  );
}
