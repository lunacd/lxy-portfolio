import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { redirect } from "next/navigation";

import { getDocument } from "@/utils/payloadHelpers";

const validDocuments = ["resume"] as const;
type ValidDocument = (typeof validDocuments)[number];

function checkDocumentValidity(document: string): ValidDocument {
  if ((validDocuments as readonly string[]).includes(document)) {
    return document as ValidDocument;
  }
  throw new Error(`Requested document ${document} not found`);
}

export default async function DocumentRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const payload = await getPayloadHMR({
    config,
  });
  const data = await payload.findGlobal({
    slug: "global",
    depth: 1,
  });
  const documentName = checkDocumentValidity((await params).slug);
  const document = await getDocument(data[documentName], payload);
  redirect(document.url!);
}
