import "./global.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Catamaran } from "next/font/google";
import { PropsWithChildren } from "react";

const catamaran = Catamaran({ subsets: ["latin"] });

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={catamaran.className}>{props.children}</body>
      <GoogleAnalytics gaId="G-26S1RW6P14" />
      <SpeedInsights />
    </html>
  );
}
