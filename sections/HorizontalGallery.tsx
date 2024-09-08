import classNames from "classnames";
import Image from "next/image";

import FloatUpMotion from "@/components/FloatUpMotion";
import TextSection, {
  TextAlignment,
  TextContentType,
} from "@/components/TextSection";
import GalleryItem from "@/utils/GalleryItem";

interface HorizontalGalleryProps {
  items: GalleryItem[];
  width: number;
  height: number;
  sparse?: boolean;
  botSpacing?: boolean;
  textColor?: string;
  titleClass?: "title" | "subtitle" | "paragraph";
  alignment?: TextAlignment;
}

const defaultProps = {
  sparse: false,
  botSpacing: true,
  textColor: "text-black",
  titleClass: "subtitle",
};

export default function HorizontalGallery(propsIn: HorizontalGalleryProps) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <FloatUpMotion>
      <div
        className={classNames(
          `horizontalGallery_container ${props.textColor}`,
          {
            "mb-spacing-3lg": props.botSpacing,
            "mb-spacing": !props.botSpacing,
            "gap-spacing-lg": props.sparse,
            "gap-spacing": !props.sparse,
          },
        )}
      >
        {props.items.map((item, index) => (
          <div className="horizontalGallery_itemContainer" key={index}>
            <div className="mb-2 w-two-thirds flex-shrink-0 md:w-full xl:mb-6">
              <Image
                src={item.image}
                alt={item.title}
                width={props.width}
                height={props.height}
                placeholder="blur"
              />
            </div>
            <div className="text-left md:text-center w-full">
              <TextSection
                content={
                  item.content
                    ? [
                        { type: TextContentType.Subtitle, text: item.title },
                      ].concat(item.content)
                    : [{ type: TextContentType.Subtitle, text: item.title }]
                }
                alignment={props.alignment}
              />
            </div>
          </div>
        ))}
      </div>
    </FloatUpMotion>
  );
}
