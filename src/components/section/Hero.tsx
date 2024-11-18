import React from "react";
// import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";
import { RainbowButton } from "../ui/rainbow-button";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
// import { RainbowButton } from "../ui/button/RainbowButton";
const words = [
  {
    text: "Into",
  },
  {
    text: "Reality",
  },
  {
    text: "with",
  },
  {
    text: "Heigh",
  },
  {
    text: "Speed.",
    className: "text-orange-500 dark:text-orange-500",
  },
];

export function SpotlightPreview() {
  return (
    <div className="min-h-[40rem] w-full py-32 rounded-md flex md:items-center md:justify-center bg-black antialiased bg-grid-white/[0.03] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 bg-opacity-50">
        We Help You To Convert Your Dream MVP <br />
        </h1>
        <div className=" flex flex-col items-center justify-center ">

        <TypewriterEffectSmooth words={words} className=" opacity-90"/>
        </div>

        <p className="mt-4 font-normal  text-xl text-neutral-300 max-w-lg text-center mx-auto">
        Transform your business idea into a functional product with our expert MVP development services
        </p>
        <div className=" mt-10 text-center">

        <RainbowButton className="m-auto bg-black text-white">Start Your Project Today</RainbowButton>
        </div>

      </div>

      
    </div>
  );
}
