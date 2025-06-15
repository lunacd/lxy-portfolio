"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function WalkingDuck() {
  return (
    <DotLottieReact
      src="/WalkingDuck.lottie"
      loop
      autoplay
      className="w-140 max-w-full"
      speed={0.7}
    />
  );
}
