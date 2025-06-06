import classNames from "classnames";
import Image from "next/image";

import FloatUpMotion from "@/components/FloatUpMotion";
import LegacyTextSection, {
  TextAlignment,
  TextContentType,
} from "@/components/LegacyTextSection";
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

export default function LegacyHorizontalGallery(
  propsIn: HorizontalGalleryProps,
) {
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
            <div className="w-two-thirds mb-2 shrink-0 md:w-full xl:mb-6">
              <Image
                src={item.image}
                alt={item.title}
                width={props.width}
                height={props.height}
                placeholder="blur"
                unoptimized
              />
            </div>
            <div className="w-full text-left md:text-center">
              <LegacyTextSection
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
