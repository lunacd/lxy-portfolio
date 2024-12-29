import TextBlock from "./TextBlock";
import { ProjectPage } from "@payload-types";
import classNames from "classnames";
import Link from "next/link";
import { Payload } from "payload";

import PayloadImage from "@/components/PayloadImage";

type SmallGalleryBlockProps = Extract<
  ProjectPage["blocks"][number],
  { blockType: "smallGallery" }
> & { payload: Payload };

export default function SmallgallerBlock(props: SmallGalleryBlockProps) {
  return (
    <div className="single mb-spacing-3lg mt-spacing-lg grid grid-cols-2 gap-spacing lg:grid-cols-3">
      {props.items.map((item, index) => {
        return (
          <div
            key={index}
            className={classNames({
              "transition-transform duration-200 ease-out hover:-translate-y-4":
                item.link,
            })}
          >
            {item.link && (
              <Link href={item.link} className="cursor-pointer">
                <PayloadImage
                  media={item.image}
                  payload={props.payload}
                  sizes="33vw"
                />
              </Link>
            )}
            {!item.link && (
              <PayloadImage
                media={item.image}
                payload={props.payload}
                sizes="33vw"
              />
            )}
            <div className="mt-2">
              <TextBlock
                text={item.text}
                textColor="dark"
                blockType="text"
                bottomMargin="none"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
