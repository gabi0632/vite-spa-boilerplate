import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PlayIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

const HeroSection = () => {
  const [vitals, setVitals] = useState({
    heartRate: 72,
    hydration: 85,
    temperature: 98.6,
  })

  useEffect(() => {
    // Animate vitals with realistic changes
    const interval = setInterval(() => {
      setVitals(prev => ({
        heartRate: Math.floor(Math.random() * (78 - 68 + 1)) + 68,
        hydration: Math.floor(Math.random() * (95 - 80 + 1)) + 80,
        temperature: (Math.random() * (99.2 - 98.0) + 98.0).toFixed(1),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50 dark:from-surface-900/50 dark:to-surface-800/50"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20 pointer-events-none"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i % 3 === 0 ? '💙' : i % 3 === 1 ? '⚡' : '🌟'}
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
                ⚡ Revolutionary Health Tech
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-surface-900 dark:text-surface-100 leading-tight">
                Your Best{' '}
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                  Health
                </span>{' '}
                Starts Now
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-surface-600 dark:text-surface-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              VitalWatch gives you real-time insights to live a more active, mindful, and empowered life. 
              Monitor your vitals with medical-grade precision.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 20px 40px rgba(10, 132, 255, 0.3)' 
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-full text-lg font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg btn-ripple"
                aria-label="Shop VitalWatch now"
              >
                <ShoppingBagIcon className="w-5 h-5 mr-2" />
                Shop Now - $599
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-surface-300 dark:border-surface-600 text-surface-800 dark:text-surface-200 rounded-full text-lg font-semibold hover:bg-surface-50 dark:hover:bg-surface-800 transition-all duration-300"
                aria-label="Watch VitalWatch demo"
              >
                <PlayIcon className="w-5 h-5 mr-2" />
                See Demo
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-surface-600 dark:text-surface-400"
            >
              <div className="flex items-center">
                <span className="flex h-3 w-3 relative mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                FDA Cleared
              </div>
              <div>⭐ 4.9/5 Rating</div>
              <div>🏥 Trusted by 50,000+</div>
            </motion.div>
          </div>

          {/* Watch Display */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Watch */}
              <motion.div
                animate={{ 
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-80 h-80 rounded-full bg-gradient-to-br from-surface-800 to-surface-900 shadow-2xl flex items-center justify-center border-4 border-surface-700"
              >
                {/* Watch Band */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-surface-800 rounded-t-3xl"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-surface-800 rounded-b-3xl"></div>
                
                {/* Screen */}
                <div className="relative w-64 h-64 rounded-full bg-black flex flex-col items-center justify-center text-white">
                  {/* Health Rings */}
                  <div className="absolute inset-0 rounded-full">
                    <div className="health-ring absolute inset-4 opacity-30"></div>
                    <div className="health-ring absolute inset-8 opacity-50" style={{ 
                      background: `conic-gradient(from 0deg, #00C2C7 0deg, #00C2C7 ${vitals.hydration * 3.6}deg, rgba(0, 194, 199, 0.2) ${vitals.hydration * 3.6}deg)` 
                    }}></div>
                    <div className="health-ring absolute inset-12 opacity-70" style={{ 
                      background: `conic-gradient(from 0deg, #FF4757 0deg, #FF4757 ${(vitals.heartRate / 100) * 360}deg, rgba(255, 71, 87, 0.2) ${(vitals.heartRate / 100) * 360}deg)` 
                    }}></div>
                  </div>

                  {/* Center Display */}
                  <div className="relative z-10 text-center">
                    <motion.div
                      key={vitals.heartRate}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-3xl font-bold text-red-400 mb-2"
                    >
                      {vitals.heartRate} BPM
                    </motion.div>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <motion.div
                          key={vitals.hydration}
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          className="font-semibold text-blue-400"
                        >
                          {vitals.hydration}%
                        </motion.div>
                        <div className="text-gray-400">Hydration</div>
                      </div>
                      <div>
                        <motion.div
                          key={vitals.temperature}
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          className="font-semibold text-green-400"
                        >
                          {vitals.temperature}°F
                        </motion.div>
                        <div className="text-gray-400">Temp</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Health Indicators */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -left-16 top-16 bg-white dark:bg-surface-800 rounded-2xl p-4 shadow-xl border border-surface-200 dark:border-surface-700"
              >
                <div className="text-sm font-semibold text-surface-800 dark:text-surface-200 mb-1">ECG</div>
                <div className="flex items-center">
                  <div className="ecg-line w-16 h-1 bg-red-500 mr-2"></div>
                  <span className="text-xs text-surface-600 dark:text-surface-400">Normal</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -right-16 bottom-16 bg-white dark:bg-surface-800 rounded-2xl p-4 shadow-xl border border-surface-200 dark:border-surface-700"
              >
                <div className="text-sm font-semibold text-surface-800 dark:text-surface-200 mb-1">SpO₂</div>
                <div className="text-lg font-bold text-blue-500">98%</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-surface-800 rounded-2xl p-4 shadow-xl border border-surface-200 dark:border-surface-700"
              >
                <div className="text-sm font-semibold text-surface-800 dark:text-surface-200 mb-1">Steps</div>
                <div className="text-lg font-bold text-green-500">8,742</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection