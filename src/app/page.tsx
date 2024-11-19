// import { CardStackDemo } from "@/components/section/Card";
import Contact from "@/components/section/Contact";
import { SpotlightPreview } from "@/components/section/Hero";
// import { TypewriterEffectSmoothDemo } from "@/components/section/HeroText";
import { NavbarDemo } from "@/components/section/NavBar";
import MVPPricingSection from "@/components/section/Pricing";
// import { BackgroundBeamsWithCollisionDemo } from "@/components/section/RainSection";
// import { BackgroundGradientDemo } from "@/components/section/ShoeCard";
import { WhyChooseUs } from "@/components/section/Why-chose-us";
// import { BentoGrid } from "@/components/ui/bento-grid";
import { LampDemo } from "@/components/ui/lamp";
// import { Spotlight } from "@/components/ui/Spotlight";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <SpotlightPreview />
      <div id="why">
        <WhyChooseUs />
      </div>
      <div id="pricing">
        <MVPPricingSection />
      </div>
      {/* <CardStackDemo/> */}
      {/* <LampDemo /> */}

<div id="contact">
  
      <Contact/>
</div>


      
      {/* <BackgroundBeamsWithCollisionDemo/> */}
      {/* <div className=" flex">

    <BackgroundGradientDemo/>
    <BackgroundGradientDemo/>
    </div>

    <TypewriterEffectSmoothDemo/> */}
    </>
  );
}
