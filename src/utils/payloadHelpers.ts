import { Document, Media, Project } from "@payload-types";
import { Payload, Where } from "payload";
import React from "react";
import "server-only";

interface NonOptionalMedia {
  url: string;
  alt: string;
  width: number;
  height: number;
}

function bangMediaFields(media: Media): NonOptionalMedia {
  return {
    url: media.url!,
    alt: media.alt!,
    width: media.width!,
    height: media.height!,
  };
}

export async function getMedia(
  rawMedia: number | Media,
  payload: Payload,
): Promise<NonOptionalMedia> {
  if (typeof rawMedia === "number") {
    const media = await payload.findByID({ collection: "media", id: rawMedia });
    return bangMediaFields(media);
  }
  return bangMediaFields(rawMedia);
}

export async function getProject(
  rawProject: number | Project,
  payload: Payload,
) {
  if (typeof rawProject === "number") {
    return await payload.findByID({ collection: "projects", id: rawProject });
  }
  return rawProject;
}

export async function getDocument(
  rawDocument: Document | number,
  payload: Payload,
): Promise<Document> {
  if (typeof rawDocument === "number") {
    return await payload.findByID({
      collection: "document",
      id: rawDocument,
    });
  }
  return rawDocument;
}

export function unwrapImages(image: { image: Media | number }) {
  return image.image;
}

export function getProjectLink(
  uri: string,
  externalLink: string | undefined | null,
): string {
  if (externalLink && externalLink.length > 0) {
    return externalLink;
  }
  return `/${uri}`;
}

export const getProjectsWithFocus = React.cache(
  async (focusId: string, payload: Payload) => {
    const query: Where = {
      "focuses.focusId": {
        equals: focusId,
      },
    };
    return (
      await payload.find({
        collection: "projects",
        pagination: false,
        where: query,
        sort: "subsetOrder",
      })
    ).docs;
  },
);

export function inferFocusName(projects: Project[], focusId: string) {
  let focusName = undefined;
  if (projects.length > 0) {
    focusName = projects[0].focuses!.find(
      (focus) => focus.focusId === focusId,
    )?.focus;
  }
  return focusName;
}

export async function getMainProjects(payload: Payload) {
  return (
    await payload.find({
      collection: "projects",
      where: {
        isMainProject: { equals: true },
      },
      sort: "order",
    })
  ).docs;
}
