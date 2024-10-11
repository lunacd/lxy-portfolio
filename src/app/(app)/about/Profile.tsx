import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import Image from "next/image";
import "server-only";

import { getMedia } from "@/utils/payloadHelpers";

export default async function Profile() {
  const payload = await getPayloadHMR({
    config,
  });
  const data = await payload.findGlobal({
    slug: "global",
    depth: 1,
  });
  const profilePicture = await getMedia(data.profilePicture, payload);
  return (
    <div className="single my-spacing-lg grid grid-cols-1 gap-spacing lg:grid-cols-3">
      <div className="about_rounded">
        <Image
          src={profilePicture.url!}
          width={profilePicture.width!}
          height={profilePicture.height!}
          alt={profilePicture.alt}
        />
      </div>
      <div className="lg:col-span-2 lg:self-end">{data.profile}</div>
    </div>
  );
}
