"use client";

import PageRoot from "../components/page-root";
import { Sidebar } from "../components/sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { Catamaran } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { StateProvider } from "./stateProvider";

// Google fonts
const catamaran = Catamaran({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // // Main page cycling
  // const [hamburgerColor, setHamburgerColor] = useState("text-black");
  // const [counter, setCounter] = useState(0);
  // const [interval, setInterval] = useState<number | null>(3000);
  // useEffect(() => {
  //   setHamburgerColor(hamburgerColors[counter % hamburgerColors.length]);
  // }, [counter]);
  // const hoverEnter = (route: string) => {
  //   setInterval(null);
  //   setCounter(projects.indexOf(route));
  // };
  // const hoverLeave = () => {
  //   setInterval(3000);
  //   setCounter((orig) => orig + 1);
  // };
  // useInterval(() => {
  //   setCounter((orig) => orig + 1);
  // }, interval);

  // // Get current route
  // const [currentRoute, setCurrentRoute] = useState("");
  // const [useCounter, setUseCounter] = useState(false);

  // useEffect(() => {
  //   if (router.pathname === "/") {
  //     setUseCounter(true);
  //     setDisplayAnimation(true);
  //   } else {
  //     setUseCounter(false);
  //     setCurrentRoute(router.pathname.slice(1));
  //     setDisplayAnimation(false);
  //   }
  // }, [router.pathname]);
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
        <Script
          src="https://kit.fontawesome.com/da5ba6d7d2.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-26S1RW6P14"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-26S1RW6P14');`}
        </Script>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --base-font: ${catamaran.style.fontFamily};
              }
            `,
          }}
        ></style>
      </head>
      <body>
        <PageRoot>
          <StateProvider>
            <Sidebar />
            <div className="relative min-h-screen flex-grow overflow-x-hidden">
              <AnimatePresence initial={false}>
                {children}
                {/* </motion.div> */}
              </AnimatePresence>
            </div>
          </StateProvider>
        </PageRoot>
      </body>
    </html>
  );
}
