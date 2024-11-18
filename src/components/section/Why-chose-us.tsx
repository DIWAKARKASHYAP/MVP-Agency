'use client'
import React from 'react'
// import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
// import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
// import { BackgroundGradient } from '@/components/ui/background-gradient'
import { Zap, Scale, Lightbulb } from 'lucide-react'
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision'
 
// const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
// `;
 

// const features = [
//     {
//       title: "Speed",
//       description: "We deliver MVPs rapidly, helping you validate your ideas and get to market faster.",
//       icon: <Zap className="w-10 h-10" />,
//     },
//     {
//       title: "Scalability",
//       description: "Our solutions are built to grow with your business, ensuring long-term success.",
//       icon: <Scale className="w-10 h-10" />,
//     },
//     {
//       title: "Innovation",
//       description: "We leverage the latest technologies to keep your product ahead of the curve.",
//       icon: <Lightbulb className="w-10 h-10" />,
//     },
//   ]
  
export function WhyChooseUs() {
  return(

      <>
          <BackgroundBeamsWithCollision>

      <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground">
            At our agency, we're passionate about turning innovative ideas into successful digital products. With years of experience in MVP development, we're dedicated to helping startups and businesses thrive in the digital landscape. Our expertise spans across cutting-edge technologies, with a focus on web and mobile app development, AI integration, and blockchain solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Zap className="w-12 h-12 text-primary" />}
            title="Speed"
            description="We deliver MVPs rapidly, helping you validate your ideas and get to market faster."
          />
          <FeatureCard 
            icon={<Scale className="w-12 h-12 text-primary" />}
            title="Scalability"
            description="Our solutions are built to grow with your business, ensuring long-term success."
          />
          <FeatureCard 
            icon={<Lightbulb className="w-12 h-12 text-primary" />}
            title="Innovation"
            description="We leverage the latest technologies to keep your product ahead of the curve."
          />
        </div>
      </div>
    </section>
    </BackgroundBeamsWithCollision>

  {/* <TextGenerateEffect words={words} /> */}
  </>
    ) 
}

function FeatureCard({ icon, title, description }:any) {
    return (
      <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg transition-transform hover:scale-105">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    )
  }