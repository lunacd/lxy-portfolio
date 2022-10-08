import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  // noinspection HtmlRequiredTitleElement,JSUnresolvedLibraryURL
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <script
          src="https://kit.fontawesome.com/da5ba6d7d2.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
