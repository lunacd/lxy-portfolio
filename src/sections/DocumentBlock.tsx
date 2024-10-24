import { ProjectPage } from "@payload-types";
import classNames from "classnames";
import { Payload } from "payload";
import "server-only";

import Button from "@/components/Button";
import { getDocument } from "@/utils/payloadHelpers";

type DocumentBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "document" }
> & { payload: Payload };

export default async function DocumentBlock(props: DocumentBlockProps) {
  const document = await getDocument(props.document, props.payload);
  return (
    <div
      className={classNames("flex w-full justify-center", {
        "mb-spacing-3lg": props.bottomMargin,
      })}
    >
      <Button href={document.url!}>{props.label}</Button>
    </div>
  );
}
