import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";

import Button from "@/components/Button";
import { getDocument } from "@/utils/payloadHelpers";
import { getSpacing } from "@/utils/spacingUtil";

type DocumentBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "document" }
> & { payload: Payload };

export default async function DocumentBlock(props: DocumentBlockProps) {
  const document = await getDocument(props.document, props.payload);
  return (
    <div
      className="flex w-full justify-center"
      style={{
        marginBottom: getSpacing(props.bottomMargin),
      }}
    >
      <Button href={document.url!} openInNewPage color="dark">
        {props.label}
      </Button>
    </div>
  );
}
