import { PortfolioType } from "./CommonTypes";
import {
  Document,
  EdtechProject,
  Media,
  ProductProject,
  UiuxProject,
} from "@payload-types";
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

export function payloadProjectSlug(
  type: PortfolioType,
): "uiuxProjects" | "productProjects" | "edtechProjects" {
  switch (type) {
    case "product-designer":
      return "uiuxProjects";
    case "industrial-designer":
      return "productProjects";
    case "instructional-designer":
      return "edtechProjects";
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
}

export function payloadBlogSlug(
  type: PortfolioType,
): "uiuxBlogs" | "productBlogs" | "edtechBlogs" {
  switch (type) {
    case "product-designer":
      return "uiuxBlogs";
    case "industrial-designer":
      return "productBlogs";
    case "instructional-designer":
      return "edtechBlogs";
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
}

export async function getProject(
  type: PortfolioType,
  rawProject: number | UiuxProject | ProductProject | EdtechProject,
  payload: Payload,
): Promise<UiuxProject | ProductProject | EdtechProject> {
  if (typeof rawProject === "number") {
    return await payload.findByID({
      collection: payloadProjectSlug(type),
      id: rawProject,
    });
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
  type: PortfolioType,
  uri: string,
  externalLink: string | undefined | null,
): string {
  if (externalLink && externalLink.length > 0) {
    return externalLink;
  }
  return `/${type}/${uri}`;
}
