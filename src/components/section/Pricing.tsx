'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { CheckCircle } from 'lucide-react'
import { RainbowButton } from '../ui/rainbow-button'

const pricingPlans = [
  {
    name: 'Basic MVP',
    price: 2000,
    features: [
      'Core feature implementation',
      'Basic UI/UX design',
      'Mobile-responsive layout',
      '2 rounds of revisions',
      'Basic testing and QA',
    ],
  },
  {
    name: 'Pro MVP',
    price: 2500,
    features: [
      'All Basic MVP features',
      'Advanced UI/UX design',
      'Integration with 3rd party APIs',
      'Performance optimization',
      'Extended testing and QA',
      'Post-launch support (1 month)',
    ],
  },
]

export default function MVPPricingSection() {
  return (
    
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-5">Ready to Come Your Idea to Reality?</h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto text-center mb-12">Choose the perfect package for your project and get started today</p>
        <div className="flex flex-col sm:flex-row gap-5  justify-center ">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
      <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-black">
      <div className=" rounded-xl p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                    <p className="text-4xl font-bold mb-6">${plan.price}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <RainbowButton className="w-full">Choose {plan.name}</RainbowButton>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}