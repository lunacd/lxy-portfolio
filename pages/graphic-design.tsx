import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import { PageProps } from "../utils/page-props";

const Home: NextPage<PageProps> = (props) => {
  return (
    <>
      <Head>
        <title>Shirley Lyu Portfolio</title>
      </Head>
      <div className="relative h-screen flex-grow overflow-hidden">
        Something
      </div>
    </>
  );
};

export default Home;
