import { NextPage } from "next";
import Head from "next/head";

import PageRoot from "../components/page-root";
import Scroller from "../components/scroller";
import { Sidebar } from "../components/sidebar";
import TextImage from "../components/text-image";
import TopDisplay from "../components/top-display";
import useAutoscroll from "../utils/use-autoscroll";

import ManifestoImage from "../images/soul/manifesto-half.webp";

const Soul: NextPage = () => {
  const scrollDiv = useAutoscroll();

  return (
    <>
      <Head>
        <title>Soul | Shirley Lyu Portfolio</title>
      </Head>

      <PageRoot>
        <Sidebar route="soul" prevRoute="" />
        <Scroller bgColor="bg-[#EEEAE2]" divRef={scrollDiv}>
          <TopDisplay project="soul" />

          {/* Manifesto */}
          <TextImage
            title="Project Manifesto"
            content={[
              "Regularly meditating with Rolls-Royce Meditation sets you up forever to better yourself every day. Accompanying the Rolls-Royce meditation set, you could easily fall into peace and clarity through your senses: sight, smell, and sound.",
            ]}
            image={ManifestoImage}
            width={2560}
            height={1599}
          />

          <div className="text-center text-xl font-semibold">
            Still in progress. Stay tuned!
          </div>
        </Scroller>
      </PageRoot>
    </>
  );
};

export default Soul;
