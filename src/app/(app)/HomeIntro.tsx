import styles from "./HomeIntro.module.css";
import { Media } from "@payload-types";
import Link from "next/link";
import { Payload } from "payload";
import "server-only";

import PayloadImage from "@/components/PayloadImage";
import ScrollIndicator from "@/components/ScrollIndicator";

interface HomeIntroProps {
  profilePicture: Media | number;
  payload: Payload;
}

export default function HomeIntro(props: HomeIntroProps) {
  return (
    <div className="flex h-screen w-single flex-col py-spacing-lg">
      <div className="relative flex flex-grow flex-col justify-center gap-12">
        <div className="flex flex-row justify-around">
          <div className="self-end">
            <div className="text-3xl font-bold">
              <div>Hi,</div>
              <div>I&apos;m Shirley</div>
            </div>
            <div className="mr-auto mt-4 text-xl">
              <div>I am a multidisciplinary designer</div>
              <div>who create intuitive and impactful products</div>
            </div>
          </div>
          <div className="w-1/3 overflow-hidden rounded-lg">
            <PayloadImage
              media={props.profilePicture}
              payload={props.payload}
              sizes="33vw"
            />
          </div>
        </div>
        <div className="flex justify-around">
          <div className={styles.button}>
            <Link href="/focus/product-design">Product Design</Link>
          </div>
          <div className={styles.button}>
            <Link href="/focus/user-experience-design">
              User Experience Design
            </Link>
          </div>
          <div className={styles.button}>
            <Link href="/focus/edtech">Learning Experience Design</Link>
          </div>
        </div>
      </div>
      <div className="text-center mb-2">Scroll for all projects</div>
      <div className="self-center">
        <ScrollIndicator light={true} />
      </div>
    </div>
  );
}
