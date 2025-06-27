import { ProjectPage } from "@payload-types";
import { Payload } from "payload";

import Testimonial from "@/components/Testimonial";
import { getSpacing } from "@/utils/spacingUtil";

type TestimonialProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "testimonial" }
> & { payload: Payload };

export default function TestimonialBlock(props: TestimonialProps) {
  return (
    <div
      className="w-full"
      style={{ marginBottom: getSpacing(props.bottomMargin) }}
    >
      <Testimonial
        author={props.author}
        testimonial={props.content}
        avatar={props.avatar}
        color={props.color}
        payload={props.payload}
      ></Testimonial>
    </div>
  );
}
