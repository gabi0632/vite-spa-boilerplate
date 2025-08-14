import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

const WaitlistSection = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Please enter your email address')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Save to localStorage (mock backend)
      const existingEmails = JSON.parse(localStorage.getItem('vitalwatch-waitlist') || '[]')
      
      if (!existingEmails.includes(email)) {
        existingEmails.push(email)
        localStorage.setItem('vitalwatch-waitlist', JSON.stringify(existingEmails))
      }

      setIsLoading(false)
      setIsSubmitted(true)
      
      // Analytics tracking (mock)
      console.log('Waitlist signup:', { email, timestamp: new Date().toISOString() })
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

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

  const benefits = [
    { 
      icon: '🎯', 
      text: 'Early access to VitalWatch',
      description: 'Be among the first to experience revolutionary health monitoring'
    },
    { 
      icon: '💰', 
      text: 'Exclusive launch pricing',
      description: 'Save $100 off retail price with early bird discount'
    },
    { 
      icon: '📱', 
      text: 'Beta app access',
      description: 'Help shape the future of health apps with exclusive beta testing'
    },
    { 
      icon: '🎁', 
      text: 'Free premium accessories',
      description: 'Complimentary premium leather band and wireless charging stand'
    }
  ]

  return (
    <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-500 to-accent-500 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20 pointer-events-none text-white"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {['⚡', '💎', '🚀', '⭐', '🌟', '💫', '✨', '🔥'][i]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              🚀 Limited Pre-Order
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Be the First to Experience the{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Future of Health
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Join an exclusive community of health pioneers and get VitalWatch before anyone else, 
            plus insider pricing and premium accessories.
          </motion.p>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                className="max-w-md mx-auto mb-12"
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <motion.input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 text-lg rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all"
                      aria-label="Email address for waitlist"
                      disabled={isLoading}
                    />
                    
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-8 left-0 flex items-center text-yellow-300 text-sm"
                      >
                        <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                        {error}
                      </motion.div>
                    )}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-primary-600 py-4 rounded-full text-lg font-bold hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed btn-ripple relative overflow-hidden"
                  >
                    <AnimatePresence mode="wait">
                      {isLoading ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-6 h-6 border-2 border-primary-600 border-t-transparent rounded-full mr-2"
                          />
                          Joining Waitlist...
                        </motion.div>
                      ) : (
                        <motion.span
                          key="text"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Join Waitlist - Free
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-white/80">
                  <div className="flex items-center">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex h-2 w-2 mr-2"
                    >
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </motion.span>
                    50,000+ joined
                  </div>
                  <div>🔒 No spam, ever</div>
                  <div>✉️ Instant confirmation</div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-md mx-auto mb-12"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircleIcon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">Welcome to VitalWatch!</h3>
                  <p className="text-white/90 mb-4">
                    You've successfully joined our exclusive waitlist. We'll notify you as soon as 
                    VitalWatch becomes available.
                  </p>
                  
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-sm text-white/80 mb-2">What happens next:</p>
                    <ul className="text-sm text-white space-y-1 text-left">
                      <li>• Confirmation email sent to {email}</li>
                      <li>• Early access notification (launching March 2024)</li>
                      <li>• Exclusive $100 discount code included</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Benefits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h4 className="font-semibold text-white mb-2">{benefit.text}</h4>
                <p className="text-sm text-white/80 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Urgency Indicator */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-4 text-white">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-2xl"
              >
                ⏰
              </motion.span>
              <div className="text-center">
                <p className="font-semibold">Limited Production Run</p>
                <p className="text-sm text-white/80">Only 10,000 units in first batch • 6,247 spots remaining</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WaitlistSection