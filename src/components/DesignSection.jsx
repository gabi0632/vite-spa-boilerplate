import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  SwatchIcon, 
  ShieldCheckIcon, 
  PaintBrushIcon,
  SunIcon,
  CpuChipIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

const DesignSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const designFeatures = [
    {
      icon: <CpuChipIcon className="w-8 h-8" />,
      title: 'Titanium Excellence',
      description: 'Aerospace-grade titanium case with sapphire crystal display. Lightweight, durable, and hypoallergenic for all-day comfort.',
      color: 'from-gray-500 to-slate-600',
      bgColor: 'bg-gray-50 dark:bg-gray-900/20'
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Water Resistant',
      description: 'Swim-proof design with 50m water resistance. Track your hydration even during water activities with complete peace of mind.',
      color: 'from-blue-500 to-teal-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: <PaintBrushIcon className="w-8 h-8" />,
      title: 'Customizable Bands',
      description: 'Choose from sport, leather, or metal bands. Quick-release mechanism for effortless style changes that match any occasion.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: <SunIcon className="w-8 h-8" />,
      title: 'Always-On Display',
      description: 'OLED display with adaptive brightness that\'s visible in any lighting condition. 1000 nits brightness for outdoor visibility.',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      icon: <SwatchIcon className="w-8 h-8" />,
      title: 'Premium Materials',
      description: 'Crafted from recycled materials without compromising durability. Carbon neutral manufacturing for the environmentally conscious.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: <BoltIcon className="w-8 h-8" />,
      title: 'Ultra-Fast Charging',
      description: 'Revolutionary battery technology with wireless charging. 0-80% in just 30 minutes, 18+ hours of continuous health monitoring.',
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    }
  ]

  return (
    <section id="design" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-surface-50 dark:from-surface-800 dark:to-surface-900" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
              ✨ Premium Design
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-surface-100 mb-6"
          >
            Designed for{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              life
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-surface-600 dark:text-surface-400 max-w-3xl mx-auto leading-relaxed"
          >
            Premium materials meet cutting-edge technology in a design that's as beautiful as it is functional. 
            Every detail crafted for the modern lifestyle.
          </motion.p>
        </motion.div>

        {/* Design Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {designFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative bg-white dark:bg-surface-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-surface-200 dark:border-surface-700 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
              
              {/* Icon */}
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-2xl mb-6 relative z-10`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <div className={`bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`}>
                  {feature.icon}
                </div>
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/20 to-transparent dark:from-purple-900/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Product Gallery Preview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">
              Available Colors & Styles
            </h3>
            <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
              Choose the perfect combination that matches your style
            </p>
          </motion.div>

          {/* Color Options */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-8 mb-8">
            {[
              { name: 'Midnight Black', color: 'bg-gray-900', selected: true },
              { name: 'Silver', color: 'bg-gray-300', selected: false },
              { name: 'Gold', color: 'bg-yellow-400', selected: false },
              { name: 'Rose Gold', color: 'bg-rose-400', selected: false }
            ].map((option, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`cursor-pointer p-2 rounded-full ${option.selected ? 'ring-4 ring-primary-500' : 'ring-2 ring-surface-300 dark:ring-surface-600'}`}
              >
                <div className={`w-12 h-12 ${option.color} rounded-full shadow-lg`} title={option.name}></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Band Options */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { name: 'Sport Band', material: 'Fluoroelastomer', image: '🏃' },
              { name: 'Leather Loop', material: 'Italian Leather', image: '👔' },
              { name: 'Metal Bracelet', material: 'Stainless Steel', image: '⚡' }
            ].map((band, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-surface-800 rounded-2xl p-6 shadow-lg border border-surface-200 dark:border-surface-700"
              >
                <div className="text-4xl mb-4">{band.image}</div>
                <h4 className="font-bold text-surface-900 dark:text-surface-100 mb-2">{band.name}</h4>
                <p className="text-surface-600 dark:text-surface-400">{band.material}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(147, 51, 234, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 btn-ripple"
            >
              Customize Your VitalWatch
              <motion.svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DesignSection