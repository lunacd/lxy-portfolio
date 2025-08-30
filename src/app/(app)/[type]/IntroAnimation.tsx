"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

export default function IntroAnimation() {
  const [initial, setInitial] = useState(true);
  return (
    <DotLottieReact
      src="/IntroAnimation.lottie"
      loop={!initial}
      autoplay
      dotLottieRefCallback={(dotLottie) => {
        if (!dotLottie) {
          return;
        }
        dotLottie.addEventListener("complete", () => {
          setInitial(false);
          dotLottie.play();
        });
      }}
      segment={initial ? [0, 158] : [159, 541]}
      className="w-140 max-w-full"
    />
  );
}
