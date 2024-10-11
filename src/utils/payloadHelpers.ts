import { Media } from "@payload-types";
import { BasePayload } from "payload";
import "server-only";

export async function getMedia(
  rawMedia: number | Media,
  payload: BasePayload,
): Promise<Media> {
  if (typeof rawMedia === "number") {
    return await payload.findByID({ collection: "media", id: rawMedia });
  }
  return rawMedia;
}
