import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const HealthSection = () => {
  const [animatedValues, setAnimatedValues] = useState({
    hydration: 0,
    heartRate: 0,
    temperature: 0,
    steps: 0
  })
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      // Animate values when section comes into view
      const targetValues = {
        hydration: 85,
        heartRate: 72,
        temperature: 98.6,
        steps: 8742
      }

      Object.keys(targetValues).forEach(key => {
        let current = 0
        const target = targetValues[key]
        const increment = target / 100

        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          
          setAnimatedValues(prev => ({
            ...prev,
            [key]: key === 'temperature' ? current.toFixed(1) : Math.floor(current)
          }))
        }, 20)
      })
    }
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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

  const healthFeatures = [
    '💧 Stay perfectly hydrated throughout your day',
    '❤️ Monitor your heart\'s rhythm with medical precision',
    '🫁 Track oxygen levels like a professional athlete',
    '🌡️ Know your body temperature patterns intimately',
    '🧠 Detect and manage stress before it overwhelms you',
    '😴 Optimize your sleep for peak recovery'
  ]

  return (
    <section id="health" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-surface-900/80 dark:via-surface-800/60 dark:to-surface-900/80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                📊 Health Intelligence
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-surface-100 mb-6 leading-tight">
                Your health.{' '}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  In your hands.
                </span>
              </h2>
              
              <p className="text-xl text-surface-600 dark:text-surface-400 leading-relaxed mb-8">
                VitalWatch goes beyond traditional fitness tracking. Our proprietary sensors work together 
                to paint a complete picture of your health, helping you make informed decisions about your wellness journey.
              </p>
            </div>

            {/* Health Features List */}
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {healthFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-surface-800/50 transition-all duration-300"
                >
                  <div className="text-2xl">{feature.split(' ')[0]}</div>
                  <p className="text-surface-700 dark:text-surface-300 font-medium">
                    {feature.split(' ').slice(1).join(' ')}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.button
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 btn-ripple"
            >
              Start Your Health Journey
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

          {/* Health Dashboard */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="bg-white dark:bg-surface-800 rounded-3xl p-8 shadow-2xl border border-surface-200 dark:border-surface-700">
              <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-8 text-center">
                Live Health Dashboard
              </h3>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-2 gap-6">
                {/* Hydration */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 text-center border border-blue-200 dark:border-blue-700/50"
                >
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <svg className="w-20 h-20 transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-blue-200 dark:text-blue-800"
                      />
                      <motion.circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        className="text-blue-500"
                        initial={{ strokeDasharray: "0 226" }}
                        animate={{ 
                          strokeDasharray: isInView ? `${(animatedValues.hydration / 100) * 226} 226` : "0 226"
                        }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {animatedValues.hydration}%
                      </span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-surface-800 dark:text-surface-200 mb-1">Hydration</h4>
                  <p className="text-sm text-surface-600 dark:text-surface-400">Well hydrated</p>
                </motion.div>

                {/* Heart Rate */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl p-6 text-center border border-red-200 dark:border-red-700/50"
                >
                  <div className="mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                      className="text-4xl text-red-500 mb-2"
                    >
                      💓
                    </motion.div>
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                      {animatedValues.heartRate}
                    </div>
                  </div>
                  <h4 className="font-semibold text-surface-800 dark:text-surface-200 mb-1">Heart Rate</h4>
                  <p className="text-sm text-surface-600 dark:text-surface-400">BPM - Normal</p>
                </motion.div>

                {/* Temperature */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 text-center border border-green-200 dark:border-green-700/50"
                >
                  <div className="mb-4">
                    <div className="text-4xl text-green-500 mb-2">🌡️</div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {animatedValues.temperature}°F
                    </div>
                  </div>
                  <h4 className="font-semibold text-surface-800 dark:text-surface-200 mb-1">Temperature</h4>
                  <p className="text-sm text-surface-600 dark:text-surface-400">Normal range</p>
                </motion.div>

                {/* Steps */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-6 text-center border border-purple-200 dark:border-purple-700/50"
                >
                  <div className="mb-4">
                    <div className="text-4xl text-purple-500 mb-2">👟</div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {animatedValues.steps.toLocaleString()}
                    </div>
                  </div>
                  <h4 className="font-semibold text-surface-800 dark:text-surface-200 mb-1">Steps</h4>
                  <p className="text-sm text-surface-600 dark:text-surface-400">Daily goal: 87%</p>
                </motion.div>
              </div>

              {/* Real-time indicator */}
              <motion.div
                className="flex items-center justify-center mt-6 space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.span
                  className="flex h-3 w-3 relative"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </motion.span>
                <span className="text-sm font-medium text-surface-600 dark:text-surface-400">
                  Live monitoring active
                </span>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -top-6 -left-6 bg-white dark:bg-surface-800 rounded-2xl p-4 shadow-xl border border-surface-200 dark:border-surface-700"
            >
              <div className="text-sm font-semibold text-surface-800 dark:text-surface-200 mb-1">Sleep Quality</div>
              <div className="flex items-center">
                <div className="text-green-500 text-lg mr-2">😴</div>
                <span className="text-sm text-surface-600 dark:text-surface-400">92% - Excellent</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-surface-800 rounded-2xl p-4 shadow-xl border border-surface-200 dark:border-surface-700"
            >
              <div className="text-sm font-semibold text-surface-800 dark:text-surface-200 mb-1">Stress Level</div>
              <div className="flex items-center">
                <div className="text-yellow-500 text-lg mr-2">😌</div>
                <span className="text-sm text-surface-600 dark:text-surface-400">Low - Relaxed</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HealthSection