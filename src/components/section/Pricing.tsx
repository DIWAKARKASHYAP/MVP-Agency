'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { CheckCircle } from 'lucide-react'
import { RainbowButton } from '../ui/rainbow-button'
import { Link } from 'react-scroll'

const pricingPlans = [
  {
    name: 'Basic MVP',
    originalPrice: 1897,
    offPrice: 599,
    features: [
      'Core feature implementation',
      'Modern UI/UX design',
      'Modern, scalable tech stack',
      'Seamless integrations (payments, auth, etc.)',
      '30 days of free maintenance',
      'Regular updates and transparent process',
    ],
  },
  {
    name: 'Pro MVP',
    originalPrice: 2497,
    offPrice: 799,
    features: [
      'All Basic MVP features',
      'Flexible hours allocation',
      '20 hours of development time per month',
      'Priority feature development',
      'Performance optimization',
      'Continuous maintenance & optimization',
      'Same-day emergency support',
      'Post-launch support (3 month)',
    ],
  },
]

export default function MVPPricingSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-5">Ready to Come Your Idea to Reality?</h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto text-center mb-12">Choose the perfect package for your project and get started today</p>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto text-center mb-12">*Price is negotiable based on your requirements.</p>
        <div className="flex flex-col sm:flex-row gap-5  justify-center ">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <BackgroundGradient className="rounded-[22px] max-w-[400px]  p-4 sm:p-10 bg-black">
                <div className=" rounded-xl p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                    <div className="mb-6">
                      <p className="text-4xl font-bold">${plan.offPrice}</p>
                      <p className="text-xl text-gray-400 line-through">${plan.originalPrice}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div>
                            <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="contact" smooth={true} duration={300}>
                    <RainbowButton className="w-full">Choose {plan.name}</RainbowButton>
                  </Link>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

