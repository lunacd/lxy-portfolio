import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";

import Button from "@/components/Button";
import { getSpacing } from "@/utils/spacingUtil";

type ButtonBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "button" }
> & { payload: Payload };

export default async function ButtonBlock(props: ButtonBlockProps) {
  return (
    <div
      className="flex w-full justify-center"
      style={{
        marginBottom: getSpacing(props.bottomMargin),
      }}
    >
      <Button
        href={props.link}
        openInNewPage={props.openInNewPage}
        color={props.color}
      >
        {props.label}
      </Button>
    </div>
  );
}
