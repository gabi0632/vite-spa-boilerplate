import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShoppingBagIcon, PlayIcon, ShieldCheckIcon, TruckIcon, HeartIcon } from '@heroicons/react/24/outline'

const CTASection = () => {
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

  const guarantees = [
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      text: '30-Day Money Back Guarantee'
    },
    {
      icon: <TruckIcon className="w-6 h-6" />,
      text: 'Free Worldwide Shipping'
    },
    {
      icon: <HeartIcon className="w-6 h-6" />,
      text: '2-Year Full Warranty'
    }
  ]

  const handleOrderClick = () => {
    // In a real app, this would navigate to checkout
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleLearnMoreClick = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface-900 to-black text-white relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-accent-900/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.1
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-sm font-medium mb-4">
              💎 Premium Experience
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Ready to transform your{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              health?
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-surface-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Join thousands who've already discovered the future of personal wellness monitoring. 
            Your healthiest life is just one click away.
          </motion.p>

          {/* Pricing Card */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              {/* Premium Badge */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full text-sm font-bold">
                  🏆 Most Popular
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-3xl"></div>

              <div className="relative z-10 pt-4">
                <h3 className="text-2xl font-bold mb-2">VitalWatch Pro</h3>
                <p className="text-surface-300 mb-6">Complete health monitoring solution</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-center justify-center">
                    <span className="text-5xl font-bold">$599</span>
                    <div className="ml-4 text-left">
                      <div className="text-surface-400 line-through">$799</div>
                      <div className="text-green-400 font-semibold">Save $200</div>
                    </div>
                  </div>
                  <p className="text-surface-400 mt-2">Launch price • Limited time</p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                  {[
                    'Real-time health monitoring',
                    'AI-powered health insights',
                    'Medical-grade sensors',
                    'Premium titanium case',
                    '18+ hour battery life',
                    'Wireless charging included',
                    'Premium leather band',
                    'Lifetime app updates'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-surface-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={handleOrderClick}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(10, 132, 255, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-lg font-bold hover:shadow-lg transition-all duration-300 btn-ripple"
                  >
                    <ShoppingBagIcon className="w-5 h-5 mr-2" />
                    Order VitalWatch Now
                  </motion.button>

                  <motion.button
                    onClick={handleLearnMoreClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    <PlayIcon className="w-5 h-5 mr-2" />
                    Learn More
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center justify-center space-x-3 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
              >
                <div className="text-primary-400">
                  {guarantee.icon}
                </div>
                <span className="font-medium">{guarantee.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">50K+</div>
                <div className="text-surface-400">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">4.9★</div>
                <div className="text-surface-400">App Store</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">99%</div>
                <div className="text-surface-400">Accuracy</div>
              </div>
            </div>

            {/* Urgency */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 px-6 py-3 rounded-full border border-red-400/30"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-400"
              >
                🔥
              </motion.span>
              <span className="font-semibold">Limited stock • Only 847 units left</span>
            </motion.div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center justify-center space-x-8 opacity-60"
          >
            {['FDA Approved', 'CE Marked', 'ISO 13485', 'GDPR Compliant'].map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="text-sm font-medium border border-white/20 px-4 py-2 rounded-full"
              >
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// CheckCircleIcon component (since it's missing from the import)
const CheckCircleIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export default CTASection