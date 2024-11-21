import React from "react";
// import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";
import { RainbowButton } from "../ui/rainbow-button";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Link } from 'react-scroll';

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
        className="-top-40 left-0 md:left-60 md:-top-20 "
        fill="white"
      />


      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <AnimatedGradientText className=" mb-4">
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Introducing MVP Agency 7
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 bg-opacity-50">
          We Help You To Convert Your Dream MVP <br />
        </h1>
        <div className=" flex flex-col items-center justify-center ">

          <TypewriterEffectSmooth words={words} className=" opacity-90" />
        </div>

        <p className="mt-4 font-normal  text-xl text-neutral-300 max-w-lg text-center mx-auto">
          Transform your business idea into a functional product with our expert MVP development services
        </p>
        <div className=" mt-10 text-center">

          <Link to="contact" smooth={true} duration={300}>
            <RainbowButton className="m-auto bg-black text-white">Start Your Project Today</RainbowButton>
          </Link>
        </div>

      </div>


    </div>
  );
}
