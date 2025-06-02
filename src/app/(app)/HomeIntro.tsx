import IntroAnimation from "./IntroAnimation";
import { Media } from "@payload-types";
import { Payload } from "payload";
import "server-only";

import PayloadImage from "@/components/PayloadImage";

interface HomeIntroProps {
  profilePicture: Media | number;
  payload: Payload;
}

export default function HomeIntro(props: HomeIntroProps) {
  return (
    <div className="w-single py-spacing-lg flex h-[75vh] flex-col">
      <div className="relative flex grow flex-col justify-center gap-4 md:gap-8 xl:gap-12">
        <div className="flex flex-col justify-around gap-4 md:flex-row">
          <div className="max-w-1/2 self-center md:self-end">
            <IntroAnimation />
            <div className="mr-auto text-lg md:text-xl">
              <div>
                I create intuitive and impactful products and experiences
              </div>
            </div>
          </div>
          <div className="w-1/2 self-center overflow-hidden rounded-lg md:w-1/3">
            <PayloadImage
              media={props.profilePicture}
              payload={props.payload}
              sizes="(max-width: 767px) 50vw,(min-width: 768px) 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
