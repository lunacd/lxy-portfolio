import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { redirect } from "next/navigation";

const validDocuments = ["resume"] as const;
type ValidDocument = (typeof validDocuments)[number];

function checkDocumentValidity(document: string): ValidDocument {
  if ((validDocuments as readonly string[]).includes(document)) {
    return document as ValidDocument;
  }
  throw new Error(`Requested document ${document} not found`);
}

async function getDocumentUrl(name: ValidDocument): Promise<string> {
  const payload = await getPayloadHMR({
    config,
  });
  const data = await payload.findGlobal({
    slug: "global",
    depth: 1,
  });
  if (typeof data[name] === "number") {
    const resume = await payload.findByID({
      collection: "document",
      id: data[name],
    });
    return resume.url!;
  } else {
    return data[name]!.url!;
  }
}

export default async function DocumentRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const document = checkDocumentValidity((await params).slug);
  redirect(await getDocumentUrl(document));
}
