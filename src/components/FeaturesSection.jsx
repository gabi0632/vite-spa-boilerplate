import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  HeartIcon, 
  BeakerIcon, 
  CpuChipIcon, 
  BoltIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  const features = [
    {
      icon: <BeakerIcon className="w-8 h-8" />,
      title: "Know Your Body's Rhythm",
      description: "Advanced bio-impedance sensors detect dehydration before symptoms appear. Personalized hydration targets based on your activity, climate, and health goals.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Feel Confident Every Beat",
      description: "Real-time ECG, heart rate variability, blood oxygen, and body temperature monitoring with medical-grade accuracy. AI-powered trend analysis alerts you to changes.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-900/20"
    },
    {
      icon: <CpuChipIcon className="w-8 h-8" />,
      title: "Unlock Your Potential",
      description: "Machine learning algorithms analyze your unique patterns to predict health risks, optimize performance, and provide personalized wellness recommendations.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: <BoltIcon className="w-8 h-8" />,
      title: "Power Through Your Day",
      description: "Revolutionary power management delivers 18+ hours of continuous monitoring. Fast charge to 80% in just 30 minutes with our advanced battery technology.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Medical-Grade Precision",
      description: "FDA-cleared sensors with clinical-grade accuracy. Trusted by healthcare professionals and validated through rigorous medical studies.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "24/7 Health Insights",
      description: "Continuous monitoring that never sleeps. Get comprehensive health reports, sleep analysis, and recovery metrics around the clock.",
      color: "from-teal-500 to-blue-500",
      bgColor: "bg-teal-50 dark:bg-teal-900/20"
    }
  ]

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent dark:via-surface-800/30"></div>
      
      {/* Floating Health Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-10 dark:opacity-5"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {['🏥', '💊', '🩺', '⚕️', '🧬', '💉', '🔬', '🫀'][i]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
              🚀 Revolutionary Technology
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-surface-100 mb-6"
          >
            Revolutionary{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              health monitoring
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-surface-600 dark:text-surface-400 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the future of personal health with cutting-edge sensors, AI-powered insights, 
            and medical-grade precision that fits on your wrist.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
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
                <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100 mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/20 to-transparent dark:from-primary-900/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(10, 132, 255, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('health')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 btn-ripple"
          >
            Explore Health Features
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
      </div>
    </section>
  )
}

export default FeaturesSection