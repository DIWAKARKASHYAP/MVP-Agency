"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { RainbowButton } from "../ui/rainbow-button";

const plan = {
  name: 'Basic MVP',
  price: 2000,
  features: [
    'Core feature implementation',
    'Basic UI/UX design',
    'Mobile-responsive layout',
    '2 rounds of revisions',
    'Basic testing and QA',
  ],
}


export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/jordans.webp`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>

        <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <RainbowButton className="w-full">Choose {plan.name}</RainbowButton>

      </BackgroundGradient>
    </div>
  );
}
