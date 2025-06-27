import PayloadImage from "./PayloadImage";
import { Media } from "@payload-types";
import classNames from "classnames";
import { Poller_One } from "next/font/google";
import { Payload } from "payload";

import TextBlock, { RichTextContent } from "@/blocks/TextBlock";

interface TestimonialProps {
  color: string;
  testimonial: RichTextContent;
  author: RichTextContent;
  avatar?: Media | number | null;
  payload: Payload;
  className?: string;
}

const pollerOne = Poller_One({ subsets: ["latin"], weight: "400" });

export default function Testimonial(props: TestimonialProps) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        boxShadow: "-1rem 1rem 0px 0px rgba(0,0,0,0.6)",
      }}
      className={classNames(
        "relative flex h-full flex-row gap-4 rounded-2xl",
        props.className,
      )}
    >
      <div className="flex flex-row py-8 pl-8 grow">
        <div className={classNames(pollerOne.className, "text-8xl")}>“</div>
        <div className="ml-2 flex flex-col gap-8 grow">
          <TextBlock
            text={props.testimonial}
            textColor="dark"
            blockType="text"
            bottomMargin="none"
          ></TextBlock>
          <TextBlock
            text={props.author}
            textColor="dark"
            blockType="text"
            bottomMargin="none"
            className="mt-auto"
          ></TextBlock>
        </div>
      </div>
      {props.avatar && (
        <PayloadImage
          media={props.avatar}
          payload={props.payload}
          sizes="100%"
          className="mt-8 min-h-0 w-1/4 max-w-40 self-end"
          style={{ aspectRatio: "1024 / 1217" }}
        />
      )}
    </div>
  );
}
