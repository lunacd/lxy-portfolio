import { Media, Project } from "@payload-types";
import { Payload } from "payload";
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